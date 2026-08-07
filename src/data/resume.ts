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
    'Full Stack Software Engineer with 10+ years of experience building distributed systems, enterprise applications, and manufacturing software. Strong expertise in the JavaScript and TypeScript ecosystems, with a focus on Domain-Driven Design, event-driven architectures, and enterprise integrations. Experienced in designing and evolving software for manufacturing, financial services, and real-time systems. Fluent in English and experienced collaborating with distributed international teams.',
  skills: [
    { label: 'Languages', value: 'JavaScript, TypeScript, C#, SQL' },
    {
      label: 'Frontend',
      value: 'React, Angular, Redux, NgRx, Ionic, Microfrontends',
    },
    {
      label: 'Backend',
      value:
        'Node.js, NestJS, Express, .NET Core, REST APIs, GraphQL, Hasura, Keycloak',
    },
    {
      label: 'Databases & Messaging',
      value: 'MySQL, PostgreSQL, Redis, RabbitMQ, NATS',
    },
    {
      label: 'Cloud & DevOps',
      value: 'AWS, Azure, Docker, GitHub Actions, Bitbucket Pipelines',
    },
    {
      label: 'Architecture',
      value:
        'Domain-Driven Design (DDD), Event-Driven Architecture, Distributed Systems, Manufacturing Execution Systems (MES)',
    },
  ],
  skillsKeywords:
    'JavaScript, TypeScript, C#, SQL, React, Angular, Redux, NgRx, Ionic, Microfrontends, Node.js, NestJS, Express, .NET Core, REST APIs, GraphQL, Hasura, Keycloak, MySQL, PostgreSQL, Redis, RabbitMQ, NATS, AWS, Azure, Docker, GitHub Actions, Bitbucket Pipelines, Domain-Driven Design, DDD, Event-Driven Architecture, Distributed Systems, Manufacturing Execution Systems, MES, Full Stack Software Engineer',
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
        'Own technical design, domain modeling, API design, database migrations, production support, and incident investigation for assigned features.',
      ],
      extendedHighlights: [
        'Work spans scheduling, execution, and shop-floor operations.',
        'Stack on this role: React, Node.js, TypeScript, GraphQL, Hasura, MySQL, Redis, NATS.',
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
      title: 'Software Engineer',
      dates: 'Nov 2022 – Apr 2024',
      printHighlights: [
        'Developed and maintained enterprise Angular applications within a microfrontend architecture.',
        'Implemented authentication and cross-application navigation using Keycloak.',
        'Partnered with product stakeholders to deliver inventory, logistics, and operational management features.',
        'Contributed to platform modernization, dependency upgrades, bug fixes, and overall application stability.',
      ],
      extendedHighlights: [
        'Stack on this role: Angular, TypeScript, Node.js, NestJS, Keycloak, AWS.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Keycloak',
        'AWS',
      ],
    },
    {
      id: 'mariner',
      company: 'Mariner',
      title: 'Front-End Software Engineer',
      dates: 'Jun 2021 – Nov 2022',
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
      dates: 'Jan 2019 – Jun 2021',
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
  ],
  education: [
    {
      degree: 'Bachelor of Information Systems',
      school: 'Federal University of Itajubá (UNIFEI), Brazil',
    },
    {
      degree: 'Computer Science Exchange Program',
      school: 'University of Regina, Canada',
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
