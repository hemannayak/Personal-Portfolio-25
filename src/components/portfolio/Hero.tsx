import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, InstagramIcon } from "lucide-react";

const roles = [
  {
    title: "SSG Student HOD – CSE (Data Science)",
    tagline:
      "Working for the growth of our department and students through innovation and collaboration.",
  },
  {
    title: "Data Analyst Intern",
    tagline: "Transforming raw numbers into meaningful insights.",
  },
  {
    title: "Frontend Developer",
    tagline: "Building interfaces that blend beauty with performance.",
  },
  {
    title: "AI & Prompt Engineer",
    tagline: "Designing intelligent interactions between humans and machines.",
  },
  {
    title: "Content Creator @hem_writess",
    tagline:
      "Penning every feeling, emotion, and reality into poetry that inspires, connects, and resonates.",
  },
];


export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-gradient-primary opacity-20"
        aria-hidden
      />
      <div className="container mx-auto py-28 sm:py-36">
        <div className="grid items-center gap-10 md:gap-14 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p
              className="text-sm text-muted-foreground animate-fade-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I’m
            </p>
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-2 animate-fade-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Pangoth Hemanth Nayak
            </h1>

            {/* Animated Role + Tagline */}
            <div
              className="mt-4 animate-fade-slide-up"
              style={{ animationDelay: "0.35s" }}
            >
              <h2 className="text-xl font-semibold text-primary">
                {roles[index].title}
              </h2>
              <p className="text-lg text-muted-foreground mt-1">
                {roles[index].tagline}
              </p>
            </div>

            {/* Buttons + Social Links */}
            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                className="font-button hover-scale"
                variant="secondary"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                className="font-button hover-scale"
                variant="outline"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/10Cya3rSyD5J3tnPgdlOJt50qcE7DYPh9/view?usp=sharing"
                  aria-label="View Resume"
                >
                  View Resume
                </a>
              </Button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  className="inline-flex p-2 rounded-full hover:bg-muted transition-colors"
                  href="https://github.com/hemannayak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="size-5 text-foreground" />
                </a>

                <a
                  className="inline-flex p-2 rounded-full hover:bg-muted transition-colors"
                  href="https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5 text-foreground" />
                </a>

                <a
                  className="inline-flex p-2 rounded-full hover:bg-muted transition-colors"
                  href="https://www.instagram.com/hem_writess/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-5 text-foreground" />
                </a>

                <a
                  className="inline-flex p-2 rounded-full hover:bg-muted transition-colors"
                  href="mailto:official.hemanthnayakpangoth@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="size-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <aside
            className="order-first md:order-none animate-fade-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-border bg-muted">
                <img
                  src="/images/profile-pics.png" // Ensure correct file name
                  alt="Pangoth Hemanth Nayak profile portrait"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
