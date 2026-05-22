import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Hemanth has been an exceptional member of HITAM's Student Self Governance (SSG), demonstrating an inspiring journey of growth and transformation. Initially composed and reserved, he gradually stepped into his potential—consistently contributing thoughtful ideas and taking initiative within his department. His evolution into a confident leader, paired with his collaborative mindset and strong interpersonal skills, has made a lasting impact on our team. Hemanth’s dedication, adaptability, and drive to improve set him apart. I am confident in his continued success and excited to see the heights he will reach in the future.",
    name: "Ishita Roy",
    role: "SSG- Student Director 2024",
    image: "/images/ishita.png"
  },
  {
    quote: "Hemanth, I’ve really admired the effort and dedication you’ve shown as part of SSG. Watching you grow from a coordinator to Student HOD has been amazing, and I honestly believe you’re well on your way to making it to the core team too. It reminds me a lot of my own SSG journey 😅.Also, I’ve been noticing how actively you’re building your network on LinkedIn—it’s great to see! Keep up the good work and stay consistent. Wishing you all the best ahead!",
    name: "karthik Manda",
    role: "SSG - Student Dean CDC ",
    image: "/images/Karthik.png"
  },
  {
    quote: "Hemanth, you’ve always been super talented—with amazing communication, organizing, and tech skills. It’s honestly so cool how you manage to balance everything so well without losing that creative spark.I loved going through your portfolio—it truly shows your hard work and passion. Can’t wait to see more creative stuff from you in the future! Wishing you all the best always! Anytime, Hemanth 🫶🏻",
    name: "Gnanitha Suryadevara",
    role: "SSG - Student Dean R&D",
    image: "/images/Gnanitha.png"
  },
  {
    quote: "Hemanth, you’ve always genuinely admired the level of commitment and dedication you bring to everything you take on. Whether it's a small responsibility or a big challenge, you approach it with the same sincerity, focus, and drive—and that’s something really rare.Your consistency, attention to detail, and the way you take ownership of your work truly stand out. It’s not just about completing tasks—it’s about the energy, thought, and care you put into them that makes a difference. You’re someone who sets a quiet but powerful example for others to follow, just by doing what you do, the way you do it. Keep going strong—you’re doing amazing, and I’m sure there’s so much more ahead for you!",
    name: "Sree Varsha",
    role: "SSG - Student Principal 2025",
    image: "/images/varsha.png"
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="relative py-24 border-b brutal-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-block border-2 border-foreground dark:border-white px-4 py-2 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase brutal-shadow tracking-widest mb-4">
            System.Feedback
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tighter">
            Voices of <br /> <span className="text-muted-foreground">Collaborators</span>
          </h2>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="relative px-4 sm:px-12"
        >
          <CarouselContent className="-ml-4 sm:-ml-8">
            {items.map((t, i) => (
              <CarouselItem key={i} className="pl-4 sm:pl-8 md:basis-1/2 lg:basis-1/3">
                <blockquote className="h-full group relative border-4 border-foreground dark:border-white bg-card brutal-shadow p-8 flex flex-col transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-none">
                  <Quote className="size-10 text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors" />

                  <div className="flex-1 italic font-body text-foreground/80 leading-relaxed mb-8 relative z-10">
                    "{t.quote}"
                  </div>

                  <div className="flex items-center pt-6 border-t-2 border-foreground/10 mt-auto">
                    <div className="w-14 h-14 border-2 border-foreground dark:border-white bg-background p-1 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 overflow-hidden">
                      <cite className="not-italic block font-heading text-xl font-black uppercase tracking-tight text-foreground truncate">
                        {t.name}
                      </cite>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-2 border-foreground dark:border-white rounded-none brutal-shadow hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-2 border-foreground dark:border-white rounded-none brutal-shadow hover:bg-primary hover:text-primary-foreground transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
