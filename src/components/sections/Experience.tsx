import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 — Présent",
    category: "EXPÉRIENCE PROFESSIONNELLE",
    role: "Backend Engineer",
    organization: "Friym",
    description:
      "Contribution au développement et à la maintenance du backend de la plateforme, avec une responsabilité particulière sur le service social.",
    responsibilities: [
      "Développement de fonctionnalités liées aux contenus et aux interactions.",
      "Conception et évolution d'API REST.",
      "Structuration et gestion des données avec MongoDB et Mongoose.",
      "Maintenance, correction et amélioration des services existants.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    period: "Parcours continu",
    category: "ÉVOLUTION TECHNIQUE",
    role: "Du frontend au backend",
    organization: "Développement web",
    description:
      "Une évolution progressive vers l'ingénierie backend, après une première expérience de développement frontend.",
    responsibilities: [
      "Développement d'interfaces web avec React et Next.js.",
      "Approfondissement de JavaScript et TypeScript.",
      "Apprentissage de l'architecture des applications et des échanges client-serveur.",
      "Approfondissement de GraphQL et des architectures API.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing border-y border-[var(--border)]"
    >
      <div className="container-main">
        <SectionLabel number="03" label="Professional journey" />

        <div className="mt-7 mb-16 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            L'expérience
            <br />
            <span className="text-[var(--muted)]">construit l'expertise.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Mon parcours dans le développement logiciel, les responsabilités
            assumées et les compétences développées à travers la pratique.
          </p>
        </div>

        <div className="relative ml-2 border-l border-[var(--border)] md:ml-0">
          {experiences.map((experience, index) => (
            <article
              key={experience.role}
              className="relative pb-16 pl-8 last:pb-0 md:pl-14"
            >
              {/* Timeline marker */}
              <span
                className={`absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full ${
                  index === 0
                    ? "bg-[#3987ff] ring-4 ring-[#3987ff]/10"
                    : "bg-[var(--muted)]"
                }`}
              />

              <div className="grid gap-8 md:grid-cols-[190px_1fr]">
                {/* Period */}
                <div>
                  <p className="font-mono text-xs text-[#3987ff]">
                    {experience.period}
                  </p>

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    {experience.category}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {experience.organization}
                      </p>
                    </div>

                    {index === 0 && (
                      <span className="border border-[#3987ff]/30 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#3987ff]">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]">
                    {experience.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em]">
                      Contributions
                    </p>

                    <ul className="space-y-3">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-xs leading-6 text-[var(--muted)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3987ff]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs text-[var(--muted)] transition hover:text-[#3987ff]"
          >
            Échanger sur mon parcours
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
