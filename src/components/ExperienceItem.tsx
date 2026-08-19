import type { ExperienceEntry } from '../types/resume'

type Props = {
  job: ExperienceEntry
  expanded: boolean
  onToggle: () => void
}

export function ExperienceItem({ job, expanded, onToggle }: Props) {
  const panelId = `experience-${job.id}-details`
  const hasExtended = job.extendedHighlights.length > 0

  return (
    <article className="job">
      <div className="job-header">
        <div>
          <h3 className="job-title">
            <span className="job-company">{job.company}</span>
            {' — '}
            {job.title}
          </h3>
        </div>
        <p className="job-date">
          <time>{job.dates}</time>
        </p>
      </div>

      <ul className="job-highlights">
        {job.printHighlights.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <p className="stack" aria-label="Technologies">
        {job.technologies.join(' · ')}
      </p>

      {hasExtended ? (
        <>
          <button
            type="button"
            className="more-btn screen-only"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={onToggle}
          >
            {expanded ? 'Hide details' : 'More details'}
          </button>
          <div
            id={panelId}
            className="job-extended screen-only"
            hidden={!expanded}
          >
            <ul>
              {job.extendedHighlights.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </article>
  )
}
