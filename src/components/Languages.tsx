import type { LanguageEntry } from '../types/resume'

type Props = {
  languages: LanguageEntry[]
}

export function Languages({ languages }: Props) {
  return (
    <section className="resume-section" aria-labelledby="languages-heading">
      <h2 id="languages-heading" className="section-title">
        Languages
      </h2>
      <ul className="lang-list">
        {languages.map((lang) => (
          <li key={lang.name}>
            <strong>{lang.name}</strong>
            <span> — {lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
