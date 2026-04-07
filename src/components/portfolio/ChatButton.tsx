import { Mail, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatButton() {
  const handleEmailClick = () => {
    const email = "official.hemanthnayakpangoth@gmail.com";
    const subject = "SYS_INQUIRY: Collaboration Portfolio";
    const body = "Initialize connection sequence...\n\nI'm interested in discussing a potential deployment with your system.";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Initialize email contact"
      className="fixed bottom-6 right-6 z-50 rounded-none border-4 border-foreground dark:border-white bg-primary text-primary-foreground brutal-shadow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all px-5 py-3 flex items-center gap-3 group overflow-hidden"
      onClick={handleEmailClick}
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-background opacity-20 group-hover:h-full transition-all duration-300 -z-10" />
      
      <Terminal className="size-5 group-hover:rotate-12 transition-transform" />
      <span className="font-mono text-sm font-black uppercase tracking-[0.2em]">
        _Mail_Me
      </span>
      <Mail className="size-4 opacity-50 hidden sm:block" />
    </motion.button>
  );
}
