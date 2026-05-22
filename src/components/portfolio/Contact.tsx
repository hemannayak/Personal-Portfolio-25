import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  // Using formsubmit.co to send emails from a static site without a backend
  function onSubmit(_e: React.FormEvent<HTMLFormElement>) {}

  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Let’s Connect</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form
          action="https://formsubmit.co/official.hemanthnayakpangoth@gmail.com"
          method="POST"
          className="rounded-xl border bg-card p-5 shadow-sm space-y-3"
          onSubmit={() =>
            toast({ title: "Message sent!", description: "Thanks for reaching out. I’ll get back to you soon." })
          }
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New message from portfolio – Let’s Connect" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="/" />

          <Input required name="name" placeholder="Your name" aria-label="Your name" />
          <Input required type="email" name="email" placeholder="Your email" aria-label="Your email" />
          <Textarea required name="message" placeholder="Your message" aria-label="Your message" className="min-h-32" />
          <Button type="submit" className="font-button hover-scale" variant="secondary">Send Message</Button>
        </form>
        <aside className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-muted-foreground">Prefer email or socials?</p>
          <div className="mt-3 flex items-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="https://github.com/hemannayak" target="_blank" rel="noreferrer noopener"><Github className="size-5"/> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/" target="_blank" rel="noreferrer noopener"><Linkedin className="size-5"/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="mailto:official.hemanthnayakpangoth@gmail.com"><Mail className="size-5"/> Email</a>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="https://www.instagram.com/heyy__heman" target="_blank" rel="noreferrer noopener"><Instagram className="size-5"/> Instagram (Personal)</a>
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="https://www.instagram.com/hem_writess/?__pwa=1" target="_blank" rel="noreferrer noopener"><Instagram className="size-5"/> Instagram (Page)</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
