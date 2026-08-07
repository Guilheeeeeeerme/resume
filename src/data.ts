export const resume = {
  name: 'Guilherme Ferreira',
  headline: 'Full Stack Software Engineer',
  contact: [
    { label: 'Itajubá, MG, Brazil' },
    { label: '+55 35 98869-5696', href: 'tel:+5535988695696' },
    { label: 'wa.me/5535988695696', href: 'https://wa.me/5535988695696' },
    { label: 'ferreiraga@outlook.com', href: 'mailto:ferreiraga@outlook.com' },
    {
      label: 'linkedin.com/in/guilheeeeeeerme',
      href: 'https://www.linkedin.com/in/guilheeeeeeerme/',
    },
    {
      label: 'github.com/Guilheeeeeeerme',
      href: 'https://github.com/Guilheeeeeeerme',
    },
  ],
  summary:
    'Full Stack Software Engineer with 10+ years building distributed systems, enterprise applications, and manufacturing software. Strong in JavaScript/TypeScript, Domain-Driven Design, event-driven architectures, operational workflows, and enterprise integrations across industrial operations, financial systems, and real-time environments. Accustomed to distributed international teams.',
  skills: [
    { label: 'Languages', value: 'JavaScript, TypeScript, C#, SQL' },
    {
      label: 'Frontend',
      value: 'React, Angular, Redux, NgRx, Ionic, Microfrontends',
    },
    {
      label: 'Backend',
      value: 'Node.js, Express, NestJS, .NET Core, REST, GraphQL, Hasura, Keycloak',
    },
    {
      label: 'Data & Messaging',
      value: 'MySQL, PostgreSQL, Redis, RabbitMQ, NATS',
    },
    {
      label: 'Cloud & DevOps',
      value: 'AWS, Azure, Docker, GitHub Actions, Bitbucket Pipelines',
    },
    {
      label: 'Architecture',
      value:
        'Domain-Driven Design, Event-Driven Architecture, Distributed Systems, Microservices, MES',
    },
  ],
  experience: [
    {
      title: 'MachineMetrics — Full Stack Software Engineer',
      dates: 'Apr 2024 – Present',
      bullets: [
        'Develop and maintain MES software for CNC operators and production teams (scheduling, execution, shop-floor); implement machine-level flows supporting legacy, ERP-driven, and labor-based production models.',
        'Implement Waiting For Work (WFW) idle-state tracking from production activity, operator presence, and execution telemetry; add palletized-machine support via event-driven orchestration.',
        'Deliver First Article Inspection, labor reporting, part counting, scheduling improvements, and ETTC calculations.',
        'Own technical design of assigned features: domain modeling, database migrations, API design, production support, and incident investigation.',
      ],
      stack:
        'React · Node.js · TypeScript · GraphQL · Hasura · MySQL · Redis · NATS',
    },
    {
      title: 'Creed Interactive — Software Engineer',
      dates: 'Nov 2022 – Apr 2024',
      bullets: [
        'Built enterprise Angular apps in a microfrontend ecosystem; implemented cross-app navigation and Keycloak authentication.',
        'Delivered inventory, logistics, and operational-management features with product stakeholders; contributed to platform modernization, upgrades, and stability.',
      ],
      stack: 'Angular · TypeScript · Node.js · NestJS · Keycloak · AWS',
    },
    {
      title: 'Mariner — Front-End Software Engineer',
      dates: 'Jun 2021 – Nov 2022',
      bullets: [
        'Developed Angular apps for industrial software and shop-floor operations; helped standardize Docker across teams.',
        'Participated in API contract design and data modeling with Python backends; maintained Azure-hosted apps, integrations, and pipelines.',
      ],
      stack: 'Angular · TypeScript · Azure · Docker · GitHub Actions',
    },
    {
      title: 'B2ML Sistemas — Full Stack Engineer / Technical Lead',
      dates: 'Jan 2019 – Jun 2021',
      bullets: [
        'Technical lead on a banking sub-acquiring microservices platform; led integrations with banking systems, payment platforms, and transport services.',
        'Worked with security requirements, certification, and financial-industry standards; mentored juniors and collaborated with stakeholders and customers.',
      ],
      stack: 'C# · .NET Core · RabbitMQ · PostgreSQL · Angular · AWS · Docker',
    },
    {
      title: 'RZX Tecnologia — Full Stack Software Engineer',
      dates: 'Jan 2016 – Dec 2018',
      bullets: [
        'Grew from intern to primary contributor on real-time industrial software for offshore operations; built backend services, APIs, and web apps on distributed systems processing operational data streams.',
        'Continued supporting the platform as an independent consultant after leaving.',
      ],
      stack: 'Node.js · Angular · React · Docker · Redis · PostgreSQL',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Information Systems',
      school: 'Federal University of Itajubá (UNIFEI), Brazil',
    },
    {
      degree: 'Computer Science Exchange',
      school: 'University of Regina, Canada',
    },
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Portuguese', level: 'Native' },
  ],
} as const
