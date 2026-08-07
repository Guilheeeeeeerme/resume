import type { ExperienceEntry } from '../types/resume'
import { ExperienceItem } from './ExperienceItem'

type Props = {
  experience: ExperienceEntry[]
  expandedIds: Set<string>
  onToggle: (id: string) => void
}

export function Experience({ experience, expandedIds, onToggle }: Props) {
  return (
    <section className="resume-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">
        Experience
      </h2>
      <div className="jobs">
        {experience.map((job) => (
          <ExperienceItem
            key={job.id}
            job={job}
            expanded={expandedIds.has(job.id)}
            onToggle={() => onToggle(job.id)}
          />
        ))}
      </div>
    </section>
  )
}
