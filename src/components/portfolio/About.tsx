import { motion } from "framer-motion";
import { Mail, GraduationCap, Briefcase, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 border-b brutal-border bg-background">
      <div className="absolute inset-x-0 top-0 h-1 bg-texture-dots opacity-40" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="mb-12 sm:mb-16">
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow transition-all mb-4">
            About Me
          </div>
          <h2 className="font-heading text-4xl sm:text-7xl font-black uppercase tracking-tighter">
            Architect & <br /> <span className="text-muted-foreground">Problem Solver</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Professional Photo Left */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] border-4 border-foreground dark:border-white bg-card brutal-shadow overflow-hidden group max-w-sm mx-auto lg:max-w-none">
              <img 
                src="/images/Hemanth1.jpg" 
                alt="Pangoth Hemanth Nayak" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            {/* Minimal Detail Overlay */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden sm:flex flex-col items-end gap-2 pointer-events-none">
              <div className="bg-background border-2 border-foreground dark:border-white px-4 py-2 font-mono text-xs font-black uppercase tracking-widest brutal-shadow-sm">
                Nayak, P.H.
              </div>
              <div className="bg-primary text-primary-foreground border-2 border-foreground dark:border-white px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                Student Dean @ HITAM
              </div>
            </div>
          </motion.div>

          {/* Simple Narrative Right */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div className="space-y-6">
              <p className="font-body text-lg sm:text-2xl leading-relaxed text-foreground">
                I’m a prefinal-year <strong>B.Tech student in Computer Science (Data Science)</strong> driven by a passion for building practical, real-world solutions.
              </p>
              
              <p className="font-body text-base sm:text-lg leading-relaxed text-muted-foreground">
                I believe in <strong>learning by building</strong>—experimenting with raw datasets, fine-tuning ML models, and turning conceptual ideas into robust, end-to-end applications using <strong>Python and Java</strong>. My experience in hackathons and internships has taught me how to approach problem statements practically and focus on solutions that add real value.
              </p>

              <p className="font-body text-base sm:text-lg leading-relaxed text-muted-foreground">
                Currently, I serve as a <strong>Research Intern in NLP @ IIIT Hyderabad</strong>, focusing on large-scale text processing. Beyond research, I am the <strong>Student Dean Freshmen @ HITAM</strong>, where I work to improve student-faculty coordination. I am also an <strong>Harvard Aspire Fellow</strong>, which has deeply enriched my leadership and structured thinking.
              </p>
            </div>

            {/* Interests & Contact Row */}
            <div className="pt-8 border-t-2 border-foreground/10 flex flex-wrap gap-8">
              <div className="flex-1 min-w-[200px] space-y-4">
                <h4 className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-primary">
                  <Heart className="size-4" /> Core Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Analytics", "Machine Learning", "NLP Research", "Full-Stack Dev"].map(interest => (
                    <span key={interest} className="px-3 py-1 bg-muted border-2 border-foreground dark:border-white font-mono text-[10px] font-bold uppercase tracking-widest">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-[200px] space-y-4">
                <h4 className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-primary">
                  <Mail className="size-4" /> Reach Me
                </h4>
                <a 
                  href="mailto:official.hemanthnayakpangoth@gmail.com"
                  className="block font-mono text-xs sm:text-sm font-black hover:text-primary transition-colors underline decoration-2 underline-offset-4"
                >
                  official.hemanthnayakpangoth@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
