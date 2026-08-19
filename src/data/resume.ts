import type { Resume } from '../types/resume'

/**
 * Sole factual source for résumé content.
 * printHighlights → one-page print + default website view
 * extendedHighlights → website-only expanded details
 */
export const resume: Resume = {
  name: 'Guilherme Ferreira',
  headline: 'Full Stack Software Engineer',
  location: 'Itajubá, MG, Brazil',
  phone: {
    label: '+55 35 98869-5696',
    href: 'tel:+5535988695696',
  },
  email: {
    label: 'guilhermesin2011@gmail.com',
    href: 'mailto:guilhermesin2011@gmail.com',
  },
  links: [
    {
      label: 'linkedin.com/in/guilheeeeeeerme',
      href: 'https://www.linkedin.com/in/guilheeeeeeerme/',
    },
    {
      label: 'github.com/Guilheeeeeeerme',
      href: 'https://github.com/Guilheeeeeeerme',
    },
  ],
  contact: [
    { label: 'Itajubá, MG, Brazil' },
    {
      label: '+55 35 98869-5696',
      href: 'tel:+5535988695696',
    },
    {
      label: 'guilhermesin2011@gmail.com',
      href: 'mailto:guilhermesin2011@gmail.com',
    },
    {
      label: 'linkedin.com/in/guilheeeeeeerme',
      href: 'https://www.linkedin.com/in/guilheeeeeeerme/',
      printLabel: 'linkedin.com/in/guilheeeeeeerme',
    },
    {
      label: 'github.com/Guilheeeeeeerme',
      href: 'https://github.com/Guilheeeeeeerme',
    },
  ],
  summary:
    'Full Stack Software Engineer with 10+ years of experience building distributed systems, enterprise applications, and manufacturing software. Strong expertise in the JavaScript and TypeScript ecosystems, with a focus on Domain-Driven Design, event-driven architectures, and enterprise integrations. Two years of hands-on AI-assisted development using Claude, Cursor, and OpenCode for spec-driven delivery, PRD-based feature design, parallel worktree development, subagent orchestration, and AI-powered PR review. Experienced in designing and evolving software for manufacturing, financial services, and real-time systems. Fluent in English and experienced collaborating with distributed international teams.',
  keyAchievements: [
    {
      title: 'Full-Stack Product Owner — Offshore Oil & Gas',
      description:
        'Architected and delivered RZX Tecnologia\'s core platform from the ground up — sole owner of every feature, selected for offshore deployment in live oil & gas operations. Product survived acquisition, became Cognittiv, and continues operating today.',
    },
    {
      title: 'Fintech Technical Lead — Banking & Transit Payments',
      description:
        'Led architecture and delivery of a microservices payment platform at B2ML connecting dozens of public-transit recharge providers, homologating a POS system from scratch, and meeting all banking security and compliance requirements under COVID-driven deadline pressure.',
    },
    {
      title: 'High-Stakes Outsourcing — IoT & Manufacturing at Scale',
      description:
        'Delivered production features and resolved support escalations at MachineMetrics in a complex manufacturing domain — shipping MES capabilities on a high-volume IoT + ERP data platform with zero ramp-up time.',
    },
  ],
  skills: [
    {
      label: 'Core',
      value: 'React, Angular, TypeScript, Node.js, NestJS, Docker, Microservices',
    },
    {
      label: 'Languages',
      value: 'JavaScript, TypeScript, Java, Python, C#/.NET',
    },
    {
      label: 'Frontend',
      value: 'React, Angular, Redux, NgRx, Micro Frontends, HTML/CSS',
    },
    {
      label: 'Backend',
      value: 'Node.js, NestJS, Express, .NET Core, REST APIs, GraphQL, Hasura, Keycloak',
    },
    {
      label: 'Databases & Messaging',
      value: 'MySQL, PostgreSQL, Redis, RabbitMQ, NATS',
    },
    {
      label: 'Tools & Infra',
      value: 'Docker, Git, Keycloak, REST APIs, GraphQL, Kubernetes (basic), AWS, Azure, GitHub Actions',
    },
    {
      label: 'Architecture',
      value: 'Domain-Driven Design (DDD), Event-Driven Architecture, Microservices, Distributed Systems, Manufacturing Execution Systems (MES)',
    },
    {
      label: 'AI-Assisted Development',
      value: 'Claude, Cursor, OpenCode, GitHub Copilot, Spec-Driven Development, PRD, Skills, Subagents, Worktrees, Parallel Development, AI PR Review',
    },
  ],
  skillsKeywords:
    'JavaScript, TypeScript, Java, Python, C#, .NET, React, Angular, Redux, NgRx, Micro Frontends, HTML, CSS, Node.js, NestJS, Express, .NET Core, REST APIs, GraphQL, Hasura, Keycloak, MySQL, PostgreSQL, Redis, RabbitMQ, NATS, Docker, Git, Kubernetes, AWS, Azure, GitHub Actions, Domain-Driven Design, DDD, Event-Driven Architecture, Microservices, Distributed Systems, Manufacturing Execution Systems, MES, AI-Assisted Development, Spec-Driven Development, PRD, Claude, Cursor, OpenCode, GitHub Copilot, Full Stack Software Engineer',
  experience: [
    {
      id: 'machinemetrics',
      company: 'MachineMetrics',
      title: 'Full Stack Software Engineer',
      dates: 'Apr 2024 – Present',
      printHighlights: [
        'Develop enterprise manufacturing software used by CNC operators and production teams across shop-floor workflows.',
        'Designed and implemented MES capabilities supporting multiple operational models, including ERP-driven, labor-based, and legacy production workflows.',
        'Led the implementation of the Waiting For Work (WFW) workflow and support for palletized machines using event-driven orchestration.',
        'Delivered features including First Article Inspection, labor reporting, part counting, scheduling improvements, and ETTC calculations.',
        'Applied AI-assisted development workflows (Claude, Cursor, OpenCode) for spec-driven delivery, PRD-based feature design, parallel worktree development, subagent orchestration, and AI-powered PR review.',
        'Own technical design, domain modeling, API design, database migrations, production support, and incident investigation for assigned features.',
      ],
      extendedHighlights: [
        'Work spans scheduling, execution, and shop-floor operations.',
        'Stack on this role: React, Node.js, TypeScript, GraphQL, Hasura, MySQL, Redis, NATS.',
        'AI-assisted development: Claude, Cursor, OpenCode, GitHub Copilot — spec-driven development, PRDs, skills, subagents, worktrees, parallel development.',
      ],
      technologies: [
        'React',
        'Node.js',
        'TypeScript',
        'MySQL',
        'Redis',
        'NATS',
        'Hasura',
        'GraphQL',
      ],
    },
    {
      id: 'creed',
      company: 'Creed Interactive',
      title: 'Outsourced Software Engineer / Consultant',
      dates: 'Nov 2022 – Apr 2024',
      printHighlights: [
        'Maintained and upgraded a suite of Micro Frontend (MFE) applications built in Angular and React, improving platform stability and developer experience across a shared monorepo.',
        'Led the migration of a family of SSO systems to Keycloak, enabling centralized identity federation and streamlining authentication across multiple enterprise products.',
        'Architected and delivered a super-app navigation layer connecting multiple MFE products under a unified Keycloak-backed SSO, enabling seamless cross-app switching for end users.',
        'Built and maintained NestJS microservices and Docker-based infrastructure supporting the MFE platform, owning both frontend and backend layers end to end.',
        'Collaborated directly with product stakeholders across inventory, logistics, and operations domains, translating business requirements into TypeScript-first full-stack solutions.',
      ],
      extendedHighlights: [
        'Stack on this role: Angular, React, TypeScript, NestJS, Node.js, Docker, Keycloak.',
      ],
      technologies: [
        'Angular',
        'React',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Docker',
        'Keycloak',
      ],
    },
    {
      id: 'mariner',
      company: 'Mariner',
      title: 'Front-End Software Engineer',
      dates: 'Jul 2021 – Nov 2022',
      printHighlights: [
        'Built Angular applications for industrial operations and shop-floor software.',
        'Collaborated on API contract design and data modeling with backend teams.',
        'Promoted Docker adoption across development teams through technical guidance.',
        'Maintained cloud-hosted applications and Azure integrations.',
      ],
      extendedHighlights: [
        'Also maintained related pipelines for Azure-hosted applications.',
        'Stack on this role: Angular, TypeScript, Azure, Docker, GitHub Actions.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Azure',
        'Docker',
        'GitHub Actions',
      ],
    },
    {
      id: 'b2ml',
      company: 'B2ML Sistemas',
      title: 'Full Stack Software Engineer / Technical Lead',
      dates: 'Jan 2019 – Jul 2021',
      printHighlights: [
        'Served as Technical Lead for a banking platform built on a microservices architecture.',
        'Led integrations with banking systems, payment platforms, and third-party services.',
        'Worked on security requirements, certification processes, and financial industry standards.',
        'Mentored junior developers and collaborated directly with customers and business stakeholders.',
      ],
      extendedHighlights: [
        'Third-party integrations included payment and transport-related services.',
        'Stack on this role: C#, .NET Core, RabbitMQ, PostgreSQL, Angular, AWS, Docker.',
      ],
      technologies: [
        'C#',
        '.NET Core',
        'RabbitMQ',
        'PostgreSQL',
        'Angular',
        'AWS',
        'Docker',
      ],
    },
    {
      id: 'rzx',
      company: 'RZX Tecnologia',
      title: 'Full Stack Software Engineer',
      dates: 'Jan 2016 – Dec 2018',
      printHighlights: [
        'Progressed from intern to a key contributor on industrial software projects.',
        'Developed backend services, APIs, and web applications supporting real-time offshore operations.',
        'Contributed to distributed systems processing operational data and continued supporting the platform as an independent consultant.',
      ],
      extendedHighlights: [
        'Stack on this role: Node.js, Angular, React, Docker, Redis, PostgreSQL.',
      ],
      technologies: [
        'Node.js',
        'Angular',
        'React',
        'Docker',
        'Redis',
        'PostgreSQL',
      ],
    },
    {
      id: 'saskpower',
      company: 'SaskPower',
      title: 'Software Developer Intern',
      dates: 'May 2015 – Aug 2015',
      printHighlights: [
        'Built ISO-compliant mobile applications during a summer internship in Regina, Saskatchewan, Canada.',
        'Developed hybrid mobile apps using Apache Cordova, jQuery, JavaScript, and HTML/CSS for internal utility operations.',
      ],
      extendedHighlights: [
        'Stack on this role: Apache Cordova, jQuery, JavaScript, HTML/CSS.',
      ],
      technologies: ['Apache Cordova', 'jQuery', 'JavaScript', 'HTML/CSS'],
    },
  ],
  education: [
    {
      degree: 'MBA in Software Engineering with AI',
      school: 'Faculdade Full Cycle de Tecnologia (FCTECH), Brazil',
      dates: '2026 – present',
    },
    {
      degree: "Master's Candidate — Computer Science & Technology (incomplete)",
      school: 'Federal University of Itajubá (UNIFEI), Brazil',
      dates: '2019 – 2021',
      note: 'Research discontinued due to project termination; plans to resume.',
    },
    {
      degree: 'Bachelor of Information Systems',
      school: 'Federal University of Itajubá (UNIFEI), Brazil',
      dates: '2011 – 2016',
    },
    {
      degree: 'Computer Science Exchange Program',
      school: 'University of Regina, Canada',
      dates: '2014',
    },
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Portuguese', level: 'Native' },
  ],
  meta: {
    title: 'Guilherme Ferreira — Full Stack Software Engineer',
    description:
      'Résumé of Guilherme Ferreira, Full Stack Software Engineer with experience in distributed systems, manufacturing software, and enterprise applications.',
    siteUrl: 'https://guilheeeeeeerme.github.io/resume/',
  },
}
