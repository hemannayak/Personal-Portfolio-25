import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const items = [
  {
    title: "IIITH RAP Internship - NLP",
    date: "2025-PRES",
    org: "IIIT HYDERABAD",
    description: "Successfully cleared Phase 1 and promoted to Phase 2 of the Research Internship (NLP) at IIIT Hyderabad.",
    image: "/images/IIIT_Hyderabad_Logo.jpg",
    link: "https://www.linkedin.com/posts/phemanthnayak_iiith-nlp-speechprocessing-activity-7419359596357562368-Bzxb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZw_zUB1T5ws7u_CxtOsHAJqon_676sYbQ"
  },
  {
    title: "AWS Community Day",
    date: "DEC 18, 2025",
    org: "AWS / MLRIT",
    description: "Attended first AWS Community Day in Telangana. Learned AWS cloud fundamentals and significance from industry speakers.",
    image: "/images/AWS Community Days.jpeg"
  },
  {
    title: "Top 10 Finalist @ HackVibe",
    date: "SEP 12-13, 2025",
    org: "HACKATHON",
    description: "Built 'VidyaMitra AI' - Regional Tutor platform in 24h. Ranked as a Top 10 Finalist in a competitive hackathon.",
    image: "/images/Hackvibe.jpeg"
  },
  {
    title: "Student HOD",
    date: "25-PRESENT",
    org: "SSG",
    description: "Lead initiatives for CS Dept, coordinating between students & faculty.",
    image: "/images/SSG 2026.png"
  },
  {
    title: "Student Coordinator",
    date: "24-25",
    org: "SSG",
    description: "Planned monthly SSG Days, organized events and workshops.",
    image: "/images/SSG2025.png"
  },
  {
    title: "Creator (5K+)",
    date: "23-PRESENT",
    org: "LINKEDIN",
    description: "5K+ followers and 200K+ impressions through impactful technical content.",
    image: "/images/Linkedin.png"
  },
  {
    title: "Aspire Fellow",
    date: "2025",
    org: "HARVARD_BS",
    description: "Harvard Business School Aspire Leaders Program Fellow - Cohort 4.",
    image: "/images/Aspire.png"
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-0 bg-texture-dots opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            System.Honors
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tighter">
            Recognized <br /> <span className="text-primary/70">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((a, i) => (
            <AchievementCard key={i} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ a, index }: { a: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={inView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      style={{ originY: 0 }}
      className="group relative border-4 border-foreground dark:border-white bg-card brutal-shadow p-6 flex flex-col hover:-translate-y-2 hover:translate-x-2 hover:shadow-none transition-all duration-200 h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 border-2 border-foreground dark:border-white p-1 bg-background shrink-0">
          <img
            src={a.image}
            alt={a.title}
            loading="lazy"
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="font-mono text-[10px] sm:text-xs font-bold px-2 py-1 bg-foreground text-background whitespace-nowrap">
          {a.date}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">
          [{a.org}]
        </div>
        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
          {a.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {a.description}
        </p>
      </div>

      {a.link && (
        <div className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="rounded-none border-2 border-foreground dark:border-white font-mono font-bold uppercase transition-all hover:bg-primary hover:text-primary-foreground brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 w-full text-[10px] tracking-widest"
            asChild
          >
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              Verify_Access <ExternalLink className="size-3 ml-2" />
            </a>
          </Button>
        </div>
      )}

      <div className="absolute right-0 bottom-0 w-8 h-8 border-t-4 border-l-4 border-foreground dark:border-white opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  );
}
