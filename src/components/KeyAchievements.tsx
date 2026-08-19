import type { KeyAchievement } from '../types/resume'

type Props = {
  achievements: KeyAchievement[]
}

export function KeyAchievements({ achievements }: Props) {
  return (
    <section className="resume-section" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading" className="section-title">
        Key Achievements
      </h2>
      <ul className="achievements-list">
        {achievements.map((item) => (
          <li key={item.title} className="achievement">
            <strong className="achievement-title">{item.title}</strong>
            <span className="achievement-desc">{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
