import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    company: "Infotact Solutions",
    role: "Associate L1 - Data Analyst Intern",
    period: "July 2025 – Present",
    logo: "/images/Infotact.png",
    points: [
      "Worked on a real-time dataset containing 2000–3000 records, performing data cleaning, transformation, and processing for in-depth analysis.",
      "Created pivot tables, KPIs, and interactive dashboards in Excel to derive actionable insights.",
      "Developed Power BI dashboards integrating processed Excel data for enhanced visualization and reporting.",
      "Learned and applied data storytelling techniques to effectively present dashboards and guide decision-making.",
      "Collaborated with the team to ensure dashboards were accurate, relevant, and aligned with business needs.",
    ],
    offer: "https://drive.google.com/file/d/1YM2n9vL5G33MSx5DF0SBXMe0Fei0Tybe/view?usp=sharing",
    certificate: "#",
  },
  {
    company: "Excelerate",
    role: "Data Analyst Trainee Intern",
    period: "July 2025 – Present",
    logo: "/images/Exe.png",
    points: [
      "Trained in core data analytics concepts, including data cleaning, visualization, and reporting.",
      "Worked on a real-time dataset from GlobalShala’s 'Superhero U' Facebook ad campaigns targeting students and educators/principals.",
      "Analyzed campaign performance metrics including impressions, clicks, reach, click-through rate (CTR), and cost per click (CPC) to determine audience effectiveness.",
      "Provided actionable insights to help the marketing team optimize ad strategies, allocate budgets efficiently, and maximize event participation.",
      "Identified India and Nepal as top regions with the highest engagement and campaign performance.",
    ],
    offer: "https://drive.google.com/file/d/12yabijnPMxYvnLI8jTtjMnvIM62UAbBM/view?usp=sharing",
    certificate: "#",
  },
  {
    company: "Elevvo Pathways",
    role: "Natural Language Processing Intern",
    period: "July 2025 – August 2025",
    logo: "/images/ele.png",
    points: [
      "Worked with Natural Language Processing (NLP) models to process and analyze diverse text datasets.",
      "Implemented preprocessing techniques including tokenization, stemming, lemmatization, and stop-word removal.",
      "Completed multiple hands-on NLP projects:",
      "  • Task 1: Sentiment Analysis on IMDb Product Reviews — cleaned and vectorized text data, trained models to predict sentiment polarity.",
      "  • Task 2: News Category Classification — applied TF-IDF and machine learning classifiers to categorize news headlines into predefined categories.",
      "  • Task 3: Fake News Detection — used NLP and classification models to distinguish between factual and misleading news articles.",
      "  • Task 4: Named Entity Recognition (NER) from News Articles — extracted people, organizations, and location entities using SpaCy/transformers.",
      "Explored real-world applications of NLP such as text classification, information extraction, and sentiment analysis to solve domain-specific problems.",
      "Documented work and maintained all projects in a public GitHub repository for transparency and collaboration.",
    ],
    offer: "https://drive.google.com/file/d/14-L-zowOROHOjBNoJowFhY-qf-iY8EBF/view?usp=sharing",
    certificate: "https://drive.google.com/file/d/13CljknxNSst-JBns1f5rqaBRyDO-q4XS/view?usp=sharing",
  },
  {
    company: "Edunet Foundation",
    role: "Intern – Shell x Edunet x AICTE (Skills4Future Program)",
    period: "July 2025 – August 2025",
    logo: "/images/edunet.png",
    points: [
      "Developed a machine learning model to forecast EV adoption for the next 1–5 years using Washington State registration data.",
      "Performed data cleaning, transformation, and time series feature engineering (lags, trends, rolling averages).",
      "Built and evaluated regression models (Random Forest) for county-level EV growth prediction.",
      "Designed and deployed an interactive Streamlit dashboard with trend visualizations, multi-county comparisons, and CSV export.",
      "Provided insights to support infrastructure planning and policy decisions.",
    ],
    offer: "https://drive.google.com/file/d/1EQJ0ZW3HzZ-mnF9f8fWNHmb4WnMYP-H0/view?usp=sharing",
    certificate: "https://drive.google.com/file/d/1Nvq2TJ72TIXuCWY6ee3kvUxvCyEuiU9o/view?usp=sharing",
  },
  {
    company: "ApexPlanet Software Pvt Ltd",
    role: "Web Development Intern",
    period: "July 2025 – August 2025",
    logo: "/images/Apexplanet.png",
    points: [
      "Completed a 45-day internship covering end-to-end HTML, CSS, and JavaScript development, from basics to advanced concepts.",
      "Task 1: Built a basic webpage with HTML structure, CSS styling, and JavaScript interactivity (alert button).",
      "Task 2: Developed a responsive contact form with CSS styling, JavaScript form validation, Flexbox/CSS Grid layouts, and a dynamic to-do list.",
      "Task 3: Applied advanced CSS styling and media queries, built an interactive quiz/image carousel, and integrated real-time API data using JavaScript.",
      "Task 4: Created a product listing page with filtering and sorting functionality, and implemented localStorage-based to-do/notes apps.",
      "Task 5: Developed and optimized a fully responsive personal portfolio web application, improving load speed through asset optimization and ensuring cross-browser compatibility.",
    ],
    offer: "https://drive.google.com/file/d/1897_1BAq8lJbHDbuRiAogQMM0slVNAh4/view?usp=sharing",
    certificate: "https://drive.google.com/file/d/1YBWgrEPoJvNq3JS81HhBFk7jPh1UYr7P/view?usp=sharing",
  },
  {
    company: "VaultofCodes",
    role: "AI & Prompt Engineering Intern",
    period: "June 2025 – July 2025",
    logo: "/images/VOC.png",
    points: [
      "Studied the behavior and underlying working principles of large language models (LLMs).",
      "Learned techniques for crafting clear, concise, and context-rich prompts to improve LLM output accuracy and relevance.",
      "Experimented with different prompt structures, styles, and constraints to optimize responses across various use cases.",
      "Applied prompt engineering best practices to build AI-powered chatbots and Q&A systems for test scenarios.",
      "Explored automation workflows integrating LLMs into real-world tasks.",
    ],
    offer: "https://drive.google.com/file/d/1B4h_XM1Fd64mCb6D1rW-zvgVSaaqKOt3/view?usp=sharing",
    certificate: "https://drive.google.com/file/d/1Hbzz_Jp0bnw-hgUb4nchma5Gs0Rm2Qbe/view?usp=sharing",
  },
  {
    company: "CodeAlpha",
    role: "Data Analytics Intern",
    period: "July 2025 – August 2025",
    logo: "/images/codealpha.png",
    points: [
      "Completed data analytics projects involving web scraping, exploratory data analysis (EDA), and data visualization.",
      "Used Python, BeautifulSoup, and Pandas to collect, clean, and prepare datasets for analysis.",
      "Performed EDA to identify trends, patterns, and anomalies, validating insights with statistical methods.",
      "Created clear and impactful visualizations using Matplotlib and Seaborn to support data-driven decision-making.",
      "Applied portfolio-focused best practices by publishing code on GitHub and presenting project outcomes.",
    ],
    offer: "https://drive.google.com/file/d/1-2jGsdQ2TIFu6avJpcSj2IidTUkZ-zw-/view?usp=sharing",
    certificate: "https://drive.google.com/file/d/1G5Wr2gx3jCtvTNTRe5xW4V-wsgr91aLm/view?usp=sharing",
  },
  {
    company: "HITAM",
    role: "Student HOD – Student Self Governance (SSG)",
    period: "May 2025 – Present",
    logo: "/images/SSG 2026.png",
    points: [
      "Lead the Student Self Governance (SSG) initiatives for the Computer Science Department, ensuring smooth coordination between students, faculty, and administration.",
      "Plan, organize, and oversee departmental events, workshops, orientation programs, and interactive sessions to enhance student engagement and learning experiences.",
      "Represent the student body in faculty meetings, actively voicing student concerns, suggestions, and innovative ideas for academic and extracurricular improvements.",
      "Design and implement structured feedback mechanisms to identify student needs and work with faculty to address them effectively.",
      "Coordinate cross-departmental collaborations, student-led projects, and peer-support programs to promote leadership, teamwork, and a positive campus culture.",
      "Mentor junior representatives and guide them in communication, event management, and problem-solving to ensure continuity of student leadership.",
    ],
    offer: "https://www.instagram.com/p/DJTPYe-zOVO/?utm_source=ig_web_copy_link&igsh=eHZoenQ0MWQwd2E2",
    certificate: "https://www.instagram.com/p/DJTPYe-zOVO/?utm_source=ig_web_copy_link&igsh=eHZoenQ0MWQwd2E2",
  },
  {
    company: "HITAM",
    role: "Student Coordinator – Student Self Governance (SSG)",
    period: "August 2024 – May 2025",
    logo: "/images/SSG2025.png",
    points: [
      "Planned and executed monthly ‘SSG Days’ with a structured agenda to address student needs and departmental goals.",
      "Organized events, workshops, and meetings in a well-coordinated manner to maximize participation and impact.",
      "Supported students in academic matters by facilitating study groups, resource sharing, and mentorship opportunities.",
      "Actively identified and resolved student issues by working closely with faculty and administration.",
      "Collected genuine student feedback and translated it into actionable improvements for the department’s academic and extracurricular environment.",
    ],
    offer: "https://www.instagram.com/p/C_uYtRSzULg/?utm_source=ig_web_copy_link&igsh=djg2dnpnZXR2ZWFn",
    certificate: "https://www.instagram.com/p/C_uYtRSzULg/?utm_source=ig_web_copy_link&igsh=djg2dnpnZXR2ZWFn",
  },
];

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="experience" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
        Experience
      </h2>
      <div ref={ref} className="space-y-6">
        {items.map((e, i) => (
          <article
            key={i}
            className={`rounded-xl border bg-card p-6 shadow-sm transition-all duration-800 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className="flex items-start gap-4">
              <img
                src={e.logo}
                alt={`${e.company} logo`}
                className="w-16 h-16 rounded-lg object-cover border bg-white p-2"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">
                      {e.role}
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      {e.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {e.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-button hover-scale"
                    asChild
                  >
                    <a href={e.offer} target="_blank" rel="noopener">
                      Offer Letter
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-button hover-scale"
                    asChild
                  >
                    <a href={e.certificate} target="_blank" rel="noopener">
                      Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
