export const profile = {
  firstName: 'Susanna Mamen',
  lastName: 'Velluthottam',
  headline: 'Web3/FinTech Product + Ops · ex-Revolut, KPMG · LSE',
  location: 'Bengaluru, Karnataka, India',
  current: 'Ops Manager, Compliance & Risk @ Lido Finance',
  email: 'susanna.mamen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/susanna-mamen',
}

export const stats = [
  { n: 9, suffix: '+', t: 'Years across strategy, product and operations' },
  { n: 3, suffix: ' yrs', t: 'Operations at Lido Finance' },
  { n: 5, suffix: ' yrs', t: 'Strategy & operations consulting at KPMG India' },
  { n: 6, suffix: '', t: 'Professional certifications, incl. CAMS' },
]

export const experience = [
  {
    company: 'Lido Finance',
    tenure: '3 years',
    about: 'Liquid staking protocol for Ethereum',
    roles: [
      { title: 'Operations Manager — Compliance & Risk', when: 'April 2025 – Present', dur: '1 yr 7 mos', live: true },
      { title: 'Operations Manager — Special Projects', when: 'November 2023 – March 2025', dur: '1 yr 5 mos' },
    ],
  },
  {
    company: 'Revolut',
    tenure: '1 yr 8 mos',
    roles: [
      { title: 'Product Operations Manager (FinCrime Product)', when: 'April 2022 – November 2023', dur: '1 yr 8 mos', where: 'Bengaluru, Karnataka, India' },
    ],
  },
  {
    company: 'KPMG India',
    tenure: '5 yrs 1 mo',
    roles: [
      { title: 'Management Consultant (Strategy and Operations)', when: 'April 2019 – April 2022', dur: '3 yrs 1 mo', where: 'Chennai, Tamil Nadu, India' },
      {
        title: 'Associate Consultant (Strategy and Operations)', when: 'April 2017 – March 2019', dur: '2 yrs', where: 'Kochi, Kerala, India',
        bullets: [
          'Worked as an integral part of KPMG Management Consulting to execute process transformation, operational performance improvement, and organizational restructuring projects.',
          'Contributed to and delivered complex, multi-functional client engagements which required identifying, designing and implementing creative business and technology solutions for large companies.',
          'Provided service excellence by identifying key client business issues and determining solutions by supplementing standard assessment techniques and tools with innovative approaches.',
          'Performed project management activities including: development and management of work plans, schedules, project budgets, risks, resources, and quality.',
          'Worked with Directors and Partners to develop and present KPMG Advisory offerings to the market.',
        ],
        tagGroups: [
          ['Solutions I have worked on', ['Corporate transformation', 'Project management office', 'M&A', 'Business process improvement', 'Revenue enhancement', 'Market entry', 'Growth & turnaround strategy', 'Portfolio expansion', 'Cost optimization', 'Digital marketing', 'Operational audit', 'Financial planning']],
          ['Industries represented in my projects', ['Financial services', 'Education', 'Healthcare', 'Media & entertainment']],
        ],
      },
    ],
  },
  {
    company: 'Whyletz',
    tenure: '4 mos',
    roles: [
      {
        title: 'Junior Brand Strategist', when: 'January 2017 – April 2017', dur: '4 mos', where: 'Cochin Area, India',
        lead: 'As a junior brand strategist at an upcoming branding and marketing agency in India, I performed the following tasks:',
        bullets: [
          'Designed and implemented digital transformation, GTM and digital marketing programs — the first of its kind for some clients.',
          "Strategized brand plans, including brand values, positioning and communications, in accordance with clients' target customers.",
          'Introduced roadmaps to identify and enhance customer and channel experiences.',
          'Outlined, created and managed online and offline marketing campaigns for clients — led weekly budgetary, financial and performance reviews for these campaigns.',
          "Conducted research on clients' industries to understand existing competitors, pricing strategies and external influences on the industry.",
          "Created online content and blogs as part of clients' content marketing strategies.",
          "Attended client meetings to understand project briefs, target markets and clients' expectations.",
        ],
      },
    ],
  },
  {
    company: 'First Step Consulting',
    tenure: '4 mos · pro bono',
    roles: [
      {
        title: 'Consultant', when: 'January 2016 – April 2016', dur: '4 mos', where: 'London Area, United Kingdom',
        lead: "As a pro bono consultant in this firm, I was part of a project which involved finding suitable employees to expand the client's business in the UK music industry.",
        numbers: [['317', 'potential candidates identified'], ['101,700', 'employees in the UK music industry'], ['12.9%', 'survey response rate (41 respondents)']],
        bullets: [
          'Recommended suitable candidates to fill top management positions for a premier record label in the UK.',
          "Researched extensively on the UK's music industry and employment landscape — growth, future outlook, trends, growth drivers, competitor profiles, org structures, etc.",
          'Identified 317 potential candidates (with their contact and professional information) from a total of 101,700 employees in the UK music industry as per client’s criteria.',
          'Collaborated in a team to design online questionnaires about job expectations and current satisfaction level, and presented the findings from 41 respondents (response rate of 12.9%) to the client.',
          'Planned and conducted preliminary interviews and informational meetings.',
          'Prepared scorecards and carried out feasibility studies to assess and shortlist suitable candidates.',
        ],
      },
    ],
  },
]

export const skills = ['Product Operations', 'Third-Party Vendor Management', 'Transaction Monitoring']

// Each line is backed by a role, top skill or certification in her profile.
export const fincrime = [
  { area: 'Anti-money laundering (AML)', source: 'Certified AML Specialist (CAMS), ACAMS · 2025' },
  { area: 'Blockchain analysis', source: 'Specialist Investigator Certification, Elliptic · 2025' },
  { area: 'FinCrime product operations', source: 'Product Operations Manager (FinCrime Product), Revolut · 2022 – 2023' },
  { area: 'Compliance & risk operations', source: 'Operations Manager, Compliance & Risk, Lido Finance · 2025 – present' },
  { area: 'AML regulation & case work', source: 'EU AML Regulatory Framework · MSB, PSP & VASP AML Case Studies' },
  { area: 'Transaction monitoring', source: 'Top skill' },
  { area: 'Third-party vendor management', source: 'Top skill' },
  { area: 'Operational audit', source: 'KPMG India consulting engagements' },
]

// LinkedIn's five-step proficiency scale: 1 Elementary … 4 Full Professional, 5 Native or Bilingual.
export const languages = [
  ['English', 'Full Professional', 4],
  ['Malayalam', 'Native or Bilingual', 5],
  ['Hindi', 'Elementary', 1],
  ['French', 'Elementary', 1],
]

// From her LinkedIn "Licenses & certifications", most recent first.
export const certifications = [
  {
    title: 'Certified Anti-Money Laundering Specialist (CAMS)', issuer: 'ACAMS', date: 'Nov 2025', id: 'ER-005208103',
    includes: ['MSBs, PSPs, and VASPs AML Case Studies', 'EU AML Regulatory Framework'],
  },
  { title: 'Specialist Investigator Certification', issuer: 'Elliptic', date: 'Nov 2025', id: '6915ff3606ac55d84a0f51a0', skills: 'Blockchain Analysis' },
  { title: 'Business Analytics', issuer: 'upGrad', date: 'Feb 2022', skills: 'Data Visualization' },
  {
    title: 'Product Management Certification Program', issuer: 'Duke Corporate Education', date: 'Apr 2021',
    url: 'https://www.credential.net/5e71bb6e-569e-4110-874d-4cc58c6b5ff3', skills: 'User Experience, Customer Experience Design',
  },
  { title: 'Finance Training for Financial Analysts', issuer: 'Udemy', date: 'Feb 2021', id: 'UC-a0ad8d3f-5544-43ac-9afb-d42ff56e6f78' },
  { title: 'Finance and Accounting for Management Consultants and Analysts', issuer: 'Udemy', date: 'Feb 2021', id: 'UC-7deddad4-7a01-438d-a363-d476a89d3cd5' },
]

// The profile lists the KPMG Encore "Kudos" award twice.
export const awards = [
  ['Certificate for Top Scorer in Principles of Marketing', ''],
  ['KPMG Encore Awards — “Kudos”', 'KPMG India · ×2'],
]

export const education = [
  { yr: '2015 — 2016', school: 'The London School of Economics and Political Science (LSE)', degree: 'Master of Science (MSc), Management and Strategy', crest: 'LSE' },
  { yr: '2011 — 2014', school: 'University of London', degree: 'Bachelor of Science — BS, Business', crest: 'UoL' },
]
