import type { SkillGroup } from '../types/resume'

type Props = {
  skills: SkillGroup[]
}

export function Skills({ skills }: Props) {
  return (
    <section className="resume-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">
        Technical Skills
      </h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li className="skill" key={skill.label}>
            <span className="skill-label">{skill.label}</span>
            <span className="skill-value">{skill.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
