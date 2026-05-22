import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    title: "SnapFix – AI-Powered Civic Platform for Pothole Reporting",
    desc: "Civic-tech solution to combat India’s pothole crisis. Users upload pothole images, AI validates & detects risk, auto-reports are generated with GPS, and community voting ensures transparency. Real-time maps, dashboards, and gamified UX drive public engagement. Built at Quantanova V1 SMEC Hackathon – Top 25 out of 110+ teams.",
    image: "/images/Snap.png",
    tech: ["ReactJS", "Tailwind", "Flask", "Teachable Machine", "Firebase", "MongoDB Atlas", "Leaflet.js"],
    live: "https://tech-nova-smec-quantanova.vercel.app/",
    Github: "https://github.com/hemannayak/TechNova_SMEC_Quantanova"
  },
  { 
    title: "EV Demand Prediction Dashboard", 
    desc: "AI-powered tool forecasting EV growth and charging demand using Random Forest Regression. Interactive dashboard with CSV export, trend analysis, and Streamlit deployment.", 
    image: "/images/EV.png",
    tech: ["Python", "Streamlit", "TensorFlow", "Pandas"],
    live: "https://github.com/hemannayak/EV_Vehicle_Charge_Demand", 
    Github: "https://evvehiclechargedemand-ks6y7qnqpenjnvkp7apdpo.streamlit.app/" 
  },
  { 
    title: "Projects on Matural Language Processing(NLP)", 
    desc: "End-to-end NLP tasks including Sentiment Analysis, News Categorization, Fake News Detection (>95% F1), and Named Entity Recognition (NER). Built with SpaCy, Scikit-learn, BiLSTM, and TF-IDF pipelines.", 
    image: "/images/NLP.png",
    tech: ["Python", "SpaCy", "Scikit-learn", "Keras"],
    live: "https://github.com/hemannayak/ElevvoPathways-NLP-Internship", 
    Github: "https://github.com/hemannayak/ElevvoPathways-NLP-Internship" 
  },
  { 
    title: "LevelUp Learning – Enhancing Engagement with Gamification", 
    desc: "Gamified e-learning platform (PBL project) integrating XP, badges, leaderboards, and interactive modules. Secure login, personalized dashboards, and Supabase real-time tracking. Earned full marks and moving towards deployment.", 
    image: "/images/levelup.png",
    tech: ["React", "TypeScript", "Tailwind", "Spring Boot", "Supabase"],
    live: "https://preview--levelup-universe.lovable.app/", 
    Github: "https://github.com/hemannayak/level-up-academy-hub" 
  },
  { 
    title: "Website of Indian Heritage and Culture", 
    desc: "Smart India Hackathon project showcasing India’s cultural diversity through interactive sections, heritage exploration, and smooth UX. Built in 24 hours hackathon at HITAM.", 
    image: "/images/heritage.png",
    tech: ["HTML5", "CSS", "JavaScript"],
    live: "#", 
    Github: "#" 
  },
  { 
    title: "Personal Portfolio Website", 
    desc: "Responsive and engaging personal portfolio site to showcase skills, projects, and experiences. Designed to reflect personality and professional journey.", 
    image: "/images/portfolio.png",
    tech: ["HTML5", "CSS", "JavaScript"],
    live: "https://hemannayak.github.io/hemanthh-portfolio/", 
    Github: "https://github.com/hemannayak/hemanthh-portfolio" 
  },
  { 
    title: "Hospital Management System", 
    desc: "DBMS project that streamlines doctor-patient appointment scheduling with dedicated modules for patients and doctors. Improves hospital efficiency and user experience.", 
    image: "/images/hms.png",
    tech: ["Java", "DBMS", "JavaScript"],
    live: "#", 
    Github: "#" 
  },
  { 
    title: "E-Commerce Website using Django", 
    desc: "Full-stack e-commerce platform with authentication, product catalog, shopping cart, order management, and admin dashboard. Built with Django MVC framework and SQL database.", 
    image: "/images/django_shop.png",
    tech: ["Django", "Python", "MySQL", "JavaScript"],
    live: "#", 
    Github: "#" 
  },
];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Projects</h2>
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article 
            key={i} 
            className={`group rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
              inView 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-8 rotate-1'
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={p.image} 
                alt={`${p.title} preview`} 
                loading="lazy" 
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tech.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {tech}
                  </span>
                ))}
                {p.tech.length > 3 && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    +{p.tech.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1 font-button hover-scale" asChild>
                  <a href={p.live} target="_blank" rel="noopener">
                    <ExternalLink className="size-4 mr-1"/> Live
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 font-button hover-scale" asChild>
                  <a href={p.Github} target="_blank" rel="noopener">
                    <Github className="size-4 mr-1"/> Code
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
