import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const items = [
  {
    title: "Introduction to Technology Apprenticeship Job Simulation",
    org: "Accenture UK - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/EzKFRQ2oEA87PPjsL_ovyvuqqNRQKBjNxbj_tPAnmtZKdrmc2mAvb_1750427943355_completion_certificate.pdf",
    logo: "/images/Assenture.png",
  },
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte Australia - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_tPAnmtZKdrmc2mAvb_1750341051404_completion_certificate.pdf",
    logo: "/images/Deloitte.png",
  },
  {
    title: "Technology Job Simulation",
    org: "Deloitte Australia - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_tPAnmtZKdrmc2mAvb_1750515042124_completion_certificate.pdf",
    logo: "/images/Deloitte.png",
  },
  {
    title: "CSS Fundamentals",
    org: "LinkedIn Learning",
    date: "Feb 2025",
    link: "https://www.linkedin.com/learning/certificates/1c533b911785446f9e1a5f8d00f231eb481b12e535b3b5dcdec51850415e6b72?trk=share_certificate",
    logo: "/images/LinkedinL.png",
  },
  {
    title: "HTML Essential Training",
    org: "LinkedIn Learning",
    date: "Feb 2025",
    link: "https://lnkd.in/gTbFRHGr",
    logo: "/images/LinkedinL.png",
  },
  {
    title: "Introduction to Generative AI",
    org: "Google Cloud Skills Boost",
    date: "Oct 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/57aba701-53d4-4f7a-840d-5de145af9f57/badges/11800271?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    logo: "/images/Google.png",
  },
  {
    title: "AI Creators Internship",
    org: "Swecha Telangana",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1NjdDBT0gtG571gOpAYuKTD1a5_w5fMo6/view?usp=drive_link",
    logo: "/images/Swecha.png",
  },
  {
    title: "Programming in C# Certification",
    org: "Infosys Springboard",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/1_lL5ihbRnfmzOoGapfcZBy1J014nRzOH/view",
    logo: "/images/Infosyss.png",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    org: "Cisco",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/17eHvgGEUSU5hqMpq2hPo7Vnoc1fpaOf9/view?usp=drive_link",
    logo: "/images/Cisci.png",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-x-0 top-0 h-1 bg-texture-dots opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            System.Certifications
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tighter">
            Acquired <br /> <span className="text-muted-foreground/80">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((c, i) => (
            <CourseCard key={i} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ c, index }: { c: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative border-4 border-foreground dark:border-white bg-card p-0 flex flex-col brutal-shadow hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all h-full"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b-4 border-foreground dark:border-white group-hover:bg-primary transition-colors">
        <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300" />
        <img
          src={c.logo}
          alt={c.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />
        <div className="absolute top-4 right-4 z-20">
          <Award className="size-8 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
          [{c.org}] // {c.date}
        </div>
        <h3 className="font-heading text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight mb-6">
          {c.title}
        </h3>
        
        <div className="mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full rounded-none border-2 border-foreground dark:border-white font-mono font-bold uppercase hover:bg-primary hover:text-primary-foreground tracking-widest text-xs h-10 group/btn" 
            asChild
          >
            <a href={c.link} target="_blank" rel="noopener">
              Verify_Access
              <ExternalLink className="size-3 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
