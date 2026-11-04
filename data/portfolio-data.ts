export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export const softSkills = [
  {
    id: "Problem Solving",
    en: "Problem Solving",
  },
  {
    id: "Komunikasi",
    en: "Communication",
  },
  {
    id: "Adaptif",
    en: "Adaptive",
  },
  {
    id: "Fast Learner",
    en: "Fast Learner",
  },
  {
    id: "Kolaboratif",
    en: "Collaborative",
  },
  {
    id: "Disiplin",
    en: "Disciplined",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: {
      id: "Brief",
      en: "Brief",
    },
    description: {
      id: "Pahami kebutuhan",
      en: "Understand the needs",
    },
  },
  {
    number: "02",
    title: {
      id: "Eksekusi",
      en: "Execution",
    },
    description: {
      id: "Kerjakan dengan presisi",
      en: "Execute with precision",
    },
  },
  {
    number: "03",
    title: {
      id: "Evaluasi",
      en: "Evaluation",
    },
    description: {
      id: "Ukur hasil & feedback",
      en: "Measure results & feedback",
    },
  },
  {
    number: "04",
    title: {
      id: "Improvement",
      en: "Optimization",
    },
    description: {
      id: "Iterasi & optimasi",
      en: "Iterate and improve",
    },
  },
];

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  tools: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "it",
    title: "IT Support",
    skills: [
      "Troubleshooting",
      "Networking",
      "Hardware & OS",
      "User Support",
      "System Admin",
    ],
    tools: ["Windows", "Linux", "Active Directory", "VPN", "Remote Desktop"],
  },
  {
    id: "design",
    title: "Designer",
    skills: [
      "Branding",
      "UI Design",
      "Social Media Design",
      "Layout & Typography",
    ],
    tools: ["Figma", "Canva", "Photoshop", "Illustrator"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    skills: [
      "Content Strategy",
      "Social Media Mgmt",
      "Ads & Campaign",
      "Analytics",
      "Copywriting",
    ],
    tools: ["Google Analytics", "Meta Ads", "Google Ads", "Hootsuite"],
  },
];

export const whyMeItems = [
  {
    icon: "Zap",

    title: {
      id: "Efisiensi Kerja",
      en: "Work Efficiency",
    },

    description: {
      id: "Satu orang yang bisa menangani aspek teknis, desain, dan digital marketing sehingga mengurangi kebutuhan koordinasi lintas tim.",
      en: "One person capable of handling technical, design, and digital marketing tasks, reducing cross-team coordination.",
    },
  },

  {
    icon: "Layers",

    title: {
      id: "Solusi End-to-End",
      en: "End-to-End Solutions",
    },

    description: {
      id: "Memahami kebutuhan dari sisi infrastruktur IT hingga strategi digital untuk menghasilkan solusi yang terintegrasi.",
      en: "Understanding both IT infrastructure and digital strategy to deliver integrated solutions.",
    },
  },

  {
    icon: "Users",

    title: {
      id: "Teknis + Kreatif + Bisnis",
      en: "Technical + Creative + Business",
    },

    description: {
      id: "Mampu menjembatani kebutuhan bisnis dengan implementasi teknis dan visual yang efektif.",
      en: "Able to bridge business requirements with effective technical and creative execution.",
    },
    
  },
];