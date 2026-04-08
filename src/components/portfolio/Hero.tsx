import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, InstagramIcon, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "SSG - Dean Freshmen",
  "Research Intern @ IIITH",
  "Data Scientist",
  "NLP Engineer",
  "System Architect",
];

const ScrollingTicker = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden bg-foreground/5 py-1 z-20 border-b border-foreground/10 flex">
    <div className="animate-marquee whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-widest text-primary/60 px-4">
      System.Status: Online // Connection.Secure // Node: India.Hyderabad // Protocol: HTTP/2.0 // Latency: 12ms // Kernel: v6.4.2-PNH // 
    </div>
    <div className="animate-marquee2 absolute top-0 left-0 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-widest text-primary/60 py-1 px-4">
      System.Status: Online // Connection.Secure // Node: India.Hyderabad // Protocol: HTTP/2.0 // Latency: 12ms // Kernel: v6.4.2-PNH // 
    </div>
  </div>
);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b brutal-border pt-16">
      <ScrollingTicker />
      {/* Cyber grid */}
      <div className="absolute inset-0 -z-20 bg-cyber-grid opacity-100" />
      {/* Subtle monochrome glow blob in dark mode */}
      <div className="absolute top-1/3 right-1/4 -z-10 w-96 h-96 rounded-full bg-foreground/5 blur-[120px] pointer-events-none dark:opacity-100 opacity-0" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 w-64 h-64 rounded-full bg-foreground/5 blur-[100px] pointer-events-none dark:opacity-100 opacity-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Large Type Content */}
          <div className="lg:col-span-7 flex flex-col pt-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-1 bg-primary mb-8"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground dark:border-white/30 w-fit glass brutal-shadow mb-6"
            >
              <Terminal className="size-5 text-primary" />
              <span className="font-mono text-sm font-bold tracking-widest uppercase">
                System Initialized
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-5xl sm:text-7xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter"
            >
              Pangoth<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px hsl(var(--primary))" }}>
                Hemanth
              </span>
              <br />
              Nayak
            </motion.h1>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="pl-6 h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-lg sm:text-2xl font-bold text-primary/80 uppercase tracking-widest"
                  >
                    // {roles[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 sm:mt-12 flex flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="flex-1 sm:flex-none rounded-none border-2 border-foreground dark:border-white/30 bg-primary text-white hover:bg-primary/80 font-mono font-bold brutal-shadow-primary transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase tracking-wider text-xs sm:text-base h-12 sm:h-auto"
                asChild
              >
                <a href="#projects">Deploy Portfolio</a>
              </Button>
               <Button
                size="lg"
                variant="outline"
                className="flex-1 sm:flex-none rounded-none border-2 border-foreground dark:border-white/30 glass font-mono font-bold hover:bg-foreground hover:text-background transition-colors uppercase tracking-wider text-xs sm:text-base h-12 sm:h-auto"
                asChild
              >
                <a href="https://drive.google.com/file/d/10Cya3rSyD5J3tnPgdlOJt50qcE7DYPh9/view?usp=sharing" target="_blank">
                  Resume.pdf
                </a>
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-none border-2 border-foreground dark:border-white/30 bg-background text-foreground hover:bg-primary hover:text-primary-foreground font-mono font-bold brutal-shadow transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase tracking-wider group/mail text-xs sm:text-base h-12 sm:h-auto"
                asChild
              >
                <a href="mailto:official.hemanthnayakpangoth@gmail.com">
                  Email Me
                  <Mail className="ml-3 size-4 sm:size-5 group-hover/mail:rotate-12 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Profile Image */}
          <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[600px] relative order-first lg:order-last border-4 border-foreground dark:border-white/20 glass brutal-shadow overflow-hidden group">
            {/* Window bar */}
            <div className="absolute inset-x-0 top-0 h-8 border-b-4 border-foreground dark:border-white/20 glass flex items-center px-4 gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-destructive border-2 border-foreground dark:border-white/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-foreground dark:border-white/20" />
              <div className="w-3 h-3 rounded-full bg-primary border-2 border-foreground dark:border-white/20" />
              <span className="ml-4 font-mono text-xs font-bold">sys.camera(0)</span>
            </div>

            {/* Monochrome tint overlay on hover-out, reveals natural photo on hover */}
            <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />

            <img
              src="/images/hemanth2.jpg"
              alt="Pangoth Hemanth Nayak Profile"
              className="w-full h-full object-cover object-top pt-8 z-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>

        </div>

        {/* Bottom Social Bar */}
        <div className="border-t-2 border-foreground dark:border-white/15 mt-16 lg:mt-24 py-4 flex flex-wrap justify-between items-center gap-4">
          <span className="font-mono text-sm font-bold tracking-widest hidden sm:block">STATUS: ONLINE</span>
          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com/hemannayak", label: "GH" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/", label: "IN" },
              { Icon: InstagramIcon, href: "https://www.instagram.com/hem_writess/?__pwa=1", label: "IG" },
            ].map((social, idx) => (
              <a
                key={idx}
                className="flex items-center gap-2 border-2 border-foreground dark:border-white/20 px-3 py-2 glass hover:bg-primary hover:text-white hover:border-primary transition-colors font-mono font-bold text-xs"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.Icon className="size-4" />
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
