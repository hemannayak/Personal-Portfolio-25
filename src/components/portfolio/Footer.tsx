export default function Footer() {
  return (
    <footer className="relative bg-background border-t-4 border-foreground dark:border-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-texture-dots opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="inline-block border-2 border-foreground dark:border-white px-3 py-1 bg-foreground text-background font-mono font-bold text-[10px] uppercase tracking-[0.2em] brutal-shadow-xs mb-2">
              End_Of_Transmission
            </div>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-tight text-foreground/60">
              © {new Date().getFullYear()} <span className="text-foreground">Pangoth Hemanth Nayak</span>. All systems optimized.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <FooterLink href="#projects" label="Projects" />
            <FooterLink href="#experience" label="Experience" />
            <FooterLink href="#contact" label="Contact" />
            <FooterLink href="https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/" label="LinkedIn" external />
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
          <span>LAT: 17.3850° N, LONG: 78.4867° E</span>
          <span className="hidden sm:block">Built with React + Tailwind + Neo-Brutalism</span>
          <span className="flex items-center gap-2">Status: <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Operational</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a 
      href={href} 
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="font-mono text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </a>
  );
}
