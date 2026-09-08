export type ContactItem = {
  label: string
  href?: string
  printLabel?: string
}

export type SkillGroup = {
  label: string
  value: string
}

export type ExperienceEntry = {
  id: string
  company: string
  title: string
  dates: string
  printHighlights: string[]
  extendedHighlights: string[]
  technologies: string[]
}

export type EducationEntry = {
  degree: string
  school: string
  dates?: string
  details?: string
  note?: string
  /** Website only — omitted from Letter PDF to free sidebar space. */
  screenOnly?: boolean
}

export type LanguageEntry = {
  name: string
  level: string
}

export type ResumeLink = {
  label: string
  href: string
}

export type KeyAchievement = {
  title: string
  description: string
}

export type ProjectEntry = {
  id: string
  name: string
  tagline: string
  /** Short public blurb for the sidebar. */
  summary: string
  /** Live demo / app URL. */
  href: string
  /** Public GitHub repository URL. */
  repoHref: string
}

export type Resume = {
  name: string
  headline: string
  location: string
  phone: ContactItem
  email: ContactItem
  links: ResumeLink[]
  contact: ContactItem[]
  /** First-person résumé summary (Toptal About stays third person when pasting). */
  summary: string
  /** Toptal “most amazing…” differentiator — one specific shipped story. */
  mostAmazing: string
  skills: SkillGroup[]
  /** Plain keyword string for ATS / auto-readers. */
  skillsKeywords: string
  keyAchievements: KeyAchievement[]
  /** Public NDA-safe demos (Made, not Did). */
  projects: ProjectEntry[]
  experience: ExperienceEntry[]
  education: EducationEntry[]
  languages: LanguageEntry[]
  meta: {
    title: string
    description: string
    siteUrl: string
  }
}
