import type { EducationEntry } from '../types/resume'

type Props = {
  education: EducationEntry[]
}

export function Education({ education }: Props) {
  return (
    <section className="resume-section" aria-labelledby="education-heading">
      <h2 id="education-heading" className="section-title">
        Education
      </h2>
      <ul className="edu-list">
        {education.map((edu) => (
          <li className="edu" key={edu.degree}>
            <strong>{edu.degree}</strong>
            <span>{edu.school}</span>
            {edu.dates && <span className="edu-dates">{edu.dates}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
