import SectionLabel from "@/components/ui/SectionLabel";

const expertise = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Développement de services backend, logique métier et structuration applicative.",
    skills: ["Node.js", "Express.js", "TypeScript"],
  },
  {
    number: "02",
    title: "API Engineering",
    description:
      "Conception, développement et intégration d'interfaces de programmation.",
    skills: ["REST APIs", "GraphQL", "Apollo Server"],
  },
  {
    number: "03",
    title: "Database Management",
    description:
      "Modélisation des données, relations, requêtes et gestion des compteurs.",
    skills: ["MongoDB", "Mongoose", "Prisma"],
  },
  {
    number: "04",
    title: "Frontend Development",
    description:
      "Création d'interfaces web modernes et intégration frontend/backend.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-spacing">
      <div className="container-main">
        <SectionLabel number="03" label="Technical expertise" />

        <div className="mt-6 mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Mon environnement
            <br />
            <span className="text-gray-500">technique.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-gray-400">
            Les technologies et domaines que j'utilise dans mon travail et mes
            expérimentations.
          </p>
        </div>

        <div className="border-t border-white/10">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.015] md:grid-cols-[70px_1fr_1fr]"
            >
              <span className="font-mono text-xs text-blue-400">
                {item.number}
              </span>

              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="h-fit border border-white/10 px-3 py-2 text-[10px] text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
