import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
    quote: "Hemanth, I’ve always genuinely admired the level of commitment and dedication you bring to everything you take on. Whether it's a small responsibility or a big challenge, you approach it with the same sincerity, focus, and drive—and that’s something really rare.Your consistency, attention to detail, and the way you take ownership of your work truly stand out. It’s not just about completing tasks—it’s about the energy, thought, and care you put into them that makes a difference. You’re someone who sets a quiet but powerful example for others to follow, just by doing what you do, the way you do it. Keep going strong—you’re doing amazing, and I’m sure there’s so much more ahead for you!", 
    name: "Sree Varsha", 
    role: "SSG - Student Principal 2025",
    image: "/images/Varsha.png"
  },
];

export default function Testimonials() {
  let carouselApi: CarouselApi | undefined;

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      const current = carouselApi.selectedScrollSnap();
      const next = current + 3;
      // embla clamps/wraps with loop enabled
      carouselApi.scrollTo(next);
    }, 15000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <section id="testimonials" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8 text-center">
        What People Say
      </h2>

      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={(api) => {
          carouselApi = api;
        }}
        className="relative"
      >
        <CarouselContent>
          {items.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <figure className="h-full rounded-xl border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={`${t.name} profile`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">"{t.quote}"</blockquote>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Previous testimonials" />
        <CarouselNext aria-label="Next testimonials" />
      </Carousel>
    </section>
  );
}
