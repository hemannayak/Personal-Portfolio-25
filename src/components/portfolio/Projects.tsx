import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const items = [
  {
    title: "SnapFix AI",
    desc: "Civic-tech solution combating pothole crisis with AI validation and auto-reports.",
    image: "/images/Snap.png",
    tech: ["REACT", "FLASK", "ML", "MONGO"],
    live: "https://tech-nova-smec-quantanova.vercel.app/",
    Github: "https://github.com/hemannayak/TechNova_SMEC_Quantanova"
  },
  { 
    title: "EV Demand AI", 
    desc: "Forecasting EV growth using Random Forest Regression with Streamlit.", 
    image: "/images/EV.png",
    tech: ["PYTHON", "STREAMLIT", "TF"],
    live: "https://github.com/hemannayak/EV_Vehicle_Charge_Demand", 
    Github: "https://evvehiclechargedemand-ks6y7qnqpenjnvkp7apdpo.streamlit.app/" 
  },
  { 
    title: "NLP Pipeline", 
    desc: "Sentiment Analysis, Fake News Detection (>95% F1), and NER pipelines.", 
    image: "/images/NLP.png",
    tech: ["SPACY", "SCIKIT", "BILSTM"],
    live: "https://github.com/hemannayak/ElevvoPathways-NLP-Internship", 
    Github: "https://github.com/hemannayak/ElevvoPathways-NLP-Internship" 
  },
  { 
    title: "LevelUp OS", 
    desc: "Gamified e-learning platform integrating XP, badges, and real-time tracking.", 
    image: "/images/levelup.png",
    tech: ["REACT", "SPRING", "SUPABASE"],
    live: "https://preview--levelup-universe.lovable.app/", 
    Github: "https://github.com/hemannayak/level-up-academy-hub" 
  },
  { 
    title: "Heritage DB", 
    desc: "Interactive platform showcasing cultural diversity, built in 24 hours.", 
    image: "/images/heritage.png",
    tech: ["HTML5", "CSS", "JS"],
    live: "#", 
    Github: "#" 
  },
  { 
    title: "E-Comm Engine", 
    desc: "Full-stack e-commerce with authentication, catalog, and admin dashboards.", 
    image: "/images/django_shop.png",
    tech: ["DJANGO", "PYTHON", "MYSQL"],
    live: "#", 
    Github: "#" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-0 bg-texture-dots opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-black font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
              Sys.Deployments
            </div>
            <h2 className="font-heading text-4xl sm:text-7xl font-black uppercase tracking-tighter">
              Featured <br /> Archives
            </h2>
          </motion.div>
          
          <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted-foreground sm:text-right">
            Total count: {items.length} <br className="hidden sm:block" />
            <span className="sm:inline hidden">STATUS: </span>All Systems Operational
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <ProjectCard key={i} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card border-4 border-foreground dark:border-white h-full flex flex-col brutal-shadow hover:-translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
        
        {/* Top Bar */}
        <div className="h-8 border-b-4 border-foreground dark:border-white flex items-center justify-between px-3 bg-muted">
          <div className="flex gap-2">
            <span className="w-3 h-3 border-2 border-foreground dark:border-white bg-destructive" />
            <span className="w-3 h-3 border-2 border-foreground dark:border-white bg-muted" />
            <span className="w-3 h-3 border-2 border-foreground dark:border-white bg-primary" />
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">EXE</span>
        </div>

        {/* Image Header with Duotone/Grayscale effect */}
        <div className="relative overflow-hidden aspect-video w-full border-b-4 border-foreground dark:border-white bg-background">
          <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
          <img 
            src={p.image} 
            alt={p.title} 
            loading="lazy" 
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        
        {/* Content */}
        <div className="p-5 flex-1 flex flex-col bg-background">
          <div className="flex justify-between items-start gap-4 mb-4">
            <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
              {p.title}
            </h3>
          </div>
          
          <p className="font-body text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
            {p.desc}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((tech: string, idx: number) => (
              <span key={idx} className="font-mono text-[10px] font-bold tracking-widest uppercase bg-foreground text-background px-2 py-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-0 border-2 border-foreground dark:border-white mt-auto">
            <Button variant="ghost" size="sm" className="rounded-none border-r-2 border-foreground dark:border-white font-mono font-bold uppercase hover:bg-primary hover:text-black tracking-widest text-xs h-10" asChild>
              <a href={p.live} target="_blank" rel="noopener">
                LIVE
                <ExternalLink className="size-3 ml-2"/> 
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-none font-mono font-bold uppercase hover:bg-foreground hover:text-background tracking-widest text-xs h-10" asChild>
              <a href={p.Github} target="_blank" rel="noopener">
                SRC
                <Github className="size-3 ml-2"/>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
