import { MessageCircle } from "lucide-react";

export default function ChatButton() {
  const handleEmailClick = () => {
    const email = "official.hemanthnayakpangoth@gmail.com";
    const subject = "Portfolio Inquiry";
    const body = "Hi Hemanth,\n\nI'd like to discuss a potential opportunity with you.\n\nBest regards,";
    
    // Create mailto link that will open the user's default email app
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email app
    window.location.href = mailtoLink;
  };

  return (
    <button
      aria-label="Chat with me via email"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-secondary text-secondary-foreground shadow-lg px-4 py-3 flex items-center gap-2 hover-scale animate-pulse-5s hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
      onClick={handleEmailClick}
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline font-button">Email Me</span>
    </button>
  );
}
