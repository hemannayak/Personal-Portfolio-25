import { cn } from "@/lib/utils";
import { useActiveSection, useNavSections } from "./nav-data";
import { motion } from "framer-motion";

export default function Header() {
  const sections = useNavSections();
  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mx-auto w-full max-w-7xl px-4 lg:px-8 mt-4 pointer-events-auto"
      >
        <div className="flex glass border-2 border-foreground dark:border-white/20 brutal-shadow p-1 w-fit mx-auto">
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
      </motion.nav>
    </header>
  );
}
