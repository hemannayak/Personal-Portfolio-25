import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();

  return (
    <section id="contact" className="relative py-24 border-b brutal-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Content and Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-6 w-fit">
              Sys.Connect
            </div>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let's <br /> <span className="text-muted-foreground/80">Collaborate</span>
            </h2>
            
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-12 max-w-md border-l-4 border-primary pl-6">
              If you have a challenging project, a random thought, or a poetic spark — my system is ready to process your input.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <SocialCard Icon={Github} label="GitHub" href="https://github.com/hemannayak" />
              <SocialCard Icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/" />
              <SocialCard Icon={Mail} label="Email" href="mailto:official.hemanthnayakpangoth@gmail.com" />
              <SocialCard Icon={Instagram} label="Instagram" href="https://www.instagram.com/hem_writess/?__pwa=1" />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="border-4 border-foreground dark:border-white bg-card brutal-shadow p-8 lg:p-10 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] uppercase font-bold opacity-30">Form_404_Handler</div>
              
              <form
                action="https://formsubmit.co/official.hemanthnayakpangoth@gmail.com"
                method="POST"
                className="space-y-6"
                onSubmit={() =>
                  toast({ 
                    title: "System: Message Received", 
                    description: "Your input has been successfully logged. I'll reach out shortly.",
                    variant: "default",
                  })
                }
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="System: New Collaboration Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="/" />

                <div className="space-y-2">
                  <Input 
                    required 
                    name="Name_Input" 
                    placeholder="Enter full name" 
                    className="rounded-none border-2 border-foreground dark:border-white h-12 bg-background focus-visible:ring-primary focus-visible:ring-offset-0" 
                  />
                </div>

                <div className="space-y-2">
                  <Input 
                    required 
                    type="email" 
                    name="Email_Input" 
                    placeholder="name@provider.com" 
                    className="rounded-none border-2 border-foreground dark:border-white h-12 bg-background focus-visible:ring-primary focus-visible:ring-offset-0" 
                  />
                </div>

                <div className="space-y-2">
                  <Textarea 
                    required 
                    name="Message_Body" 
                    placeholder="Initialize conversation details here..." 
                    className="rounded-none border-2 border-foreground dark:border-white min-h-[160px] bg-background focus-visible:ring-primary focus-visible:ring-offset-0" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-none border-2 border-foreground dark:border-white bg-primary text-primary-foreground font-mono font-bold text-lg uppercase brutal-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Send Message
                  <Send className="ml-3 size-5" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialCard({ Icon, label, href }: { Icon: any; label: string; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer noopener"
      className="flex items-center gap-4 p-4 border-2 border-foreground dark:border-white bg-background hover:bg-primary hover:text-primary-foreground brutal-shadow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
    >
      <Icon className="size-6 group-hover:scale-110 transition-transform" />
      <span className="font-mono text-xs font-black uppercase tracking-widest">{label}</span>
    </a>
  );
}
