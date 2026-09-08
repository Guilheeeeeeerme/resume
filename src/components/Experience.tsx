import type { ExperienceEntry } from '../types/resume'
import { ExperienceItem } from './ExperienceItem'

type Props = {
  experience: ExperienceEntry[]
}

export function Experience({ experience }: Props) {
  return (
    <section className="resume-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">
        Experience
      </h2>
      <div className="jobs">
        {experience.map((job) => (
          <ExperienceItem key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}
