import { useInView } from "@/hooks/useInView";

type Skill = { name: string; level: number };
const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 65 },
      { name: "TypeScript", level: 50 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Front-End Development", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", level: 75 },
      { name: "MySQL", level: 65 },
      { name: "Spring Boot", level: 65 },
      { name: "DBMS", level: 60 },
      { name: "Django", level: 75 },
      { name: "MongoDB", level: 50 },
    ],
  },
  {
    title: "AI/ML & Data Analytics",
    skills: [
      { name: "Python", level: 80 },
      { name: "Data Analysis", level: 90 },
      { name: "Statistics", level: 70 },
      { name: "Tableau", level: 60 },
      { name: "Data Analytics", level: 75 },
      { name: "Power BI", level: 70 },
    ],
  },
  {
    title: "Leadership & Communication",
    skills: [
      { name: "Communication", level: 80 },
      { name: "Strategic Planning", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Student Leadership", level: 95 },
      { name: "Project Management", level: 90 },
      { name: "Public Speaking", level: 80 },
      { name: "Time Management", level: 85 },
      { name: "Team Management", level: 90 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 65 },
      { name: "Computer Networks", level: 50 },
      { name: "Database Management System", level: 45 },
      { name: "Operating System", level: 50 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <SkillGroup key={g.title} title={g.title} skills={g.skills} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <article
      ref={ref}
      data-inview={inView}
      className="rounded-xl border bg-card p-5 shadow-sm opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up"
    >
      <h3 className="font-heading text-xl text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((s) => (
          <li key={s.name}>
            <div className="flex justify-between text-sm">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-primary transition-[width] duration-1000 ease-in-out"
                style={{ width: inView ? `${s.level}%` : 0 }}
                aria-label={`${s.name} proficiency`}
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
