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
 * Optional: map company name -> logo path (e.g. "/experience/thomson-reuters.png").
 * Add company logos under public/experience/ for timeline cards.
 */
export const experienceLogos: Record<string, string> = {
  "Thomson Reuters": "/experience/thomson-reuters.png",
  "Collins Aerospace": "/experience/collins-aerospace.png",
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
    role: "Lead Site Reliability Engineer / DevOps Engineer",
    company: "Thomson Reuters",
    period: "Jan 2024 - Present",
    location: "Remote",
    description:
      "Leading infrastructure automation, reliability initiatives, and cloud platform engineering.",
    highlights: [
      "Led infrastructure automation and reliability initiatives",
      "Implemented CI/CD pipelines and monitoring solutions",
      "Optimized cloud infrastructure costs and performance",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Collins Aerospace",
    period: "Mar 2020 - Dec 2023",
    location: "Remote",
    description:
      "Managed cloud infrastructure, containerized applications, and deployment pipelines.",
    highlights: [
      "Managed cloud infrastructure and containerized applications",
      "Developed automation tools and deployment pipelines",
      "Ensured high availability and security compliance",
    ],
  },
  {
    role: "Senior Cloud / DevOps Engineer",
    company: "Previous Employer",
    period: "Jun 2018 - Feb 2020",
    location: "Remote",
    description:
      "Built and maintained cloud-native platforms and CI/CD systems.",
    highlights: [
      "Designed and implemented AWS/Azure infrastructure",
      "Introduced Terraform and Ansible for IaC",
      "Improved deployment frequency and system reliability",
    ],
  },
  {
    role: "Software Engineer / SRE",
    company: "Earlier Role",
    period: "Jan 2016 - May 2018",
    location: "On-site",
    description:
      "Software development and early SRE practices.",
    highlights: [
      "Developed and maintained backend services",
      "Participated in on-call and incident response",
      "Automated manual operational tasks",
    ],
  },
] as const;

export const awards = [
  {
    title: "Innovation Award",
    company: "Thomson Reuters",
    description: "Recognition for outstanding contributions to infrastructure innovation",
  },
] as const;
