import { useCallback, useMemo, useState } from 'react'
import { resume } from './data/resume'
import { Education } from './components/Education'
import { ExpandControls } from './components/ExpandControls'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Languages } from './components/Languages'
import { PrintButton } from './components/PrintButton'
import { Skills } from './components/Skills'
import { Summary } from './components/Summary'
import { ThemeToggle } from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode, cycleMode } = useTheme()
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set())

  const allIds = useMemo(
    () => resume.experience.map((job) => job.id),
    [],
  )

  const allExpanded =
    allIds.length > 0 && allIds.every((id) => expandedIds.has(id))

  const toggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const expandAll = useCallback(() => {
    setExpandedIds(new Set(allIds))
  }, [allIds])

  const collapseAll = useCallback(() => {
    setExpandedIds(new Set())
  }, [])

  return (
    <>
      <a className="skip-link screen-only" href="#resume-content">
        Skip to résumé
      </a>

      <div className="toolbar screen-only" role="toolbar" aria-label="Résumé controls">
        <ThemeToggle mode={mode} onCycle={cycleMode} />
        <ExpandControls
          allExpanded={allExpanded}
          onExpandAll={expandAll}
          onCollapseAll={collapseAll}
        />
        <PrintButton />
        <p className="toolbar-hint">
          Print / Save as PDF uses a one-page layout (A4 or US Letter).
        </p>
      </div>

      <main id="resume-content" className="resume" tabIndex={-1}>
        <Header
          name={resume.name}
          headline={resume.headline}
          contact={resume.contact}
        />
        <Summary summary={resume.summary} />
        <Skills skills={resume.skills} />
        <Experience
          experience={resume.experience}
          expandedIds={expandedIds}
          onToggle={toggle}
        />
        <div className="footer-row">
          <Education education={resume.education} />
          <Languages languages={resume.languages} />
        </div>
      </main>
    </>
  )
}

export default App
