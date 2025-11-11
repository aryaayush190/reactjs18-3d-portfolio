import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  uom,
  codingjr,
  iitmandi,
  
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI Developer",
    icon: web,
  },
  {
    title: "Natural Language Processing",
    icon: mobile,
  },
  {
    title: "Generative AI ",
    icon: backend,
  },
  {
    title: "Research Assistant",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];

const experiences: TExperience[] = [
  {
    title: "Research Assistant",
    companyName: "University of Murcia, Spain",
    icon: uom,
    iconBg: "#383E56",
    date: "April 2025 - September 2025",
    points: [
  "Conducting advanced research in Natural Language Processing and Machine Learning under faculty supervision, focusing on multilingual embedding spaces and semantic concept discovery.",
  "Developing large-scale AI pipelines processing over 1 million embeddings using Meta's SONAR framework, HDBSCAN clustering, and hierarchical modeling techniques for cross-lingual applications.",
  "Implementing and optimizing deep learning models for text analysis and generation tasks, achieving significant improvements in coherence and semantic grouping across diverse language datasets.",
  "Collaborating with research teams to publish findings and contribute to cutting-edge NLP research in transformer architectures and multilingual representation learning.",
]
  },
  {
    title: "AI Researcher",
    companyName: "Coding Jr.",
    icon: codingjr,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
  "Co-architected and developed an AI-powered coding copilot for enterprise software developers, leveraging Large Language Models and AWS infrastructure to automate bug detection and improve development efficiency.",
  "Conducted comprehensive research and strategic analysis of fintech and logistics startups, synthesizing market intelligence to enhance AI-driven decision-making frameworks for enterprise applications.",
  "Contributed to the foundational development of Planto.ai, focusing on scalability optimization, AI model performance enhancement, and seamless integration protocols for production environments.",
  "Collaborated with cross-functional teams to design and implement LLM-based solutions, ensuring robust deployment practices and maintaining high code quality standards.",
]
  },
  {
    title: "Research Intern",
    companyName: "IIT Mandi",
    icon: iitmandi,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
  "Engineered and deployed a RAG-based conversational AI system for healthcare applications at Syneos Health, processing over 10,000 patient records to deliver contextually accurate, real-time responses to clinical inquiries.",
  "Designed and implemented advanced NLP tools utilizing RAG architecture, LangChain, and Hugging Face transformers to optimize clinical trial workflows and streamline medical data retrieval processes.",
  "Developed intelligent healthcare chatbots capable of understanding complex medical queries and providing precise information by leveraging vector databases and semantic search capabilities.",
  "Applied cutting-edge natural language processing techniques including tokenization, stemming, and lemmatization to enhance medical text processing accuracy and improve clinical decision support systems.",
]
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects: TProject[] = [
  {
    name: "EcoSentinel",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Knowledge Graphs",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/aryaayush190/EcoSentinel",
  },
  {
    name: "Cold Email Generator",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Vector DBs",
        color: "green-text-gradient",
      },
      {
        name: "Llama3",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/aryaayush190/GenAI-Cold-email-generator",
  },
  {
    name: "Environmental-RASA-Agent",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "RASA",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "LLMs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/aryaayush190/Environmental-RASA-Agent",
  },
];

export { services, technologies, experiences, projects };
