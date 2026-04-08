import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type Skill = { name: string; level: number };
const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "ENG_FRONTEND",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript/TS", level: 75 },
      { name: "React/Tailwind", level: 80 },
    ],
  },
  {
    title: "ENG_BACKEND",
    skills: [
      { name: "Java/Spring", level: 70 },
      { name: "Python/Django", level: 75 },
      { name: "SQL/MongoDB", level: 65 },
    ],
  },
  {
    title: "DATA_SCIENCE",
    skills: [
      { name: "Data Analysis", level: 90 },
      { name: "Stat/Tableau", level: 70 },
      { name: "Python ML Base", level: 80 },
    ],
  },
  {
    title: "LEADERSHIP_OS",
    skills: [
      { name: "Comm & Pitch", level: 85 },
      { name: "Team Strategy", level: 90 },
      { name: "Student HOD Mgmt", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-foreground text-background font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            Module.Skills
          </div>
          <h2 className="font-heading text-4xl sm:text-7xl font-black uppercase tracking-tighter">
            Technical <br /> <span className="text-muted-foreground/80">Capacities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, index) => (
            <SkillGroup key={g.title} title={g.title} skills={g.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, skills, index }: { title: string; skills: Skill[]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
      className="border-2 border-foreground dark:border-white p-5 sm:p-6 bg-background brutal-shadow hover:-translate-y-1 transition-transform group"
    >
      <h3 className="font-mono text-xs sm:text-sm tracking-widest font-bold uppercase border-b-2 border-foreground/20 pb-4 mb-5 sm:mb-6 group-hover:text-primary transition-colors">
        {'>'} {title}
      </h3>
      <ul className="space-y-5 sm:space-y-6 lg:space-y-8">
        {skills.map((s, i) => (
          <li key={s.name}>
            <div className="flex justify-between font-mono text-[10px] sm:text-xs font-bold mb-2 text-foreground uppercase tracking-tight">
              <span>{s.name}</span>
              <span>{s.level} / 100</span>
            </div>
            {/* Brutalist segmented or hard-block loading bar */}
            <div className="h-3 sm:h-4 border-2 border-foreground dark:border-white w-full bg-muted relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
                className="absolute top-0 left-0 h-full bg-foreground"
              >
                {/* Stripe pattern for brutalist loading bar */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
