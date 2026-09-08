import type { ProjectEntry } from '../types/resume'

type Props = {
  projects: ProjectEntry[]
}

function shortUrl(url: string) {
  return url.replace(/^https?:\/\//, '')
}

export function Projects({ projects }: Props) {
  if (projects.length === 0) return null

  return (
    <section
      className="resume-section projects-section"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-title">
        Public Demos
      </h2>
      <p className="projects-note">
        Things I made — NDA-safe demos of production AI patterns (direct links).
      </p>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project">
            <div className="project-header">
              <h3 className="project-name">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>
              <p className="project-tagline">{project.tagline}</p>
            </div>
            <p className="project-desc">{project.summary}</p>
            <p className="project-links">
              <a
                className="project-url"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl(project.href)}
              </a>
              <a
                className="project-url project-repo"
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl(project.repoHref)}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
