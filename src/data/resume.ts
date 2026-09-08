import type { Resume } from '../types/resume'

/**
 * Sole factual source for résumé + Toptal-aligned copy.
 * printHighlights → one-page print + default website view
 * extendedHighlights → website-only product/tech depth
 * projects → public NDA-safe demos (Made, not Did)
 */
export const resume: Resume = {
  name: 'Guilherme Ferreira',
  headline: 'Software Engineer · AI Systems & Spec-Driven Delivery',
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
    'I am a software engineer with 10+ years shipping distributed systems for manufacturing, financial services, and real-time operations — including MES at MachineMetrics and platforms deployed in offshore oil and gas. I specialize in TypeScript/JavaScript full-stack engineering, always-on shop-floor UIs, and AI systems (LLM orchestration, VLM pipelines, tenant isolation, OWASP LLM Top 10 guardrails), delivered through spec-driven development with agent workflows. Clients rely on me for pragmatic architecture, measurable performance on data-heavy interfaces, and clear collaboration with distributed international teams.',
  mostAmazing:
    'Hardened MachineMetrics’ React MES — a 24/7, data-heavy manufacturing execution product on high-volume IoT + ERP streams — shipping Waiting For Work and palletized-machine workflows where a stalled UI stops the floor, not just a tab.',
  keyAchievements: [
    {
      title: 'MachineMetrics MES — critical shop-floor product',
      description:
        'Always-on MES on IoT + ERP: WFW, palletized machines, FAI, labor, scheduling — live UIs that cannot stall mid-shift under bursty machine data.',
    },
    {
      title: 'Offshore oil & gas platform (RZX → Cognittiv)',
      description:
        'Built the core industrial platform end to end; selected for offshore deployment, later expanded as Cognittiv, still running in production.',
    },
    {
      title: 'Fintech payments lead (B2ML)',
      description:
        'Led microservices transit payments, POS homologation from scratch, and banking security under COVID-driven deadline pressure.',
    },
  ],
  projects: [
    {
      id: 'promptdesk',
      name: 'Promptdesk',
      tagline: 'Multi-tenant AI support',
      summary:
        'LLM support demo: cost-ranked model failover, SSO MFEs, guidelines as chat context without leaking tenant claims.',
      href: 'https://app.promptdesk.ferredemo.dev',
      repoHref: 'https://github.com/Guilheeeeeeerme/promptdesk',
    },
    {
      id: 'argus',
      name: 'Argus',
      tagline: 'AI vision triage',
      summary:
        'VLM triage demo: Postgres RLS multi-tenancy, edge cameras, real-time operator MFE for company-scoped decisions.',
      href: 'https://app.argus.ferredemo.dev',
      repoHref: 'https://github.com/Guilheeeeeeerme/argus',
    },
    {
      id: 'quizzeira',
      name: 'Quizzeira',
      tagline: 'AI quiz grading',
      summary:
        'Educational AI demo: async grading workers, answer-key isolation from the UI, rate-limited APIs.',
      href: 'https://app.quizzeira.ferredemo.dev',
      repoHref: 'https://github.com/Guilheeeeeeerme/quizzeira',
    },
  ],
  skills: [
    {
      label: 'Featured',
      value:
        'TypeScript, React, Angular, Node.js, NestJS, LLM Systems, Spec-Driven Development, Claude, Cursor, OpenCode, Subagents, Microservices',
    },
    {
      label: 'Languages',
      value: 'JavaScript, TypeScript, Java, Python, C#/.NET',
    },
    {
      label: 'Frontend',
      value:
        'React, Angular, Redux, NgRx, Micro Frontends, Virtualization, OnPush / memoized renders',
    },
    {
      label: 'Backend',
      value:
        'Node.js, NestJS, Express, Fastify, FastAPI, .NET Core, REST, GraphQL, Hasura, Keycloak',
    },
    {
      label: 'Data & Messaging',
      value: 'MySQL, PostgreSQL (RLS), Redis, RabbitMQ, NATS, BullMQ, WebSockets',
    },
    {
      label: 'Infra',
      value: 'Docker, Git, AWS, Azure, GitHub Actions, MinIO, Workers',
    },
    {
      label: 'Architecture',
      value: 'DDD, Event-Driven Architecture, Microservices, Distributed Systems, MES',
    },
    {
      label: 'AI Systems',
      value:
        'LLM orchestration, multi-provider failover, VLM pipelines, rate limiting, tenant isolation, OWASP LLM Top 10, token/cost controls',
    },
    {
      label: 'Agent Delivery',
      value: 'SDD, PRD, Skills, Worktrees, Parallel Development, AI PR Review',
    },
  ],
  skillsKeywords:
    'TypeScript, React, Angular, Node.js, NestJS, LLM Systems, Spec-Driven Development, Microservices, JavaScript, Java, Python, C#, .NET, Redux, NgRx, Micro Frontends, Express, Fastify, FastAPI, GraphQL, Hasura, Keycloak, MySQL, PostgreSQL, Redis, RabbitMQ, NATS, BullMQ, WebSockets, Docker, AWS, Azure, GitHub Actions, Domain-Driven Design, Event-Driven Architecture, Manufacturing Execution Systems, MES, VLM, OWASP LLM Top 10, Claude, Cursor, OpenCode, Software Engineer',
  experience: [
    {
      id: 'machinemetrics',
      company: 'MachineMetrics',
      title: 'Full Stack Software Engineer',
      dates: 'Apr 2024 – Present',
      printHighlights: [
        'Delivered React MES for CNC operators on a high-volume IoT + ERP platform — features that map how shops schedule, execute, and recover work mid-shift.',
        'Shipped Waiting For Work, palletized machines, FAI, labor reporting, part counting, scheduling, and ETTC across ERP-driven, labor-based, and legacy production models.',
        'Hardened 24/7 shop-floor UIs with WebSockets, web workers, Redux-style state, and microservice middleware isolating telemetry ingest from domain rules and presentation.',
        'Kept live grids usable under bursty machine events via list virtualization and memoized selective re-renders — avoiding full-tree refreshes on every update.',
        'Owned APIs, migrations, and production incidents end to end; drove SDD with agent orchestration so product intent stayed explicit under manufacturing constraints.',
        'Bridged ERP intent and machine reality so idle time, pallet queues, first-article checks, and labor stayed coherent for operators mid-shift.',
      ],
      extendedHighlights: [
        'Delivery depth: PRDs and specs drive parallel worktrees and subagent review so event flows, migrations, and failure modes land before code volume grows.',
      ],
      technologies: [
        'React',
        'Node.js',
        'TypeScript',
        'WebSockets',
        'Workers',
        'MySQL',
        'Redis',
        'NATS',
        'Hasura',
        'GraphQL',
      ],
    },
    {
      id: 'creed-mariner',
      company: 'Creed Interactive · Mariner',
      title: 'Software Engineer / Consultant',
      dates: 'Jul 2021 – Apr 2024',
      printHighlights: [
        'At Mariner, optimized always-on Angular shop-floor apps so continuous industrial telemetry did not freeze operator screens during peak load.',
        'Cut render storms with CDK-style virtual scrolling, OnPush change detection, WebSockets, workers, and NgRx — middleware kept ingest pipelines out of the UI process.',
        'At Creed, led Keycloak SSO migration and a super-app navigation layer so multiple Angular/React MFEs shared one identity boundary without breaking product switching.',
        'Delivered NestJS services and Dockerized platform pieces with inventory, logistics, and operations stakeholders who needed stable day-to-day industrial tooling.',
        'Treated shop-floor latency as a production risk — jank reads as lost floor trust; SSO and MFE tenancy had to agree for suites to feel unified.',
      ],
      extendedHighlights: [
        'Creed tenure Nov 2022 – Apr 2024; Mariner Jul 2021 – Nov 2022 — consecutive industrial/enterprise delivery.',
      ],
      technologies: [
        'Angular',
        'React',
        'NgRx',
        'WebSockets',
        'Workers',
        'NestJS',
        'Keycloak',
        'Docker',
        'Azure',
      ],
    },
    {
      id: 'b2ml',
      company: 'B2ML Sistemas',
      title: 'Full Stack Software Engineer / Technical Lead',
      dates: 'Jan 2019 – Jul 2021',
      printHighlights: [
        'Led a banking microservices platform that linked dozens of transit recharge providers while satisfying financial compliance and audit expectations.',
        'Homologated a POS from scratch and integrated banking/payment partners under COVID deadline pressure without relaxing security gates.',
        'Mentored engineers and turned customer payment workflows into shippable C#/.NET and Angular releases with clear ownership boundaries.',
        'Treated provider outages, POS homologation, and banking rules as the product itself — not side chores around the API.',
      ],
      extendedHighlights: [
        'Stack emphasis: event-driven integrations with RabbitMQ under AWS-hosted services.',
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
      title: 'Full Stack Software Engineer / Technical Lead',
      dates: 'Jan 2016 – Dec 2018',
      printHighlights: [
        'Owned the full industrial product — Angular/React operator UIs and backend services — for real-time offshore operational data from domain model through deploy.',
        'Designed 24/7 surfaces with WebSockets, workers, shared state, and microservice middleware so ingest spikes could not stall the control UI.',
        'Kept live operational grids usable with list virtualization and OnPush / memoized rendering under continuous field updates.',
        'Shipped a platform selected for offshore oil and gas; later expanded as Cognittiv and still runs — continued as consultant after the transition.',
      ],
      extendedHighlights: [
        'Prioritized trustworthy live state for offshore operators over feature count.',
        'Grew from intern to technical lead ownership of the core platform.',
      ],
      technologies: [
        'Node.js',
        'Angular',
        'React',
        'WebSockets',
        'Workers',
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
        'Built ISO-compliant hybrid mobile apps for internal utility operations during a summer internship in Regina, Saskatchewan, Canada.',
        'Delivered Cordova and JavaScript clients used by field and office staff for day-to-day utility workflows under ISO process constraints.',
        'Collaborated with Canadian utility stakeholders to ship usable tools in one summer term without sacrificing process compliance.',
      ],
      extendedHighlights: [
        'Internal utility tools succeed when workflows are process-compliant and trustworthy for field staff — polish is secondary.',
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
      screenOnly: true,
    },
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Portuguese', level: 'Native' },
  ],
  meta: {
    title: 'Guilherme Ferreira — Software Engineer · AI Systems',
    description:
      'Guilherme Ferreira — software engineer focused on AI systems, LLM platforms, and spec-driven delivery across distributed and enterprise software.',
    siteUrl: 'https://guilheeeeeeerme.github.io/resume/',
  },
}
