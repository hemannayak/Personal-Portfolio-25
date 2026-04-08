import { cn } from "@/lib/utils";
import { useActiveSection, useNavSections } from "./nav-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = useNavSections();
  const active = useActiveSection();

  // Close mobile menu on section click
  const handleNavClick = () => setIsOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mx-auto w-full max-w-7xl px-4 lg:px-8 mt-4"
      >
        <div className="flex items-center justify-between">
          {/* Logo/Name for mobile */}
          <div className="sm:hidden glass border-2 border-foreground dark:border-white/20 brutal-shadow px-4 py-2 font-mono font-black text-xs uppercase tracking-tighter bg-background">
            SYS.MNU
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex glass border-2 border-foreground dark:border-white/20 brutal-shadow p-1">
              <ul className="flex items-center">
                {sections.map(({ id, label, Icon }) => (
                  <li key={id} className="relative">
                    <a
                      href={`#${id}`}
                      aria-label={label}
                      className={cn(
                        "relative flex items-center justify-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors z-10",
                        active === id ? "text-primary-foreground" : "text-foreground hover:bg-muted"
                      )}
                    >
                      {active === id && (
                        <motion.div
                          layoutId="active-nav-brutal"
                          className="absolute inset-0 bg-primary -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <Icon className="size-4" aria-hidden />
                      <span className="hidden sm:inline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden flex items-center justify-center size-10 glass border-2 border-foreground dark:border-white/20 brutal-shadow bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 sm:hidden bg-background/95 backdrop-blur-md border-l-4 border-foreground"
          >
            <div className="flex flex-col h-full p-8 pt-24">
              <div className="font-mono text-4xl font-black uppercase tracking-tighter mb-12 flex flex-col">
                <span className="text-primary">Navigation</span>
                <span>Systems</span>
              </div>
              <ul className="flex flex-col gap-4">
                {sections.map(({ id, label, Icon }, idx) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={handleNavClick}
                      className={cn(
                        "flex items-center gap-6 p-4 border-2 transition-all font-mono font-bold text-xl uppercase tracking-widest",
                        active === id 
                          ? "bg-primary text-primary-foreground border-foreground brutal-shadow-sm translate-x-1 translate-y-1 shadow-none" 
                          : "border-foreground/20 hover:border-foreground hover:bg-muted"
                      )}
                    >
                      <Icon className={cn("size-6", active === id ? "animate-pulse" : "")} />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-auto border-t-2 border-foreground pt-8 flex justify-between items-center">
                <div className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                  Session: {new Date().toLocaleTimeString()}
                </div>
                <div className="flex gap-4">
                   <div className="size-2 rounded-full bg-primary animate-ping" />
                   <span className="font-mono text-[10px] uppercase font-bold">Live Status</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
