import type { Resume } from '../types/resume'

type Props = {
  resume: Resume
}

/** Structured data for crawlers / some auto-readers (not shown visually). */
export function JsonLd({ resume }: Props) {
  const knowsAbout = resume.skillsKeywords
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resume.name,
    jobTitle: resume.headline,
    email: resume.email.href?.replace(/^mailto:/, ''),
    telephone: resume.phone.href?.replace(/^tel:/, ''),
    url: resume.meta.siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Itajubá',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    sameAs: resume.links.map((link) => link.href),
    knowsAbout,
    description: resume.meta.description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
