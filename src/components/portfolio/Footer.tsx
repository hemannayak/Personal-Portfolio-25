export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Pangoth Hemanth Nayak. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="story-link">Projects</a>
          <a href="#experience" className="story-link">Experience</a>
          <a href="#contact" className="story-link">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
