export const categories = [
  {
    id: 'project-management',
    name: 'Project & Content Management',
    icon: '🔧',
    description: 'Tools to organize work, track capacity, and manage L&D projects',
  },
  {
    id: 'gamification',
    name: 'Interactive & Gamified Learning',
    icon: '🎮',
    description: 'Engage learners with interactive elements, games, and activities',
  },
  {
    id: 'ai-content',
    name: 'AI Video + Content Tools',
    icon: '✍️',
    description: 'Create video content and narrated materials quickly with AI',
  },
  {
    id: 'analytics',
    name: 'Analytics & Feedback Tools',
    icon: '📊',
    description: 'Track learning data, build dashboards, and measure impact',
  },
];

export const tools = [
  // Project & Content Management
  {
    name: 'Airtable',
    category: 'project-management',
    icon: '📋',
    whatItIs: 'A supercharged spreadsheet that feels like an app',
    whyLDUsesIt: 'Track content creation, capacity planning, SME status',
    example: 'Build an "Instructional Project Tracker" to monitor slide, quiz, and SME deadlines across 10+ trainings',
    pricing: 'Free tier, Pro ~$12/user/month',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Yes, for tracking work without sensitive data',
    },
    link: 'https://airtable.com',
  },
  {
    name: 'Notion',
    category: 'project-management',
    icon: '📝',
    whatItIs: 'An all-in-one doc/wiki/task system',
    whyLDUsesIt: 'For centralized SOPs, storyboards, playbooks',
    example: 'Create a global learning wiki for slide templates, quiz examples, reviewer notes',
    pricing: 'Free for personal use, ~$8/user/month team',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Ideal for documentation and collaborative playbooks',
    },
    link: 'https://notion.so',
  },
  {
    name: 'Scribe',
    category: 'project-management',
    icon: '📸',
    whatItIs: 'A browser extension that records your screen and auto-generates step-by-step guides with screenshots',
    whyLDUsesIt: 'Rapid process documentation for systems training, handoffs, and onboarding',
    example: 'Document how to assign an LMS course in Absorb in 30 seconds flat',
    pricing: 'Free basic, Pro starts ~$23/user/month',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Already in use. Expand use across departments.',
    },
    link: 'https://scribehow.com',
  },

  // Interactive & Gamified Learning
  {
    name: 'H5P',
    category: 'gamification',
    icon: '🎯',
    whatItIs: 'Open-source toolkit to build interactive elements (e.g. drag-and-drop, branching, fill-in-the-blank)',
    whyLDUsesIt: 'Quick interactivity inside LMS or websites',
    example: 'Add a HIPAA decision-making activity between two Articulate slides',
    pricing: 'Free (hosted or LMS plugin)',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Easy interactivity without code',
    },
    link: 'https://h5p.org',
  },
  {
    name: 'Custom HTML/JS Games',
    category: 'gamification',
    icon: '🕹️',
    whatItIs: "Games you build once and reskin many times (like ELB's Training Arcade, but DIY)",
    whyLDUsesIt: 'Control, branding, zero licensing',
    example: 'Time-limited HIPAA badge quiz with leaderboard and reskinnable topic engine',
    pricing: 'Free except internal dev time',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Already doing this; scale with badge/trophy system',
    },
  },

  // AI Video + Content Tools
  {
    name: 'Pictory',
    category: 'ai-content',
    icon: '🎬',
    whatItIs: 'Converts scripts or slides into narrated short videos',
    whyLDUsesIt: 'Cut production time for walkthroughs, intros',
    example: 'Turn 10-slide overview into a 90-second video with voiceover',
    pricing: '~$19/month',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Use with SME review process',
    },
    link: 'https://pictory.ai',
  },
  {
    name: 'Synthesia',
    category: 'ai-content',
    icon: '🎥',
    whatItIs: 'AI avatar + voice creates polished videos from scripts',
    whyLDUsesIt: 'Consistency, localization, fast iterations',
    example: 'Convert onboarding checklists into narrated orientation videos with avatar',
    pricing: 'Starts ~$30/month',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Useful for policy rollouts, compliance intros',
    },
    link: 'https://synthesia.io',
  },

  // Analytics & Feedback Tools
  {
    name: 'Google Looker Studio',
    category: 'analytics',
    icon: '📈',
    whatItIs: 'Turns LMS or spreadsheet data into dashboards',
    whyLDUsesIt: 'Real-time visual tracking of completions, scores, engagement',
    example: 'Build a compliance course dashboard filtered by region and due date',
    pricing: 'Free',
    assistRxFit: {
      status: 'yes' as const,
      note: 'Quick wins with LMS exports',
    },
    link: 'https://lookerstudio.google.com',
  },
  {
    name: 'Glide',
    category: 'analytics',
    icon: '📱',
    whatItIs: 'Turns Google Sheets into mobile apps with no code',
    whyLDUsesIt: 'Build capacity trackers, mobile leaderboards',
    example: 'Gamified progress app for training modules, with badge status',
    pricing: 'Free tier; pro starts ~$25/month',
    assistRxFit: {
      status: 'yes' as const,
      note: 'MVP internal tools + engagement layer',
    },
    link: 'https://glideapps.com',
  },
];
