import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

// Portfolio knowledge base - comprehensive details about Hemanth
const portfolioKnowledge = {
  personal: {
    name: "Pangoth Hemanth Nayak",
    role: "Pre-final year B.Tech student in CSE (Data Science)",
    location: "India",
    email: "official.hemanthnayakpangoth@gmail.com",
    about: "I'm a pre-final year B.Tech student in CSE (Data Science) at HITAM, currently serving as the Student HOD of my department. I'm passionate about leveraging technology to solve real-world problems and representing student voices with purpose, empathy, and impact.",
    writing: "@hem_writess - I write poetry that transforms raw emotions and lived experiences into words that resonate on a deeply personal level."
  },
  contact: {
    email: "official.hemanthnayakpangoth@gmail.com",
    linkedin: "https://www.linkedin.com/in/hemanth-nayak-pangoth/",
    linkedin_handle: "@hemanth-nayak-pangoth",
    github: "https://github.com/your-github-username",
    phone: "+91-XXXXXXXXXX",
    location: "Hyderabad, Telangana, India",
    availability: "Open to new opportunities, collaborations, and networking"
  },
  education: {
    current: {
      school: "Hyderabad Institute of Technology And Management (HITAM)",
      degree: "B Tech in Computer Science Engineering - Data Science",
      period: "2023 – 2027",
      gpa: "8.5/10"
    },
    intermediate: {
      school: "MJPTBCWREIS (BOYS) Junior College, Goshamahal",
      degree: "Intermediate - MPC",
      period: "2021 – 2023",
      gpa: "91.1%"
    },
    ssc: {
      school: "Zilla Parishad High School, Pragathi Nagar",
      degree: "SSC",
      period: "2021",
      gpa: "100%"
    }
  },
  skills: {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 65 },
      { name: "TypeScript", level: 50 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 80 }
    ],
    backend: [
      { name: "Java", level: 75 },
      { name: "MySQL", level: 65 },
      { name: "Spring Boot", level: 65 },
      { name: "Django", level: 75 },
      { name: "MongoDB", level: 50 }
    ],
    ai_ml: [
      { name: "Python", level: 80 },
      { name: "Data Analysis", level: 90 },
      { name: "Statistics", level: 70 },
      { name: "Tableau", level: 60 },
      { name: "Power BI", level: 70 }
    ],
    leadership: [
      { name: "Communication", level: 80 },
      { name: "Strategic Planning", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Student Leadership", level: 95 },
      { name: "Project Management", level: 90 },
      { name: "Public Speaking", level: 80 },
      { name: "Time Management", level: 85 },
      { name: "Team Management", level: 90 }
    ],
    core: [
      { name: "Data Structures & Algorithms (DSA)", level: 65 },
      { name: "Computer Networks", level: 50 },
      { name: "Database Management System", level: 45 },
      { name: "Operating System", level: 50 }
    ]
  },
  experience: [
    {
      company: "Infotact Solutions",
      role: "Associate L1 - Data Analyst Intern",
      period: "July 2025 – Present",
      points: [
        "Worked on real-time dataset containing 2000–3000 records, performing data cleaning, transformation, and processing",
        "Created pivot tables, KPIs, and interactive dashboards in Excel for actionable insights",
        "Developed Power BI dashboards integrating processed Excel data for enhanced visualization",
        "Applied data storytelling techniques to present dashboards and guide decision-making"
      ]
    },
    {
      company: "Excelerate",
      role: "Data Analyst Trainee Intern",
      period: "July 2025 – August 2025",
      points: [
        "Trained in core data analytics concepts including data cleaning, visualization, and reporting",
        "Analyzed GlobalShala's 'Superhero U' Facebook ad campaigns performance metrics",
        "Provided actionable insights for marketing team optimization and budget allocation",
        "Identified India and Nepal as top regions with highest engagement"
      ]
    },
    {
      company: "Elevvo Pathways",
      role: "Natural Language Processing Intern",
      period: "July 2025 – August 2025",
      points: [
        "Worked with NLP models to process and analyze diverse text datasets",
        "Implemented preprocessing techniques: tokenization, stemming, lemmatization, stop-word removal",
        "Completed projects: Sentiment Analysis, News Classification, Fake News Detection (>95% F1), NER",
        "Used SpaCy, Scikit-learn, BiLSTM, and TF-IDF pipelines"
      ]
    },
    {
      company: "Edunet Foundation",
      role: "Intern – Shell x Edunet x AICTE (Skills4Future Program)",
      period: "July 2025 – August 2025",
      points: [
        "Developed ML model to forecast EV adoption for next 1–5 years using Washington State data",
        "Performed data cleaning, transformation, and time series feature engineering",
        "Built and evaluated Random Forest regression models for county-level EV growth prediction",
        "Designed interactive Streamlit dashboard with trend visualizations and CSV export"
      ]
    },
    {
      company: "ApexPlanet Software Pvt Ltd",
      role: "Web Development Intern",
      period: "July 2025 – August 2025",
      points: [
        "Completed 45-day internship covering end-to-end HTML, CSS, and JavaScript development",
        "Built responsive contact forms, dynamic to-do lists, and interactive quiz/image carousel",
        "Created product listing page with filtering and sorting functionality",
        "Developed fully responsive personal portfolio web application with optimization"
      ]
    },
    {
      company: "VaultofCodes",
      role: "AI & Prompt Engineering Intern",
      period: "June 2025 – July 2025",
      points: [
        "Studied behavior and working principles of large language models (LLMs)",
        "Learned techniques for crafting clear, concise, and context-rich prompts",
        "Experimented with different prompt structures and constraints for optimization",
        "Applied prompt engineering best practices to build AI-powered chatbots and Q&A systems"
      ]
    },
    {
      company: "CodeAlpha",
      role: "Data Analytics Intern",
      period: "July 2025 – August 2025",
      points: [
        "Completed data analytics projects involving web scraping, EDA, and data visualization",
        "Used Python, BeautifulSoup, and Pandas for data collection, cleaning, and preparation",
        "Performed EDA to identify trends, patterns, and anomalies with statistical validation",
        "Created impactful visualizations using Matplotlib and Seaborn for decision-making"
      ]
    },
    {
      company: "HITAM",
      role: "Student HOD – Student Self Governance (SSG)",
      period: "May 2025 – Present",
      points: [
        "Lead SSG initiatives for Computer Science Department, coordinating between students, faculty, and administration",
        "Plan, organize, and oversee departmental events, workshops, orientation programs",
        "Represent student body in faculty meetings, voicing concerns and innovative ideas",
        "Design feedback mechanisms and coordinate cross-departmental collaborations"
      ]
    },
    {
      company: "HITAM",
      role: "Student Coordinator – Student Self Governance (SSG)",
      period: "August 2024 – May 2025",
      points: [
        "Planned and executed monthly 'SSG Days' with structured agenda for student needs",
        "Organized events, workshops, and meetings to maximize participation and impact",
        "Supported students in academic matters through study groups and mentorship",
        "Collected student feedback and translated it into actionable improvements"
      ]
    }
  ],
  projects: [
    {
      title: "LevelUp Learning – Enhancing Engagement with Gamification",
      desc: "Gamified e-learning platform (PBL project) integrating XP, badges, leaderboards, and interactive modules. Secure login, personalized dashboards, and Supabase real-time tracking. Earned full marks and moving towards deployment.",
      tech: ["React", "TypeScript", "Tailwind", "Spring Boot", "Supabase"]
    },
    {
      title: "Website of Indian Heritage and Culture",
      desc: "Smart India Hackathon project showcasing India's cultural diversity through interactive sections, heritage exploration, and smooth UX. Built in 24 hours hackathon at HITAM.",
      tech: ["HTML5", "CSS", "JavaScript"]
    },
    {
      title: "Personal Portfolio Website",
      desc: "Responsive and engaging personal portfolio site to showcase skills, projects, and experiences. Designed to reflect personality and professional journey.",
      tech: ["HTML5", "CSS", "JavaScript"]
    },
    {
      title: "Hospital Management System",
      desc: "DBMS project that streamlines doctor-patient appointment scheduling with dedicated modules for patients and doctors. Improves hospital efficiency and user experience.",
      tech: ["Java", "DBMS", "JavaScript"]
    },
    {
      title: "E-Commerce Website using Django",
      desc: "Full-stack e-commerce platform with authentication, product catalog, shopping cart, order management, and admin dashboard. Built with Django MVC framework and SQL database.",
      tech: ["Django", "Python", "MySQL", "JavaScript"]
    },
    {
      title: "EV Demand Prediction Dashboard",
      desc: "AI-powered tool forecasting EV growth and charging demand using Random Forest Regression. Interactive dashboard with CSV export, trend analysis, and Streamlit deployment.",
      tech: ["Python", "Streamlit", "TensorFlow", "Pandas"],
      live: "https://lnkd.in/ga_M32rv",
      code: "https://lnkd.in/gP7rAuMS"
    },
    {
      title: "NLP Internship Projects – Elevvo Pathways",
      desc: "End-to-end NLP tasks including Sentiment Analysis, News Categorization, Fake News Detection (>95% F1), and Named Entity Recognition (NER). Built with SpaCy, Scikit-learn, BiLSTM, and TF-IDF pipelines.",
      tech: ["Python", "SpaCy", "Scikit-learn", "Keras"],
      live: "https://lnkd.in/gG4KxsiJ",
      code: "https://lnkd.in/gGEVSung"
    }
  ],
  courses: [
    {
      title: "Introduction to Technology Apprenticeship Job Simulation",
      org: "Accenture UK - Forage",
      date: "Jun 2025"
    },
    {
      title: "Data Analytics Job Simulation",
      org: "Deloitte Australia - Forage",
      date: "Jun 2025"
    },
    {
      title: "Technology Job Simulation",
      org: "Deloitte Australia - Forage",
      date: "Jun 2025"
    },
    {
      title: "CSS Fundamentals",
      org: "LinkedIn Learning",
      date: "Feb 2025"
    },
    {
      title: "HTML Essential Training",
      org: "LinkedIn Learning",
      date: "Feb 2025"
    },
    {
      title: "Introduction to Generative AI",
      org: "Google Cloud Skills Boost",
      date: "Oct 2024"
    },
    {
      title: "AI Creators Internship",
      org: "Swecha Telangana",
      date: "Aug 2024"
    },
    {
      title: "Programming in C# Certification",
      org: "Infosys Springboard",
      date: "Jan 2024"
    },
    {
      title: "PCAP: Programming Essentials in Python",
      org: "Cisco",
      date: "Jan 2024"
    }
  ],
  achievements: [
    "Student HOD of Computer Science Department at HITAM (May 2025 - Present)",
    "Student Coordinator of SSG at HITAM (August 2024 - May 2025)",
    "LinkedIn Creator with @hem_writess for poetry and emotional writing",
    "Multiple internship experiences in Data Analytics, AI/ML, and Web Development",
    "Completed various certifications from Accenture, Deloitte, Google, and LinkedIn"
  ]
};

// AI responses based on comprehensive portfolio knowledge
const generateResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
  const message = userMessage.toLowerCase();
  
  // Personal information
  if (message.includes("who are you") || message.includes("tell me about yourself") || message.includes("introduce yourself")) {
    const responses = [
      {
        text: `Hey there! I'm ${portfolioKnowledge.personal.name}, a pre-final year B.Tech student in CSE (Data Science) at HITAM. I'm currently serving as the Student HOD of my department, passionate about leveraging technology to solve real-world problems. I've gained hands-on experience through internships in Web Development, AI Prompt Engineering, and Data Analytics. I also write poetry as @hem_writess, transforming raw emotions into words that resonate personally. What brings you to my portfolio?`,
        suggestions: ["Tell me about your skills", "What projects have you built?", "How can I contact you?"]
      },
      {
        text: `Oh hey! I'm ${portfolioKnowledge.personal.name}! 👋 I'm really into web development, data science, and AI/ML. Currently studying CS at HITAM with an 8.5 GPA, and I'm the Student HOD there. I love working with modern tech stacks and building things that people actually use. I've done internships at companies like Infotact, Excelerate, and Elevvo Pathways. Are you into development too?`,
        suggestions: ["What technologies do you use?", "Show me your projects", "What's your experience?"]
      },
      {
        text: `I'm ${portfolioKnowledge.personal.name}! I'm a developer who gets excited about creating web applications and solving data problems. I'm at HITAM right now studying Computer Science with Data Science specialization, maintaining an 8.5 GPA. I'm always working on some project or another, and I love writing poetry as @hem_writess. What's your story?`,
        suggestions: ["Tell me about your work", "What are you studying?", "Let's talk about tech"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Skills and technologies
  if (message.includes("skills") || message.includes("technologies") || message.includes("what can you do") || message.includes("tech stack") || message.includes("programming languages")) {
    const responses = [
      {
        text: `I'm pretty comfortable with a wide range of technologies! Frontend-wise, I'm strong in HTML (95%), CSS (90%), JavaScript (75%), and Tailwind CSS (80%). For backend, I work with Java (75%), Django (75%), Spring Boot (65%), and databases like MySQL (65%) and MongoDB (50%). In AI/ML, I'm solid with Python (80%), Data Analysis (90%), and tools like Tableau (60%) and Power BI (70%). I'm also strong in leadership skills like Strategic Planning (85%), Problem Solving (90%), and Student Leadership (95%). What technologies are you working with?`,
        suggestions: ["Tell me about your projects", "What's your experience?", "How can I reach you?"]
      },
      {
        text: `Oh man, I love exploring new tech! I'm solid with HTML, CSS, JavaScript, and Tailwind for frontend. Backend-wise, I work with Java, Django, Spring Boot, and various databases. I'm really into Python for AI/ML, data analysis, and I've been working with tools like Tableau and Power BI. I'm also proud of my leadership skills - I'm the Student HOD at HITAM! What's your tech stack like?`,
        suggestions: ["Show me your work", "What are you studying?", "Let's connect"]
      },
      {
        text: `I work with HTML, CSS, JavaScript, Java, Python, Django, Spring Boot... the usual suspects! 😄 But honestly, I'm always trying to learn something new. My strongest areas are Data Analysis (90%), Problem Solving (90%), and Student Leadership (95%). I'm currently focusing on improving my DSA skills with Java. What's the most interesting technology you've worked with recently?`,
        suggestions: ["Tell me about your experience", "What projects do you have?", "How do I contact you?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Experience and work
  if (message.includes("experience") || message.includes("work") || message.includes("jobs") || message.includes("internships") || message.includes("employment")) {
    const responses = [
      {
        text: `I've got quite a bit of experience! Right now I'm interning at Infotact Solutions as a Data Analyst, working on real-time datasets and creating Power BI dashboards. I've also interned at Excelerate doing data analysis for Facebook ad campaigns, Elevvo Pathways working on NLP projects, Edunet Foundation building ML models for EV prediction, ApexPlanet doing web development, VaultofCodes for AI prompt engineering, and CodeAlpha for data analytics. Plus, I'm the Student HOD at HITAM! Have you worked at any startups?`,
        suggestions: ["Tell me about your projects", "What are you studying?", "How can I reach you?"]
      },
      {
        text: `I'm currently interning at Infotact Solutions as a Data Analyst - it's been awesome working on real datasets with 2000-3000 records! I've also done internships at Excelerate, Elevvo Pathways, Edunet Foundation, ApexPlanet, VaultofCodes, and CodeAlpha. The startup environment is really exciting, you know? I'm also the Student HOD at HITAM, leading student initiatives. What's your work experience been like?`,
        suggestions: ["Show me your work", "What skills do you have?", "Let's connect"]
      },
      {
        text: `I'm interning at Infotact Solutions right now, doing data analysis and creating Power BI dashboards. I've also interned at Excelerate, Elevvo Pathways, Edunet Foundation, ApexPlanet, VaultofCodes, and CodeAlpha. It's my first real industry experience and I'm loving it! I'm also the Student HOD at HITAM. What kind of work are you looking for?`,
        suggestions: ["Tell me about your skills", "What projects do you have?", "How do I contact you?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Projects and work
  if (message.includes("projects") || message.includes("portfolio") || message.includes("what have you built") || message.includes("applications") || message.includes("websites")) {
    const responses = [
      {
        text: `I've built several projects I'm really proud of! My main project is "LevelUp Learning" - a gamified e-learning platform with XP, badges, and leaderboards built with React, TypeScript, and Spring Boot. I also built an Indian Heritage website for Smart India Hackathon in 24 hours, a Hospital Management System with Java and DBMS, an E-commerce platform using Django, an AI-powered EV prediction dashboard, and NLP projects including sentiment analysis and fake news detection. What kind of projects are you interested in?`,
        suggestions: ["Tell me about your skills", "What's your experience?", "How can I reach you?"]
      },
      {
        text: `Oh cool! I've got this portfolio site (obviously 😄), plus a gamified learning platform called LevelUp Learning that earned full marks. I built an Indian Heritage website in a 24-hour hackathon, a Hospital Management System, an E-commerce platform with Django, an AI-powered EV prediction dashboard, and NLP projects with >95% F1 score. It was challenging but really fun to work on! What's the most interesting project you've built?`,
        suggestions: ["What technologies do you use?", "Tell me about your work", "Let's connect"]
      },
      {
        text: `I've got this portfolio, LevelUp Learning (a gamified e-learning platform), Indian Heritage website, Hospital Management System, E-commerce platform, EV prediction dashboard, and NLP projects. I love building things from scratch - there's something really satisfying about it! My projects use React, TypeScript, Java, Python, Django, and various ML libraries. What kind of development do you enjoy most?`,
        suggestions: ["Show me your skills", "What are you studying?", "How do I contact you?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Education and academic background
  if (message.includes("education") || message.includes("degree") || message.includes("university") || message.includes("college") || message.includes("academic") || message.includes("gpa")) {
    const responses = [
      {
        text: `I'm at HITAM studying Computer Science Engineering with Data Science specialization. It's been a great journey so far - I'm maintaining an 8.5 GPA and I'm really involved in campus activities. I'm the Student HOD of the Computer Science Department, leading SSG initiatives. Before HITAM, I did my Intermediate at MJPTBCWREIS with 91.1% and SSC at Zilla Parishad High School with 100%. Are you in college too?`,
        suggestions: ["Tell me about your work", "What skills do you have?", "How can I reach you?"]
      },
      {
        text: `I'm doing my B.Tech in CS with Data Science at HITAM. GPA is 8.5, and I'm super involved in campus life - I'm the Student HOD of the Computer Science Department, leading student governance initiatives. I also did my Intermediate at MJPTBCWREIS (91.1%) and SSC at ZPHS (100%). It keeps me busy but I love it! What are you studying?`,
        suggestions: ["Show me your projects", "What technologies do you use?", "Let's connect"]
      },
      {
        text: `I'm at HITAM for Computer Science Engineering with Data Science specialization. I'm doing pretty well academically with an 8.5 GPA, and I'm really active in student organizations - I'm the Student HOD of the CS Department. I also completed my Intermediate (91.1%) and SSC (100%) with good scores. What's your academic background?`,
        suggestions: ["Tell me about your experience", "What projects do you have?", "How do I contact you?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Contact and networking
  if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("linkedin") || message.includes("connect") || message.includes("get in touch")) {
    const responses = [
      {
        text: `You can connect with me in several ways! My email is ${portfolioKnowledge.contact.email}. I'm also very active on LinkedIn at ${portfolioKnowledge.contact.linkedin} - I'd love to connect with you there! I'm always down to chat about tech, projects, or just life in general. Feel free to reach out - I love connecting with fellow developers and discussing opportunities.`,
        suggestions: ["Tell me about yourself", "Show me your projects", "What skills do you have?"]
      },
      {
        text: `I'd love to connect! You can email me at ${portfolioKnowledge.contact.email} or connect with me on LinkedIn at ${portfolioKnowledge.contact.linkedin}. I'm pretty responsive and I love talking about development, projects, or just tech in general. I'm always open to discussing new opportunities, collaborations, or just networking. What's the best way to reach you?`,
        suggestions: ["Tell me about your work", "What are you studying?", "Let's talk tech"]
      },
      {
        text: `Drop me a line at ${portfolioKnowledge.contact.email} or connect with me on LinkedIn at ${portfolioKnowledge.contact.linkedin}! I'm always excited to hear from other developers and discuss potential opportunities. I'm particularly interested in data science, web development, and AI/ML roles. Let's connect and chat about what you're working on!`,
        suggestions: ["Tell me about your skills", "Show me your work", "What's your background?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // LinkedIn specific
  if (message.includes("linkedin") || message.includes("connect on linkedin") || message.includes("linkedin profile")) {
    return {
      text: `Absolutely! I'd love to connect with you on LinkedIn! You can find me at ${portfolioKnowledge.contact.linkedin}. I'm very active there sharing updates about my projects, internships, and learning journey. I also post poetry and thoughts as @hem_writess. Feel free to send me a connection request - I'm always excited to network with fellow developers and professionals!`,
      suggestions: ["Tell me about your work", "What projects are you working on?", "How can I reach you?"]
    };
  }
  
  // Achievements and recognition
  if (message.includes("achievements") || message.includes("awards") || message.includes("recognition") || message.includes("accomplishments") || message.includes("proud of")) {
    const responses = [
      {
        text: `I've been lucky to have some cool opportunities! I'm the Student HOD of the Computer Science Department at HITAM, leading student governance initiatives. I've completed multiple internships at companies like Infotact, Excelerate, Elevvo Pathways, Edunet Foundation, ApexPlanet, VaultofCodes, and CodeAlpha. I've also got certifications from Accenture, Deloitte, Google, LinkedIn, and Cisco. Plus, I write poetry as @hem_writess! What achievements are you most proud of?`,
        suggestions: ["Tell me about your work", "What skills do you have?", "How can I reach you?"]
      },
      {
        text: `I'm the Student HOD of the CS Department at HITAM, leading SSG initiatives. I've done internships at Infotact, Excelerate, Elevvo Pathways, Edunet Foundation, ApexPlanet, VaultofCodes, and CodeAlpha. I've got certifications from Accenture, Deloitte, Google, LinkedIn, and Cisco. Plus, I'm a LinkedIn Creator with @hem_writess! It's been an amazing journey. What's your biggest achievement so far?`,
        suggestions: ["Show me your projects", "What technologies do you use?", "Let's connect"]
      },
      {
        text: `I've got a few things I'm proud of - Student HOD at HITAM, multiple internships in data science and web development, certifications from top companies like Accenture and Deloitte, and I'm a LinkedIn Creator with @hem_writess for poetry. I've worked on projects ranging from web development to AI/ML and data analytics. What motivates you to achieve your goals?`,
        suggestions: ["Tell me about your experience", "What projects do you have?", "How do I contact you?"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Specific project details
  if (message.includes("levelup") || message.includes("learning platform") || message.includes("gamified")) {
    return {
      text: `LevelUp Learning is my main project - it's a gamified e-learning platform that integrates XP points, badges, leaderboards, and interactive modules. It has secure login, personalized dashboards, and uses Supabase for real-time tracking. I built it with React, TypeScript, Tailwind CSS, Spring Boot, and Supabase. It earned full marks in my PBL project and I'm working towards deployment. It's designed to make learning more engaging through gamification elements!`,
      suggestions: ["Tell me about other projects", "What technologies did you use?", "How can I see it?"]
    };
  }
  
  if (message.includes("nlp") || message.includes("natural language processing") || message.includes("sentiment analysis") || message.includes("fake news")) {
    return {
      text: `I worked on comprehensive NLP projects during my internship at Elevvo Pathways! I implemented sentiment analysis on IMDb reviews, news category classification, fake news detection (achieving >95% F1 score), and named entity recognition from news articles. I used preprocessing techniques like tokenization, stemming, lemmatization, and stop-word removal. The projects were built with SpaCy, Scikit-learn, BiLSTM, and TF-IDF pipelines. All my work is documented in a public GitHub repository!`,
      suggestions: ["Tell me about your other internships", "What ML libraries did you use?", "Show me your projects"]
    };
  }
  
  if (message.includes("ev") || message.includes("electric vehicle") || message.includes("prediction") || message.includes("dashboard")) {
    return {
      text: `I built an AI-powered EV Demand Prediction Dashboard during my internship at Edunet Foundation! It forecasts EV growth and charging demand for the next 1-5 years using Washington State registration data. I performed data cleaning, transformation, and time series feature engineering (lags, trends, rolling averages). I built and evaluated Random Forest regression models for county-level EV growth prediction. The dashboard is interactive with trend visualizations, multi-county comparisons, and CSV export functionality. It's deployed on Streamlit!`,
      suggestions: ["What ML algorithms did you use?", "Tell me about other projects", "How can I see it?"]
    };
  }
  
  // Greetings and casual chat
  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good morning") || message.includes("good afternoon")) {
    const responses = [
      {
        text: "Hey there! 👋 How's it going? Thanks for checking out my portfolio! I'm Hemanth, a B.Tech student in Data Science at HITAM, currently interning at Infotact Solutions and serving as Student HOD. What brings you here today?",
        suggestions: ["Tell me about yourself", "What skills do you have?", "Show me your projects"]
      },
      {
        text: "Hi! Great to meet you! I'm Hemanth, passionate about data science, web development, and AI/ML. I'm currently interning at Infotact Solutions and leading student initiatives at HITAM. What would you like to know about me?",
        suggestions: ["Tell me about your work", "What are you studying?", "How can I reach you?"]
      },
      {
        text: "Hey! 👋 I'm glad you stopped by. I'm Hemanth, a Computer Science student at HITAM with interests in data science and web development. I've done multiple internships and I'm the Student HOD there. What would you like to know about me?",
        suggestions: ["Tell me about your skills", "What projects do you have?", "Let's connect"]
      }
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Networking and professional connections
  if (message.includes("network") || message.includes("professional") || message.includes("connect professionally") || message.includes("stay in touch")) {
    return {
      text: `I'd love to network and stay connected professionally! The best way is to connect with me on LinkedIn at ${portfolioKnowledge.contact.linkedin} where I'm very active sharing updates about my projects, internships, and learning journey. You can also email me at ${portfolioKnowledge.contact.email} for more direct communication. I'm always excited to meet fellow developers, discuss opportunities, and build meaningful professional relationships!`,
      suggestions: ["Let's connect on LinkedIn", "Tell me about your work", "What opportunities are you looking for?"]
    };
  }
  
  // Collaboration opportunities
  if (message.includes("collaborate") || message.includes("work together") || message.includes("partnership") || message.includes("team up")) {
    return {
      text: `I'm always open to collaboration opportunities! I love working with other developers on interesting projects, especially in data science, web development, and AI/ML. You can reach me at ${portfolioKnowledge.contact.email} to discuss potential collaborations, or connect with me on LinkedIn at ${portfolioKnowledge.contact.linkedin} to see my current work and projects. What kind of collaboration are you thinking about?`,
      suggestions: ["Tell me about your project idea", "What skills are you looking for?", "Let's connect on LinkedIn"]
    };
  }
  
  // Social media and online presence
  if (message.includes("social media") || message.includes("online presence") || message.includes("where can i find you") || message.includes("instagram") || message.includes("twitter")) {
    return {
      text: `I'm most active on LinkedIn at ${portfolioKnowledge.contact.linkedin} where I share professional updates, project insights, and connect with the tech community. I also write poetry and share personal thoughts as @hem_writess. You can also reach me directly at ${portfolioKnowledge.contact.email}. I'm always open to new connections and opportunities!`,
      suggestions: ["Tell me about your projects", "What skills do you have?", "Let's connect on LinkedIn"]
    };
  }
  
  // Questions about the user
  if (message.includes("you") && (message.includes("ask") || message.includes("question"))) {
    return {
      text: "Oh, I'd love to know more about you! What kind of development work are you interested in? Are you looking to hire, collaborate, or just network? I'm always excited to learn about other developers' experiences and projects! Feel free to connect with me on LinkedIn or email me - I'd love to stay in touch!",
      suggestions: ["I'm looking to hire", "I want to collaborate", "Just networking", "Let's connect on LinkedIn"]
    };
  }
  
  // Data science and AI/ML specific
  if (message.includes("data science") || message.includes("machine learning") || message.includes("ai") || message.includes("artificial intelligence")) {
    return {
      text: `I'm really passionate about data science and AI/ML! I'm studying Data Science as part of my B.Tech program at HITAM. I've worked on various ML projects including EV demand prediction using Random Forest, NLP tasks like sentiment analysis and fake news detection, and data analytics projects. I'm proficient in Python, Pandas, Scikit-learn, and tools like Tableau and Power BI. I'm currently interning at Infotact Solutions doing data analysis work. What interests you most about data science?`,
      suggestions: ["Tell me about your ML projects", "What tools do you use?", "Let's connect on LinkedIn"]
    };
  }
  
  // Web development specific
  if (message.includes("web development") || message.includes("frontend") || message.includes("backend") || message.includes("full stack")) {
    return {
      text: `I love web development! I've built several projects including this portfolio, a gamified e-learning platform (LevelUp Learning), an Indian Heritage website, and an E-commerce platform. I work with HTML, CSS, JavaScript, React, TypeScript, Java, Spring Boot, Django, and Python. I'm currently focusing on improving my full-stack skills and have experience with both frontend and backend development. What kind of web development are you into?`,
      suggestions: ["Show me your projects", "What technologies do you use?", "Let's collaborate"]
    };
  }
  
  // Internship and learning specific
  if (message.includes("internship") || message.includes("learning") || message.includes("training") || message.includes("certification")) {
    return {
      text: `I've had amazing learning experiences through multiple internships! I've interned at Infotact Solutions (Data Analysis), Excelerate (Data Analytics), Elevvo Pathways (NLP), Edunet Foundation (ML), ApexPlanet (Web Development), VaultofCodes (AI Prompt Engineering), and CodeAlpha (Data Analytics). I've also completed certifications from Accenture, Deloitte, Google, LinkedIn, Cisco, and Infosys. Each internship has taught me different skills and given me real-world project experience. What kind of learning opportunities are you looking for?`,
      suggestions: ["Tell me about your internships", "What skills did you learn?", "Let's connect"]
    };
  }
  
  // If no specific pattern matches, provide a contextual response based on keywords
  if (message.includes("python") || message.includes("java") || message.includes("react") || message.includes("django")) {
    return {
      text: `I work with those technologies! Python is my go-to for data science and ML projects, Java for backend development and DSA, React for modern frontend applications, and Django for full-stack web development. I'm always learning new frameworks and libraries. What specific aspect of these technologies interests you?`,
      suggestions: ["Tell me about your projects", "What's your experience level?", "Let's discuss tech"]
    };
  }
  
  if (message.includes("future") || message.includes("goals") || message.includes("plans") || message.includes("aspirations")) {
    return {
      text: `I'm really excited about my future! I'm currently focused on completing my B.Tech in Data Science and gaining more industry experience. I want to work on challenging projects in data science, AI/ML, and web development. I'm also passionate about leadership and want to continue growing in that area. Long-term, I'd love to work on innovative solutions that make a real impact. What are your future goals?`,
      suggestions: ["Tell me about your aspirations", "What motivates you?", "Let's connect professionally"]
    };
  }
  
  // For any other questions, provide a helpful response that encourages further conversation
  return {
    text: `That's an interesting question! I'm Hemanth, a B.Tech student in Data Science at HITAM, currently interning at Infotact Solutions and serving as Student HOD. I'm passionate about technology, data science, and building meaningful solutions. I'd love to hear more about what you're interested in and how we might connect! Feel free to ask me anything specific about my background, skills, or projects.`,
    suggestions: ["Tell me about yourself", "What brings you here?", "Let's connect on LinkedIn", "Show me your work"]
  };
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 👋 I'm Hemanth. Thanks for checking out my portfolio! Feel free to ask me anything about my work, skills, or projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: response.suggestions
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    // Auto-send the suggestion
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: suggestion,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Generate response for the suggestion
      setTimeout(() => {
        const response = generateResponse(suggestion);
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: 'bot',
          timestamp: new Date(),
          suggestions: response.suggestions
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-40 rounded-full bg-primary text-primary-foreground shadow-lg p-3 hover:bg-primary/90 transition-colors duration-300"
        aria-label="Chat with Hemanth's AI"
      >
        <MessageCircle className="size-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-96 bg-background border rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-muted/50">
            <div className="flex items-center gap-2">
              <Bot className="size-5 text-primary" />
              <span className="font-semibold">Chat with Hemanth</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="h-8 w-8 p-0"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="size-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    {message.sender === 'bot' && message.suggestions && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left text-xs bg-background/50 hover:bg-background/80 rounded px-2 py-1 transition-colors duration-200 border border-border/50"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="size-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="size-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Hemanth..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                disabled={!inputValue.trim()}
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 