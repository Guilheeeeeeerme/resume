import { resume } from './data'

function App() {
  return (
    <main className="resume">
      <header>
        <div className="identity">
          <h1>{resume.name}</h1>
          <div className="headline">{resume.headline}</div>
        </div>
        <div className="contact">
          {resume.contact.map((item) =>
            'href' in item ? (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ) : (
              <span key={item.label}>{item.label}</span>
            ),
          )}
        </div>
      </header>

      <section>
        <h2 className="section-title">Summary</h2>
        <p className="summary">{resume.summary}</p>
      </section>

      <section>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills">
          {resume.skills.map((skill) => (
            <div className="skill" key={skill.label}>
              <span className="skill-label">{skill.label}</span>
              <span className="skill-value">{skill.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Experience</h2>
        <div className="jobs">
          {resume.experience.map((job) => (
            <article className="job" key={job.title}>
              <div className="job-header">
                <div className="job-title">{job.title}</div>
                <div className="job-date">{job.dates}</div>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="stack">{job.stack}</div>
            </article>
          ))}
        </div>
      </section>

      <div className="footer-row">
        <section>
          <h2 className="section-title">Education</h2>
          <div className="edu-list">
            {resume.education.map((edu) => (
              <div className="edu" key={edu.degree}>
                <strong>{edu.degree}</strong>
                <span>{edu.school}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Languages</h2>
          <div className="lang-line">
            {resume.languages.map((lang) => (
              <div key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
