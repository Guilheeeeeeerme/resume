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
  details?: string
}

export type LanguageEntry = {
  name: string
  level: string
}

export type ResumeLink = {
  label: string
  href: string
}

export type Resume = {
  name: string
  headline: string
  location: string
  phone: ContactItem
  email: ContactItem
  links: ResumeLink[]
  contact: ContactItem[]
  summary: string
  skills: SkillGroup[]
  /** Plain keyword string for ATS / auto-readers. */
  skillsKeywords: string
  experience: ExperienceEntry[]
  education: EducationEntry[]
  languages: LanguageEntry[]
  meta: {
    title: string
    description: string
    siteUrl: string
  }
}
