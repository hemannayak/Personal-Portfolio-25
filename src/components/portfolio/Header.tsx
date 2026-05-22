import { cn } from "@/lib/utils";
import { useActiveSection, useNavSections } from "./nav-data";

export default function Header() {
  const sections = useNavSections();
  const active = useActiveSection();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-md rounded-full px-3 py-2 border">
        <ul className="flex gap-1">
          {sections.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-2 transition-colors",
                  active === id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
              >
                <Icon className="size-4 animate-bounce-in" aria-hidden />
                <span className="hidden sm:inline text-sm font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
