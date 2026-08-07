/**
 * Print layout validation for A4 and US Letter.
 *
 * Usage:
 *   node scripts/print-validate.mjs              # both
 *   node scripts/print-validate.mjs --format=a4
 *   node scripts/print-validate.mjs --format=letter
 *
 * Expects a preview server at PRINT_BASE_URL (default http://127.0.0.1:4173/resume/).
 */

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'print-output')

const FORMATS = {
  a4: { name: 'a4', width: '210mm', height: '297mm' },
  letter: { name: 'letter', width: '8.5in', height: '11in' },
}

function parseFormats(argv) {
  const flag = argv.find((a) => a.startsWith('--format='))
  if (!flag) return Object.keys(FORMATS)
  const value = flag.split('=')[1]
  if (!(value in FORMATS)) {
    throw new Error(`Unknown format: ${value}. Use a4 or letter.`)
  }
  return [value]
}

async function validateFormat(browser, baseUrl, formatKey) {
  const format = FORMATS[formatKey]
  const page = await browser.newPage()

  // Dark theme must not affect print ink
  await page.addInitScript(() => {
    localStorage.setItem('resume-theme', 'dark')
  })

  await page.goto(baseUrl, { waitUntil: 'networkidle' })

  // Expand details — print CSS must still hide them
  await page.getByRole('button', { name: 'Expand all' }).click()

  const pdfPath = path.join(outDir, `resume-${format.name}.pdf`)
  const pdf = await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: false,
    width: format.width,
    height: format.height,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  // Heuristic: PDF page count from trailer /Count or page objects
  const text = pdf.toString('latin1')
  const countMatch = text.match(/\/Type\s*\/Pages[^>]*?\/Count\s+(\d+)/)
  const pageCount = countMatch ? Number(countMatch[1]) : null

  const metrics = await page.evaluate(() => {
    const resume = document.querySelector('.resume')
    const extended = document.querySelectorAll('.job-extended:not([hidden])')
    const toolbar = document.querySelector('.toolbar')
    const style = getComputedStyle(document.body)
    return {
      resumeHeight: resume ? resume.getBoundingClientRect().height : 0,
      expandedVisibleOnScreen: extended.length,
      toolbarDisplay: toolbar ? getComputedStyle(toolbar).display : 'missing',
      bodyBg: style.backgroundColor,
    }
  })

  // Emulate print and confirm interactive / extended content is hidden
  await page.emulateMedia({ media: 'print' })
  const printChecks = await page.evaluate(() => {
    const toolbar = document.querySelector('.toolbar')
    const moreBtns = [...document.querySelectorAll('.more-btn')]
    const extended = [...document.querySelectorAll('.job-extended')]
    const resume = document.querySelector('.resume')
    const cs = resume ? getComputedStyle(resume) : null
    return {
      toolbarHidden: !toolbar || getComputedStyle(toolbar).display === 'none',
      moreHidden: moreBtns.every((el) => getComputedStyle(el).display === 'none'),
      extendedHidden: extended.every((el) => getComputedStyle(el).display === 'none'),
      resumeBg: cs?.backgroundColor ?? null,
      resumeColor: cs?.color ?? null,
      overflowX: resume ? resume.scrollWidth > resume.clientWidth + 1 : false,
    }
  })

  await page.close()

  const okPages = pageCount === 1
  const okPrintChrome =
    printChecks.toolbarHidden &&
    printChecks.moreHidden &&
    printChecks.extendedHidden

  const result = {
    format: format.name,
    pdfPath,
    pageCount,
    okPages,
    okPrintChrome,
    metrics,
    printChecks,
    pass: okPages && okPrintChrome && !printChecks.overflowX,
  }

  return result
}

async function main() {
  const formats = parseFormats(process.argv.slice(2))
  const baseUrl =
    process.env.PRINT_BASE_URL ?? 'http://127.0.0.1:4173/resume/'

  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const results = []

  try {
    for (const format of formats) {
      const result = await validateFormat(browser, baseUrl, format)
      results.push(result)
      const status = result.pass ? 'PASS' : 'FAIL'
      console.log(
        `[${status}] ${result.format}: pages=${result.pageCount} chromeHidden=${result.okPrintChrome} overflowX=${result.printChecks.overflowX}`,
      )
      console.log(`  pdf: ${result.pdfPath}`)
    }
  } finally {
    await browser.close()
  }

  await writeFile(
    path.join(outDir, 'report.json'),
    JSON.stringify(results, null, 2),
  )

  if (results.some((r) => !r.pass)) {
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
