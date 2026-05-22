import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="about" className="container mx-auto py-20">
      <div
        ref={ref}
        data-inview={inView}
        className="grid md:grid-cols-2 gap-8 items-center opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up"
      >
        {/* Profile Image */}
        <img
          src="/images/hem1.png" // Replace with your actual image path in public/images
          alt="Pangoth Hemanth Nayak profile"
          loading="lazy"
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02] shadow"
        />

        {/* About Me Content */}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground">
            I’m <strong>Pangoth Hemanth Nayak</strong> — a pre-final year B.Tech
            student in CSE (Data Science) at HITAM, currently serving as the{" "}
            <strong>Student HOD</strong> of my department. I’m passionate about
            leveraging technology to solve real-world problems and representing
            student voices with purpose, empathy, and impact.
          </p>
          <p className="mt-4 text-muted-foreground">
            I’ve gained hands-on experience through internships in{" "}
            <strong>Web Development</strong>,{" "}
            <strong>AI Prompt Engineering</strong>, and{" "}
            <strong>Data Analytics</strong>, working on both full-stack and
            data-focused projects. My toolkit includes{" "}
            <strong>HTML, CSS, JavaScript, Python, and Java</strong>, and I’m
            currently deepening my skills in <strong>DSA with Java</strong> to
            strengthen my development foundation.
          </p>
          <p className="mt-4 text-muted-foreground">
            I’m also exploring <strong>Machine Learning</strong>,{" "}
            <strong>Data Visualization</strong>, and <strong>SQL</strong> with
            tools like Tableau and Excel. While I haven’t mastered MERN or Cloud
            yet, they’re high on my 2025 learning goals.
          </p>
          <p className="mt-4 text-muted-foreground">
            Beyond tech, I write as <strong>@hem_writess</strong>, transforming
            raw emotions and lived experiences into poetry that resonates on a
            deeply personal level. I’m someone who learns out loud, leads with
            empathy, and codes with curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
