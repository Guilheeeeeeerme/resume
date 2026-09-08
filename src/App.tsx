import { resume } from './data/resume'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { KeyAchievements } from './components/KeyAchievements'
import { Languages } from './components/Languages'
import { PrintButton } from './components/PrintButton'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Summary } from './components/Summary'
import { ThemeToggle } from './components/ThemeToggle'
import { JsonLd } from './components/JsonLd'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode, cycleMode } = useTheme()

  return (
    <>
      <JsonLd resume={resume} />
      <a className="skip-link screen-only" href="#resume-content">
        Skip to résumé
      </a>

      <div className="toolbar screen-only" role="toolbar" aria-label="Résumé controls">
        <ThemeToggle mode={mode} onCycle={cycleMode} />
        <PrintButton />
        <p className="toolbar-hint">
          Print / Save as PDF targets one page on US Letter.
        </p>
      </div>

      <main id="resume-content" className="resume" tabIndex={-1}>
        <Header
          name={resume.name}
          headline={resume.headline}
          contact={resume.contact}
        />

        <div className="resume-columns">
          <div className="col-main">
            <Summary summary={resume.summary} mostAmazing={resume.mostAmazing} />
            <Experience experience={resume.experience} />
          </div>

          <div className="col-side">
            <Projects projects={resume.projects} />
            <KeyAchievements achievements={resume.keyAchievements} />
            <Skills
              skills={resume.skills}
              skillsKeywords={resume.skillsKeywords}
            />
            <Education education={resume.education} />
            <Languages languages={resume.languages} />
          </div>
        </div>

        <footer className="resume-print-footer">
          {'Printed on '}
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          {' · Latest version: '}
          <a href="https://guilheeeeeeerme.github.io/resume/" target="_blank" rel="noopener noreferrer">
            guilheeeeeeerme.github.io/resume
          </a>
          {' — Online version may be more up to date'}
        </footer>
      </main>
    </>
  )
}

export default App
