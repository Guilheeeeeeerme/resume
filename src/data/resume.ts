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
    'Full Stack Software Engineer with 10+ years building distributed systems, enterprise applications, and manufacturing software. Strong in the JavaScript and TypeScript ecosystems, with focus on Domain-Driven Design, event-driven architectures, and enterprise integrations. Experience designing and evolving software for manufacturing, financial services, and real-time systems. Fluent in English; collaborates with distributed international teams.',
  skills: [
    { label: 'Languages', value: 'JavaScript, TypeScript, C#, SQL' },
    {
      label: 'Frontend',
      value: 'React, Angular, Redux, NgRx, Ionic, Microfrontends',
    },
    {
      label: 'Backend',
      value: 'Node.js, NestJS, Express, .NET Core, REST APIs, GraphQL',
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
        'Domain-Driven Design, Event-Driven Architecture, Distributed Systems, MES',
    },
  ],
  experience: [
    {
      id: 'machinemetrics',
      company: 'MachineMetrics',
      title: 'Full Stack Software Engineer',
      dates: 'Apr 2024 – Present',
      printHighlights: [
        'Develop manufacturing software for CNC operators and production teams across shop-floor workflows; design and implement MES capabilities for ERP-driven, labor-based, and legacy production models.',
        'Led Waiting For Work (WFW) idle-state tracking and palletized-machine support via event-driven orchestration.',
        'Delivered First Article Inspection, labor reporting, part counting, scheduling improvements, and ETTC calculations.',
        'Own technical design for assigned features: domain modeling, API design, database migrations, production support, and incident investigation.',
      ],
      extendedHighlights: [
        'Work spans scheduling, execution, and shop-floor operations used by CNC operators and production teams.',
        'Technologies on this role include React, Node.js, TypeScript, GraphQL, Hasura, MySQL, Redis, and NATS.',
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
        'Built enterprise Angular apps in a microfrontend architecture; implemented Keycloak authentication and cross-application navigation.',
        'Delivered inventory, logistics, and operational-management features with product stakeholders; contributed to modernization, upgrades, and stability.',
      ],
      extendedHighlights: [
        'Developed and maintained applications within a shared microfrontend ecosystem.',
        'Work included dependency upgrades, bug fixes, and broader platform stability efforts.',
        'Technologies: Angular, TypeScript, Node.js, NestJS, Keycloak, AWS.',
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
        'Built Angular apps for industrial and shop-floor operations; collaborated on API contracts and data modeling with backend teams.',
        'Promoted Docker adoption across development teams; maintained Azure-hosted applications and integrations.',
      ],
      extendedHighlights: [
        'Technical guidance supported Docker standardization across teams.',
        'Maintained cloud-hosted applications, Azure integrations, and related pipelines.',
        'Technologies: Angular, TypeScript, Azure, Docker, GitHub Actions.',
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
        'Technical Lead on a banking platform with a microservices architecture; led integrations with banking systems, payment platforms, and third-party services.',
        'Worked on security requirements, certification processes, and financial industry standards; mentored juniors and collaborated with customers and stakeholders.',
      ],
      extendedHighlights: [
        'Platform work involved payment and transport-related third-party integrations.',
        'Technologies: C#, .NET Core, RabbitMQ, PostgreSQL, Angular, AWS, Docker.',
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
        'Grew from intern to key contributor on industrial software for real-time offshore operations; built backend services, APIs, and web apps on distributed systems processing operational data.',
        'Continued supporting the platform as an independent consultant after leaving.',
      ],
      extendedHighlights: [
        'Work included distributed systems that processed operational data streams.',
        'Technologies: Node.js, Angular, React, Docker, Redis, PostgreSQL.',
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
