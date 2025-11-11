type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ayush — 3D Portfolio",
    fullName: "Ayush Arya",
    email: "aryaayush190@gmail.com",
  },
  hero: {
    name: "Ayush Arya",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Ayush Arya
M.Tech Artificial Intelligence | NIT Hamirpur
AI Engineer specializing in Natural Language Processing, Conversational AI, and Large Language Models. Currently pursuing M.Tech in Artificial Intelligence at NIT Hamirpur, with expertise in building production-grade intelligent systems across healthcare, fintech, and energy sectors.
Proven experience in designing and deploying advanced AI solutions including RAG-based conversational agents, enterprise AI copilots, and self-learning dialogue systems. Strong technical foundation in transformer architectures, LangChain, with a track record of delivering scalable systems that solve real-world problems.
Research interests include hybrid AI architectures, multilingual NLP, and automated machine learning pipelines. Experienced in leading technical teams and translating complex AI concepts into practical applications that drive business value.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Recommendations",
      content: `Professor Varun Dutt, IIT Mandi
      Professor Rodrigo Agerri, University of Murcia, Spain
      Sumit Bhat, CEO Coding Jr.`,
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
