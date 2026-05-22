import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    title: "Introduction to Technology Apprenticeship Job Simulation",
    org: "Accenture UK - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/EzKFRQ2oEA87PPjsL_ovyvuqqNRQKBjNxbj_tPAnmtZKdrmc2mAvb_1750427943355_completion_certificate.pdf",
    logo: "/images/Assenture.png",
  },
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte Australia - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_tPAnmtZKdrmc2mAvb_1750341051404_completion_certificate.pdf",
    logo: "/images/Deloitte.png",
  },
  {
    title: "Technology Job Simulation",
    org: "Deloitte Australia - Forage",
    date: "Jun 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_tPAnmtZKdrmc2mAvb_1750515042124_completion_certificate.pdf",
    logo: "/images/Deloitte.png",
  },
  {
    title: "CSS Fundamentals",
    org: "LinkedIn Learning",
    date: "Feb 2025",
    link: "https://www.linkedin.com/learning/certificates/1c533b911785446f9e1a5f8d00f231eb481b12e535b3b5dcdec51850415e6b72?trk=share_certificate",
    logo: "/images/LinkedinL.png",
  },
  {
    title: "HTML Essential Training",
    org: "LinkedIn Learning",
    date: "Feb 2025",
    link: "https://lnkd.in/gTbFRHGr",
    logo: "/images/LinkedinL.png",
  },
  {
    title: "Introduction to Generative AI",
    org: "Google Cloud Skills Boost",
    date: "Oct 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/57aba701-53d4-4f7a-840d-5de145af9f57/badges/11800271?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    logo: "/images/Google.png",
  },
  {
    title: "AI Creators Internship",
    org: "Swecha Telangana",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1NjdDBT0gtG571gOpAYuKTD1a5_w5fMo6/view?usp=drive_link",
    logo: "/images/Swecha.png",
  },
  {
    title: "Programming in C# Certification",
    org: "Infosys Springboard",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/1_lL5ihbRnfmzOoGapfcZBy1J014nRzOH/view",
    logo: "/images/Infosyss.png",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    org: "Cisco",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/17eHvgGEUSU5hqMpq2hPo7Vnoc1fpaOf9/view?usp=drive_link",
    logo: "/images/Cisci.png",
  },
];

export default function Courses() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="courses" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
        Courses & Certifications
      </h2>

      {/* Course/Certification Cards */}
      <div
        ref={ref}
        data-inview={inView}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 group"
      >
        {items.map((c, i) => (
          <article
            key={i}
            className="rounded-xl border bg-card p-5 shadow-sm opacity-0 group-data-[inview=true]:opacity-100 group-data-[inview=true]:animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img
              src={c.logo}
              alt={`${c.org} logo`}
              loading="lazy"
              className="w-full aspect-video object-cover rounded-md mb-3"
            />
            <h3 className="font-heading text-lg text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground">
              {c.org} • {c.date}
            </p>
            <Button size="sm" className="mt-3 font-button hover-scale" asChild>
              <a href={c.link} target="_blank" rel="noopener">
                View
              </a>
            </Button>
          </article>
        ))}
      </div>

    </section>
  );
}
