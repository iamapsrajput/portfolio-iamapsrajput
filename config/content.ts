export const siteConfig = {
  name: "Ajay Rajput",
  tagline: "DevOps + AI Infra",
  description:
    "DevOps and Cloud Engineering leader with experience at Thomson Reuters and Collins Aerospace; expertise in AWS/Azure, IaC, containers, CI/CD, monitoring, and automation.",
  location: "Gdańsk, Poland",
  email: "iamapsrajput@outlook.com",
  website: "https://ajayrajput.link",
  github: "iamapsrajput",
  linkedin: "iamapsrajput",
  domain: "iamapsrajput.com",
  /** Optional: path to profile/avatar image for the header (e.g. "/profile.png"). Add file to public/profile.png */
  profileImageUrl: undefined as string | undefined,
} as const;

/** Optional: path to resume PDF (e.g. "/resume.pdf"). When set, "My Resume" section is shown. Add file to public/resume.pdf */
export const resumeUrl: string | undefined = "/resume.pdf";

/**
 * Map skill name -> image path under public/skills/.
 * Populated from your public/skills/ folder to match the template design.
 */
export const skillImages: Record<string, string> = {
  AWS: "/skills/aws.png",
  Azure: "/skills/azure.svg",
  Docker: "/skills/docker.webp",
  Kubernetes: "/skills/kubernetes.png",
  Terraform: "/skills/terraform.png",
  Ansible: "/skills/ansible.svg",
  "GitHub Actions": "/skills/githubactions.svg",
  Jenkins: "/skills/jenkins.svg",
  Git: "/skills/git.svg",
  Prometheus: "/skills/prometheus.svg",
  Grafana: "/skills/grafana.svg",
  CloudWatch: "/skills/cloudwatch.png",
  Vault: "/skills/hashicorp-vault.svg",
  Python: "/skills/python.svg",
  Bash: "/skills/bash.svg",
  PostgreSQL: "/skills/postger.png",
  MySQL: "/skills/mysql.png",
  MongoDB: "/skills/mongodb.svg",
  DynamoDB: "/skills/dynamodb.svg",
};

/**
 * Optional: map project id -> image path (e.g. "/projects/modelmuxer.png").
 * Add thumbnails under public/projects/ for project cards.
 */
export const projectImages: Record<string, string> = {
  // Example: "modelmuxer": "/projects/modelmuxer.png",
};

/**
 * Map company name -> logo path. Logos live in public/experience/.
 * All companies use the placeholder until you add real logos; then update paths below
 * (e.g. thomson-reuters.png, collins-aerospace.png, tcs.png, cyient.png, iap.png).
 */
export const experienceLogos: Record<string, string> = {
  "Thomson Reuters": "/experience/logo-placeholder.svg",
  "Collins Aerospace": "/experience/logo-placeholder.svg",
  "Tata Consultancy Services": "/experience/logo-placeholder.svg",
  "CYIENT Ltd": "/experience/logo-placeholder.svg",
  "IAP Company Pvt Ltd": "/experience/logo-placeholder.svg",
};

export const skills = {
  "Cloud/DevOps": [
    "Docker",
    "Kubernetes",
    "Ansible",
    "AWS",
    "Azure",
    "Terraform",
  ],
  "CI/CD": ["GitHub Actions", "Azure DevOps", "Jenkins", "Git"],
  "Observability/Security": [
    "Datadog",
    "Prometheus",
    "Grafana",
    "CloudWatch",
    "IAM",
    "Vault",
    "SSL/TLS",
    "RBAC",
  ],
  Languages: ["Python", "Bash", "PowerShell", "C/C++"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
} as const;

export const personalProjects = [
  {
    id: "modelmuxer",
    title: "ModelMuxer",
    subtitle: "Enterprise LLM Routing Platform",
    status: "in-development",
    description:
      "A production-ready platform for routing requests across multiple LLM providers with intelligent load balancing, cost optimization, and enterprise-grade security.",
    highlights: [
      "FastAPI + microservices architecture",
      "Multi-provider routing (OpenAI, Anthropic, etc.)",
      "Cost optimization and usage analytics",
      "JWT/RBAC/audit logging",
      "Kubernetes-native deployment",
      "Comprehensive observability",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Grafana",
    ],
    links: {
      github: "https://github.com/iamapsrajput/modelmuxer",
    },
  },
] as const;

export const services = [
  {
    id: "devops-consulting",
    title: "DevOps Consulting",
    description:
      "Strategic guidance on DevOps transformation, tool selection, and best practices tailored to your organization's needs.",
  },
  {
    id: "cloud-platform",
    title: "Cloud/Platform Engineering",
    description:
      "Design and implement scalable cloud infrastructure on AWS or Azure, including container orchestration and serverless architectures.",
  },
  {
    id: "cicd-iac",
    title: "CI/CD & IaC Implementation",
    description:
      "Automate your deployment pipelines and infrastructure provisioning with modern CI/CD tools and Infrastructure as Code.",
  },
  {
    id: "observability",
    title: "Observability & Incident Response",
    description:
      "Set up comprehensive monitoring, logging, and alerting systems to ensure system reliability and rapid incident response.",
  },
  {
    id: "app-development",
    title: "Application Development",
    description:
      "Full-stack development services for cloud-native applications, APIs, and microservices.",
  },
] as const;

export const experience = [
  {
    role: "Lead Service Reliability Engineer",
    company: "Thomson Reuters",
    period: "Feb 2024 - Present",
    location: "Gdańsk, Poland",
    description:
      "Leading infrastructure and 24/7 Global Command Center operations; driving CI/CD, incident automation, and platform reliability.",
    highlights: [
      "Led GCC Control Plane infrastructure across beta, dev, and production; reduced deployment time by 60% with GitHub Actions",
      "Built AWS Lambda–based incident management processing 1,000+ alerts daily; Datadog + DynamoDB for real-time alerting",
      "Cut manual monitoring overhead by 70% via centralized dashboards; automated Log and Refer workflows (80% faster)",
      "Onboarded 15+ applications for L1 operations; mentored 5+ engineers; lead incident response for 500+ monthly incidents",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Collins Aerospace",
    period: "Oct 2016 - Oct 2022",
    location: "Bengaluru, IN / Cedar Rapids, USA",
    description:
      "Architected AWS infrastructure, containerized workloads, and CI/CD for flight optimization and enterprise platforms.",
    highlights: [
      "Architected AWS infra with Terraform for FlightHub (50+ EC2); Docker/Kubernetes for 200+ microservices at 99.9% uptime",
      "CI/CD with GitHub Actions and automated testing, cutting deployment failures by 80%; VPC, API Gateway, SSL/TLS",
      "Prometheus, Grafana, ELK for observability; ELB and auto-scaling reduced infrastructure costs by 25% annually",
      "AWS IAM, Secrets Manager, RBAC; Azure DevOps pipelines and CloudWatch monitoring",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    period: "Nov 2015 - Sep 2016",
    location: "Bengaluru, India",
    description:
      "Code reviews, test strategy, and verification for embedded and aerospace systems.",
    highlights: [
      "Code reviews and debugging for embedded systems; 99.9% reliability; LDRA and RT tester for 40% quality improvement",
      "Delivered 5+ aerospace applications to Software Design Document standards; automated testing cut manual effort by 50%",
    ],
  },
  {
    role: "Software Engineer",
    company: "CYIENT Ltd",
    period: "Jan 2014 - Jul 2015",
    location: "Bengaluru, India",
    description:
      "Avionics and cockpit panel software; functional and integration testing.",
    highlights: [
      "Cockpit Panel Manager applications for aerospace; aviation standards compliance; 95% test coverage",
      "Hardware/software integration testing; automated test suites (30% faster cycles); 12+ engineers, mission-critical avionics",
    ],
  },
  {
    role: "Programmer",
    company: "IAP Company Pvt Ltd",
    period: "Jan 2012 - Dec 2013",
    location: "Gurugram, India",
    description:
      "Test automation and embedded systems for industrial automation.",
    highlights: [
      "Automated test procedures in C and Python (60% efficiency gain); 100% requirements traceability",
      "Embedded systems for industrial automation; delivered 4+ client solutions",
    ],
  },
] as const;

export const awards = [
  {
    title: "Innovation Award",
    company: "Thomson Reuters",
    description: "Outstanding contribution to process automation and technical innovation",
  },
  {
    title: "Star Award",
    company: "Collins Aerospace",
    description: "Excellence in project delivery and technical leadership (Mar 2021)",
  },
  {
    title: "Star Award",
    company: "Collins Aerospace",
    description: "Excellence in project delivery and technical leadership (Apr 2021)",
  },
  {
    title: "QUADRANT Award",
    company: "Collins Aerospace",
    description: "Exceptional performance and team collaboration",
  },
  {
    title: "PAT on the Back",
    company: "Collins Aerospace",
    description: "Outstanding technical contributions",
  },
] as const;

/** Education entries for the Education & Certifications section. */
export const education = [
  {
    institution: "Purdue University Online",
    degree: "Postgraduate Degree in Artificial Intelligence and Machine Learning",
    period: "2021 - 2022",
    gpa: "",
    description:
      "Advanced programme in AI and ML applications, model development, and data-driven systems.",
    keyCourses: [
      "Machine Learning",
      "Deep Learning",
      "AI Systems",
      "Data Science",
    ],
  },
  {
    institution: "Sikkim Manipal University",
    degree: "Master of Business Administration (Information Technology)",
    period: "2015 - 2017",
    gpa: "",
    description:
      "MBA with focus on IT strategy, project management, and technology leadership.",
    keyCourses: [
      "IT Strategy",
      "Project Management",
      "Business Analytics",
    ],
  },
  {
    institution: "Uttar Pradesh Technical University (UPTU)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2008 - 2011",
    gpa: "",
    description:
      "Core computer science and engineering fundamentals.",
    keyCourses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    institution: "Board of Technical Education (BTE), Lucknow",
    degree: "Diploma in Computer Science and Engineering",
    period: "2005 - 2008",
    gpa: "",
    description:
      "Diploma in computer science and engineering foundations.",
    keyCourses: [
      "Programming",
      "Computer Fundamentals",
      "Data Structures",
    ],
  },
] as const;

/** Certification entries for the Education & Certifications section. */
export const certifications = [
  { id: "SAFe 6", name: "Certified Agilist", level: null, provider: "Scaled Agile, Inc." },
  { id: "SAFe 6", name: "Certified Product Owner/Product Manager", level: null, provider: "Scaled Agile, Inc." },
  { id: "CSPO", name: "Certified Scrum Product Owner", level: null, provider: "Scrum Alliance" },
] as const;
