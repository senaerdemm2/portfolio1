export const PROFILE = {
  name: "Sena Erdem",
  role: "Junior Data Analyst | BI Analyst",
  tagline: "SQL · Power BI · DAX · Python · Power Automate",
  email: "sena.erdem.pl@gmail.com",
  phone: "+48 792 624 121",
  phoneHref: "+48792624121",
  location: "Kraków, Poland",
  linkedin: "https://linkedin.com/in/sena-erdem-a64b91345",
  linkedinLabel: "linkedin.com/in/sena-erdem",
  github: "https://github.com/senaerdemm2",
  githubLabel: "github.com/senaerdemm2",
  site: "https://senaerdemm.vercel.app",
  cv: "/sena-erdem-cv.pdf",
  summary:
    "Data Analyst with 1 year of hands-on experience in e-commerce analytics and a B.Sc. in Computer Engineering (April 2026). Built an end-to-end Python pipeline integrating 36 data sources (230K+ orders) with automated data-quality checks, and turned the data into churn, marketing and seller-performance insights for management. Skilled in SQL, Excel, Python (Pandas, SciPy) and Power BI (DAX), with a solid foundation in hypothesis testing and data modeling. Known for catching data errors before they reach decisions and turning analysis into clear, actionable recommendations.",
  openTo:
    "Currently looking for Junior Data Analyst, BI Analyst and Reporting Analyst roles where I can grow, solve real business problems, and contribute to data-driven decisions.",
};

export const HERO_STATS = [
  { value: "3", label: "Featured projects", sub: "end-to-end" },
  { value: "4", label: "Certifications", sub: "verified credentials" },
  { value: "400K+", label: "Rows analysed", sub: "across 6 datasets" },
  { value: "36", label: "Data sources", sub: "one Python pipeline" },
];

export const STACK_GROUPS = [
  {
    title: "SQL & Databases",
    items: [
      "PostgreSQL",
      "SQL Server",
      "CTEs",
      "JOINs",
      "Window Functions",
      "Aggregations",
    ],
  },
  {
    title: "Python & Statistics",
    items: [
      "Pandas",
      "NumPy",
      "SciPy",
      "Plotly",
      "Scikit-learn",
      "Jupyter Notebook",
      "Hypothesis Testing",
      "A/B Testing",
    ],
  },
  {
    title: "BI & Reporting",
    items: [
      "Power BI (DAX)",
      "Power Query",
      "Tableau",
      "Power Automate",
      "KPI Dashboards",
      "Automated Reporting",
    ],
  },
  {
    title: "Data Quality & Tools",
    items: [
      "Excel · PivotTables",
      "XLOOKUP",
      "SUMIFS / COUNTIFS",
      "Data Validation",
      "Data Profiling",
      "Data Cleaning",
      "Star Schema",
      "ETL Design",
      "Data Dictionary",
      "Git & GitHub",
    ],
  },
];

export const ABOUT_PARAGRAPHS = [
  "I'm a Data Analyst based in Kraków, Poland, with 1 year of hands-on e-commerce analytics experience at SOFTCOUNT and a B.Sc. in Computer Engineering from Vistula University (April 2026), including an Erasmus semester at HTW Dresden. I mainly work with SQL, Power BI, Python, and Excel to deliver analysis workflows that stakeholders actually use.",
  "My focus is on the full data analysis lifecycle: extracting and validating data in SQL, building automated Python pipelines with data-quality checks, performing EDA and hypothesis testing in Pandas and SciPy, modelling KPIs in Power BI with DAX, and delivering insights through dashboards that non-technical teams can self-serve from.",
  PROFILE.openTo,
];

export const QUICK_FACTS = [
  { label: "Education", value: "B.Sc. Computer Engineering", sub: "Vistula University · Apr 2026" },
  { label: "Exchange", value: "Erasmus — HTW Dresden", sub: "Sep 2024 — Feb 2025" },
  { label: "Experience", value: "Data Analyst · SOFTCOUNT", sub: "Sep 2025 — Sep 2026 · Remote" },
  { label: "Location", value: "Kraków, Poland", sub: "Open to remote & relocation" },
  { label: "Languages", value: "Turkish (Native)", sub: "English (B2)" },
];

export const EXPERIENCE = {
  role: "Data Analyst",
  company: "SOFTCOUNT",
  location: "New York City, USA (Remote)",
  period: "Sep 2025 — Sep 2026",
  focus: "Amazon E-commerce Analytics",
  highlights: [
    {
      area: "Data Engineering & EDA",
      metric: "36 sources · 230K orders",
      text: "Built an end-to-end Python pipeline (pandas, SciPy) integrating 36 raw sources — 230K Amazon orders, 61K Keepa listings, ad data and 8.3K subscriber accounts — with automated data-quality checks; caught a field-definition error that inflated multi-unit revenue by up to 26x.",
    },
    {
      area: "Churn Root-Cause Analysis",
      metric: "85% vs 57% cancellation",
      text: "Found that sellers who never listed a product cancelled at 85% vs 57% and drove 63% of all subscription cancellations, consistent across every sign-up year; the top stated reasons (“could not sell”, “capital problem”) covered 65%, pointing to onboarding — not logistics — as the main retention lever.",
    },
    {
      area: "Marketing Analytics",
      metric: "69% CPA rise traced",
      text: "Audited four months of Meta and Google ad spend: showed both platforms cost the same per acquisition, and traced a 69% rise in CPA mainly to a 31% drop in purchases per click; recommended daily spend caps and funnel fixes before scaling budget.",
    },
    {
      area: "Top Seller Analysis",
      metric: "35x more reviews",
      text: "Analyzed 61K listings from 12 top sellers using Keepa data: best-ranked listings had 35x more reviews and 3x the FBA share (75% vs 24%), a pattern that held in 21 of 22 seller-categories.",
    },
    {
      area: "Statistical Analysis",
      metric: "10 hypotheses tested",
      text: "Tested 10 business hypotheses with Welch t-test, Mann-Whitney U, chi-square and effect sizes; showed Mexico delivered 49% of profit from 39% of orders, and proposed A/B tests to confirm causal levers.",
    },
    {
      area: "Data Modeling & Reporting",
      metric: "13 prioritized data requests",
      text: "Delivered a data dictionary, BI-ready datasets for Tableau/Power BI, a star-schema data model and ETL proposal, and 13 prioritized data requests to management.",
    },
  ],
  tech: [
    "Python",
    "Pandas",
    "SciPy",
    "SQL",
    "Power BI",
    "Tableau",
    "Keepa",
    "Statistical Testing",
  ],
};

export const PROJECTS = [
  {
    featured: true,
    title: "IT Support Ticket Analysis & Automated Weekly Reporting",
    description:
      "End-to-end reporting pipeline for 5,000 IT support tickets: PostgreSQL → Power Query → Power BI star schema → automated KPI email via Power Automate.",
    metrics: [
      { value: "5,000", label: "tickets processed" },
      { value: "82.1%", label: "SLA compliance" },
      { value: "16.9h", label: "avg resolution time" },
    ],
    detail:
      "Surfaced SLA compliance and resolution performance through DAX KPI measures (SLA Met %, Avg Resolution Hours, Open Tickets, Avg CSAT), with an automated weekly KPI summary landing every Monday 09:00 Europe/Warsaw — replacing manual reporting effort.",
    tech: ["PostgreSQL", "Power Query", "Power BI (DAX)", "Power Automate"],
    link: "https://github.com/senaerdemm2?tab=repositories",
  },
  {
    featured: true,
    title: "Olist E-Commerce Executive Dashboard",
    description:
      "2-page executive Power BI dashboard on 99K orders and BRL 15.4M revenue, answering 6 business questions on revenue concentration, delivery SLA, and category dependency.",
    metrics: [
      { value: "99K", label: "orders analysed" },
      { value: "BRL 15.4M", label: "revenue covered" },
      { value: "37%", label: "SP revenue share flagged" },
    ],
    detail:
      "Flagged single-market dependency (São Paulo = 37% of revenue, top 3 states = 63%) using DAX SWITCH and disconnected tables, driving market-expansion recommendations for decision-makers.",
    tech: ["PostgreSQL", "SQL", "Power BI", "DAX"],
    link: "https://github.com/senaerdemm2?tab=repositories",
  },
  {
    featured: false,
    title: "Remote Work Burnout Risk Segmentation for HR",
    description:
      "EDA on 3,157 survey responses across 6 regions (Remote vs Hybrid vs Onsite) using Python, Pandas, and Plotly.",
    metrics: [
      { value: "3,157", label: "survey responses" },
      { value: "6", label: "regions compared" },
      { value: "1", label: "composite risk score" },
    ],
    detail:
      "Cleaned, validated and merged multi-region CSV sources into a single analysis-ready dataset, engineered a composite burnout risk score for employee segmentation, and surfaced wellbeing trends through interactive Plotly dashboards for HR review.",
    tech: ["Python", "Pandas", "Plotly", "EDA"],
    link: "https://github.com/senaerdemm2?tab=repositories",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Data Analysis Certificate",
    issuer: "TechPro Education",
    issued: "November 2025",
    kind: "5-month / 330-hour bootcamp",
    id: "ID: 4634541267SE",
    majors: ["Data Analytics", "Data Engineering", "BI Analytics", "Data Visualization"],
    curriculum:
      "SQL, Power BI (DAX), Tableau, Python (Pandas/NumPy), EDA, Capstone, Statistics, Git.",
    verify: null as string | null,
  },
  {
    title: "HackerRank SQL (Advanced)",
    issuer: "HackerRank",
    issued: "July 2026",
    kind: "Skill certification",
    id: "ID: 1586C7F75F01",
    majors: ["Advanced Queries", "Window Functions", "Performance Tuning"],
    curriculum:
      "Advanced SQL assessment covering complex joins, subqueries, window functions, CTEs, aggregations, and query performance optimisation.",
    verify: "https://www.hackerrank.com/certificates/1586C7F75F01",
  },
  {
    title: "HackerRank SQL (Intermediate)",
    issuer: "HackerRank",
    issued: "July 2026",
    kind: "Skill certification",
    id: "ID: 4BC02786182F",
    majors: ["Joins", "Aggregations", "Subqueries"],
    curriculum:
      "Intermediate SQL assessment covering multi-table joins, GROUP BY, HAVING, subqueries, CASE expressions, and complex aggregations.",
    verify: "https://www.hackerrank.com/certificates/4BC02786182F",
  },
  {
    title: "HackerRank SQL (Basic)",
    issuer: "HackerRank",
    issued: "July 2026",
    kind: "Skill certification",
    id: "ID: 194DEE78A8D1",
    majors: ["SELECT queries", "Filtering", "Sorting"],
    curriculum:
      "Foundational SQL assessment covering SELECT, WHERE, ORDER BY, LIMIT, basic aggregations, and simple table operations.",
    verify: "https://www.hackerrank.com/certificates/194DEE78A8D1",
  },
];

export const NAV_LINKS = [
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
