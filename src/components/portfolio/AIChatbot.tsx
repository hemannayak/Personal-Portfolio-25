import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Terminal, Code2, Database, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

// Hierarchical & Detailed Knowledge Base
const portfolioKnowledge = {
  personal: {
    name: "Pangoth Hemanth Nayak",
    role: "Pre-final year B.Tech student @ HITAM & Research Intern @ IIIT Hyderabad",
    leadership: "Student Dean Freshmen @ HITAM",
    gpa: "8.5/10",
    objective: "Passionate about building practical, real-world solutions. Always open to new opportunities in Data Science, AI, and Software Development where I can contribute to meaningful engineering goals."
  },
  experience: [
    {
      company: "IIIT Hyderabad",
      role: "Research Intern on NLP",
      period: "Oct 2025 – Present",
      tasks: "Researching NLP & Speech Processing. Verification: https://www.linkedin.com/posts/phemanthnayak_iiith-nlp-speechprocessing-ugcPost-7419359593128120320-5fVA"
    },
    {
      company: "HITAM (Hyderabad Institute of Technology and Management)",
      role: "SSG - Dean Freshmen",
      period: "May 2025 – Present",
      tasks: "Institutional Lead overseeing Freshmen integration and governance."
    },
    {
      company: "HITAM (Hyderabad Institute of Technology and Management)",
      role: "SSG - Student HOD (CSE DS)",
      period: "May 2025 – Jan 2026",
      tasks: "Planned departmental events, bridged student-faculty communication gap, and managed feedback for 1,000+ peers."
    },
    {
      company: "HITAM (Hyderabad Institute of Technology and Management)",
      role: "SSG - Student Coordinator",
      period: "Aug 2024 – May 2025",
      tasks: "Encouraged collaboration, led planning meetings, and facilitated welfare bridges between students and governance."
    },
    {
      company: "Infotact Solutions",
      role: "Data Analyst Intern",
      period: "Jul 2025 – Present",
      tasks: "Data processing, Power BI dashboard engineering, and KPI management."
    }
  ],
  achievements: [
    {
      title: "IIITH RAP Internship - Phase 2",
      detail: "Successfully cleared Phase 1 and promoted to Phase 2 of NLP Research at IIIT Hyderabad."
    },
    {
      title: "Top 10 Finalist @ HackVibe 2025",
      detail: "Built 'VidyaMitra AI' (Regional Tutor platform) in a 24h hackathon. Ranked in Top 10."
    },
    {
      title: "AWS Community Day",
      detail: "Learned AWS Cloud significance and significance at the first state-wide event at MLRIT."
    }
  ],
  education: [
    {
      school: "Harvard Business School",
      program: "Aspire Leaders Program",
      period: "Jul – Oct 2025",
      title: "Fellow - Leadership & Professional Development",
      skills: "Critical Thinking, Leadership Strategy"
    },
    {
      school: "HITAM",
      degree: "B.Tech CSE (Data Science)",
      period: "2023 – 2027",
      gpa: "8.5/10"
    }
  ],
  skills: {
    leadership: "Communication, Strategic Planning, Student Welfare, Student Services, Public Speaking.",
    technical: "NLP, Python, Data Analysis, Power BI, React, Java, Spring Boot.",
    creative: "Professional technical content creation and system architecture design."
  },
  contact: {
    email: "official.hemanthnayakpangoth@gmail.com",
    linkedin: "@pangoth-hemanth-nayak",
    github: "@hemannayak"
  }
};

// Response Logic
const generateResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("status")) {
    return {
      text: "SYS_MSG: Connection established. I am your interface for Hemanth's professional logs. Accessing latest credentials including IIITH Phase 2 and HackVibe wins... How can I assist?",
      suggestions: ["Who is Hemanth?", "Recent Achievements", "Leadership Summary"]
    };
  }

  if (msg.includes("who") || msg.includes("about")) {
    return {
      text: `Hemanth is a ${portfolioKnowledge.personal.role} and the SSG - Dean Freshmen at HITAM. He balances NLP research at IIIT Hyderabad with institutional leadership. Recently promoted to Phase 2 at IIITH and was a HackVibe Top 10 Finalist.`,
      suggestions: ["IIITH Phase 2", "HackVibe Project", "Leadership Log"]
    };
  }

  // IIIT Hyderabad Research
  if (msg.includes("iiit") || msg.includes("research") || msg.includes("phase 2")) {
    const info = portfolioKnowledge.experience[0];
    return {
      text: `RESEARCH_PROTOCOL_IIITH: Hemanth has successfully cleared Phase 1 and is currently in Phase 2 of his NLP Research Internship at IIIT Hyderabad. He focuses on Speech Processing and NLP.`,
      suggestions: ["NLP Link", "Other Achievements"]
    };
  }

  // HackVibe & VidyaMitra
  if (msg.includes("hackvibe") || msg.includes("vidyamitra") || msg.includes("hackathon")) {
    return {
      text: `HACKATHON_EVENT: In Sept 2025, Hemanth was a Top 10 Finalist at HackVibe. He built 'VidyaMitra AI', an AI Regional Tutor platform designed to bridge education gaps in regional languages.`,
      suggestions: ["AWS Event", "Technical Skills"]
    };
  }

  // AWS
  if (msg.includes("aws") || msg.includes("cloud")) {
    return {
      text: `CLOUD_LOG: Hemanth attended the first AWS Student Community Day in Telangana (Dec 18, 2025) at MLRIT, engaging with 6 industry leaders to explore AWS Cloud significance and significance.`,
      suggestions: ["HackVibe Wins", "Research Work"]
    };
  }

  // Leadership Detail (HOD & Coordinator)
  if (msg.includes("leadership") || msg.includes("hod") || msg.includes("coordinator") || msg.includes("ssg") || msg.includes("dean")) {
    return {
      text: `LEADERSHIP_LOG: Hemanth currently serves as SSG - Dean Freshmen. Previously, as SSG - Student HOD, he managed departmental events and bridged the gap between student voices and faculty for 1,000+ peers.`,
      suggestions: ["Dean Tasks", "HOD Achievements"]
    };
  }

  // Harvard
  if (msg.includes("harvard") || msg.includes("hbs") || msg.includes("aspire")) {
    const info = portfolioKnowledge.education[0];
    return {
      text: `ACADEMIC_ACHIEVEMENT: Hemanth is a ${info.title} at Harvard Business School's Aspire Leaders Program. Status: Distinguished Fellow.`,
      suggestions: ["Leadership Skills", "Research Work"]
    };
  }

  // Default Fallback
  return {
    text: "SYS_ERR: Query outside known parameters. I can provide logs for his IIITH Phase 2 promotion, HackVibe Top 10 win (VidyaMitra AI), AWS Workshop, or SSG leadership tasks.",
    suggestions: ["Who is Hemanth?", "IIITH Phase 2", "VidyaMitra AI", "SSG Leadership"]
  };
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "SYS_BOOT: Terminal active. I have serialized logs for IIITH Phase 2, HackVibe Top 10, AWS Community Day, and HBS Aspire Fellowship. What data should I retrieve?",
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

  const handleSendMessage = () => {
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
    }, 600);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-50 h-14 w-14 sm:size-16 bg-primary text-primary-foreground border-4 border-foreground dark:border-white brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center group"
      >
        {isOpen ? <X className="size-7 sm:size-8" /> : <Terminal className="size-7 sm:size-8 group-hover:scale-110 transition-transform" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-auto sm:w-[500px] h-[75vh] sm:h-[600px] max-h-[800px] bg-card border-4 border-foreground dark:border-white brutal-shadow flex flex-col font-mono"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b-4 border-foreground dark:border-white bg-primary text-primary-foreground">
              <div className="flex items-center gap-3">
                <Terminal className="size-4" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Sys.Active_Brain_v4.0</span>
              </div>
              <button onClick={toggleChat} className="hover:bg-foreground/20 p-1">
                <X className="size-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col bg-background relative overflow-hidden">
              <div className="absolute inset-0 bg-texture-dots opacity-10 pointer-events-none" />
              <ScrollArea className="flex-1 p-4 sm:p-6 relative z-10">
                <div className="space-y-6 sm:space-y-8">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[95%] sm:max-w-[90%] border-2 border-foreground dark:border-white px-3 py-2 sm:px-4 sm:py-3 brutal-shadow-sm ${
                          message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-[9px] sm:text-[10px] font-bold uppercase opacity-50 mb-1">
                          {message.sender === 'bot' ? 'Root' : 'User'}_Log:
                        </p>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      </div>

                      {message.sender === 'bot' && message.suggestions && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.suggestions.map((s, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSuggestionClick(s)}
                              className="text-[9px] sm:text-[10px] font-black border-2 border-foreground dark:border-white bg-background px-2.5 py-1 sm:px-3 sm:py-1.5 uppercase hover:bg-primary hover:text-primary-foreground transition-all brutal-shadow-xs"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="border-2 border-foreground dark:border-white px-3 py-1.5 sm:px-4 sm:py-2 bg-muted text-foreground animate-pulse w-fit">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest italic">Syncing Credentials...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t-4 border-foreground dark:border-white bg-muted/30 flex gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-sm sm:text-base">{'>'}</span>
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Query system..."
                  className="rounded-none border-2 border-foreground dark:border-white bg-background h-10 sm:h-12 pl-7 sm:pl-8 font-mono text-xs sm:text-sm focus-visible:ring-0"
                />
              </div>
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-none border-2 border-foreground dark:border-white bg-primary text-primary-foreground brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                disabled={!inputValue.trim()}
              >
                <Send className="size-4 sm:size-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}