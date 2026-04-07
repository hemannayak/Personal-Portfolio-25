import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const items = [
  {
    school: "Hyderabad Institute of Technology And Management (HITAM)",
    degree: "B Tech in Computer Science Engineering - Data Science",
    period: "2023 – 2027",
    gpa: "8.5/10",
    logo: "/images/Hitam.png", 
    link: "https://hitam.org/",
  },
  {
    school: "MJPTBCWREIS (BOYS) Junior College, Goshamahal",
    degree: "Intermediate - MPC",
    period: "2021 – 2023",
    gpa: "91.1%",
    logo: "/images/InterCollege.jpg",
    link: "https://mjptbcwreis.telangana.gov.in/",
  },
  {
    school: "Harvard Business School",
    degree: "Fellow - Aspire Leaders Program, Leadership & Professional Development",
    period: "Jul 2025 – Oct 2025",
    gpa: "Leadership, Critical Thinking",
    logo: "/images/Havard.png",
    link: "https://www.aspireleaders.org/",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-0 bg-texture-dots opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            System.Education
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tighter">
            Academic <br /> <span className="text-muted-foreground">Framework</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {items.map((e, i) => (
            <EducationCard key={i} e={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ e, index }: { e: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <motion.article 
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative border-4 border-foreground dark:border-white bg-card brutal-shadow p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-foreground dark:border-white p-2 bg-white shrink-0 brutal-shadow relative group-hover:shadow-none transition-all">
        <img 
          src={e.logo} 
          alt={e.school} 
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
              {e.school}
            </h3>
            <p className="font-mono text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">
              {e.degree}
            </p>
          </div>
          <div className="font-mono text-xs font-bold px-3 py-1 bg-foreground text-background whitespace-nowrap self-start">
            {e.period}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground">GPA_REF:</span>
            <span className="font-mono text-sm font-black text-primary">{e.gpa}</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-none border-2 border-foreground dark:border-white font-mono font-bold uppercase hover:bg-primary hover:text-primary-foreground tracking-widest text-xs"
            asChild
          >
            <a href={e.link} target="_blank" rel="noopener">Access_Website</a>
          </Button>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
        <div className="w-4 h-4 border-t-2 border-r-2 border-foreground dark:border-white" />
      </div>
    </motion.article>
  );
}
