import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Briefcase, Award, GraduationCap } from "lucide-react";

const items = [
  {
    company: "International Institute of Information Technology Hyderabad (IIITH)",
    role: "Research Intern on NLP",
    period: "Oct 2025 - Present",
    tag: "RES",
    logo: "/images/IIIT_Hyderabad_Logo.jpg",
    offer: "https://www.linkedin.com/posts/phemanthnayak_iiith-nlp-speechprocessing-ugcPost-7419359593128120320-5fVA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZw_zUB1T5ws7u_CxtOsHAJqon_676sYbQ",
    desc: "Conducting research on Natural Language Processing (NLP) at one of India's premier research institutes."
  },
  {
    company: "HITAM (Hyderabad Institute of Technology and Management)",
    role: "SSG - Dean Freshmen",
    period: "May 2025 - Jan 2026",
    tag: "LEAD",
    logo: "/images/SSG_LOGO.png",
    offer: "#",
    desc: "Overseeing freshmen integration and coordinating large-scale institutional initiatives."
  },
  {
    company: "HITAM (Hyderabad Institute of Technology and Management)",
    role: "SSG - Student HOD",
    period: "May 2025 - Jan 2026",
    tag: "DEPT",
    logo: "/images/SSG_LOGO.png",
    offer: "https://www.instagram.com/p/DJTPYe-zOVO/",
    desc: "Planned and managed departmental meetings/events. Bridged the gap between students and faculty. Managed feedback systems for 1,000+ students."
  },
  {
    company: "HITAM (Hyderabad Institute of Technology and Management)",
    role: "SSG - Student Coordinator",
    period: "Aug 2024 - May 2025",
    tag: "COORD",
    logo: "/images/SSG_LOGO.png",
    offer: "/images/SSG DS.jpg",
    desc: "Encouraged collaboration, planned departmental meetings, and shared student feedback with faculty."
  },
  {
    company: "IUCEE-EWB (HITAM Chapter)",
    role: "IUCEE Member",
    period: "Jan 2024 - Jan 2026",
    tag: "INTL",
    logo: "/images/IUCEE.jpeg",
    offer: "#",
    desc: "Active participation in global engineering education and welfare initiatives."
  },
  {
    company: "Edunet Foundation",
    role: "AI/ML Intern (Shell x AICTE)",
    period: "Jul - Aug 2025",
    tag: "AICTE",
    logo: "/images/edunet.png",
    offer: "https://drive.google.com/file/d/1EQJ0ZW3HzZ-mnF9f8fWNHmb4WnMYP-H0/view",
    desc: "Developed EV demand forecasting models using Random Forest Regression."
  },
  {
    company: "Elevvo Pathways",
    role: "NLP Intern",
    period: "Jul - Aug 2025",
    tag: "DATA",
    logo: "/images/ele.png",
    offer: "https://drive.google.com/file/d/14-L-zowOROHOjBNoJowFhY-qf-iY8EBF/view",
    desc: "Built high-accuracy fake news detection and sentiment analysis models."
  },
  {
    company: "Excelerate",
    role: "Data Analyst Trainee",
    period: "Jul - Aug 2025",
    tag: "TRAIN",
    logo: "/images/Exe.png",
    offer: "#",
    desc: "Data analysis and ad-campaign optimization using Microsoft Excel and statistical tools."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-x-0 top-0 h-1 bg-texture-dots opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            Record.History
          </div>
          <h2 className="font-heading text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            Professional <br /> <span className="text-muted-foreground/80">Logbook</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-4 border-foreground dark:border-white bg-card brutal-shadow overflow-hidden">
          {items.map((e, index) => (
            <ExperienceItem key={index} item={e} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group relative grid lg:grid-cols-12 border-b-4 border-foreground/10 last:border-0 hover:bg-muted/30 transition-all p-6 lg:p-10 gap-8"
    >
      {/* Timeline Column */}
      <div className="lg:col-span-3 flex flex-col justify-center border-l-4 border-primary pl-6">
        <div className="font-mono text-sm font-black uppercase tracking-tighter text-foreground mb-1">
          {item.period}
        </div>
        <div className="font-mono text-[10px] font-bold text-muted-foreground italic uppercase">
          Node_Deployment: {item.tag}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 border-2 border-foreground dark:border-white p-2 bg-white shrink-0 brutal-shadow-sm group-hover:shadow-none transition-all">
            <img
              src={item.logo}
              alt={item.company}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl lg:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-none mb-1">
              {item.role}
            </h3>
            <p className="font-mono text-xs font-bold text-foreground/60 uppercase">
              {item.company}
            </p>
          </div>
        </div>
        <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4 lg:pr-8">
          {item.desc}
        </p>
      </div>

      {/* Actions */}
      <div className="lg:col-span-3 flex items-center lg:justify-end gap-3">
        <Button
          variant="outline"
          className="rounded-none border-2 border-foreground dark:border-white font-mono font-bold uppercase hover:bg-primary hover:text-primary-foreground brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all h-12 flex-1 lg:flex-none px-6"
          asChild
        >
          <a href={item.offer} target="_blank" rel="noopener">
            View_Docs
            <ExternalLink className="size-4 ml-2" />
          </a>
        </Button>
      </div>

      {/* Marker */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
    </motion.div>
  );
}
