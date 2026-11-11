import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const technologies = [
  "Node.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Mongoose",
];

export default function SelectedWork() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel number="01" label="Selected work" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Du travail.
              <br />
              <span className="text-gray-500">Du concret.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-400">
            Quelques expériences et réalisations qui illustrent mon approche du
            développement logiciel.
          </p>
        </div>

        <article className="project-card overflow-hidden">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#101827] p-7 md:p-10">
              <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-blue-400/10" />
              <div className="absolute -right-5 -top-5 h-52 w-52 rounded-full border border-blue-400/10" />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-blue-300">
                  FEATURED PROJECT / 001
                </span>
                <span className="text-xs text-gray-500">FRIYM</span>
              </div>

              <div className="relative">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-300">
                  Social platform
                </p>
                <h3 className="text-6xl font-bold tracking-tighter text-white md:text-8xl">
                  friym<span className="text-blue-400">.</span>
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/15 px-3 py-1.5 text-[10px] text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <span className="font-mono text-xs text-blue-400">
                  BACKEND ENGINEERING
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  Développement du service social.
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Contribution au développement backend d'une plateforme
                  sociale, avec un travail orienté vers les contenus, les
                  interactions et les services applicatifs.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Une expérience pratique autour de la conception d'API, de la
                  structuration des données et de la maintenance de
                  fonctionnalités.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-gray-500">
                  Présentation synthétique. Les détails techniques internes ne
                  sont pas publiés.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="project-card p-7">
            <span className="font-mono text-[10px] text-gray-500">
              002 / PERSONAL PROJECTS
            </span>
            <h3 className="mt-5 text-xl font-medium">
              Expérimentations techniques
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-400">
              Des projets personnels autour des API, de Node.js, de TypeScript
              et des technologies web.
            </p>
            <p className="mt-6 text-xs text-gray-500">Sélection à compléter</p>
          </div>

          <Link
            href="#contact"
            className="project-card flex flex-col justify-between p-7"
          >
            <span className="font-mono text-[10px] text-gray-500">
              003 / NEXT COLLABORATION
            </span>
            <div>
              <h3 className="text-xl font-medium">
                Et si nous travaillions ensemble ?
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Je suis ouvert aux projets et collaborations techniques.
              </p>
            </div>
            <span className="flex items-center gap-2 text-xs text-blue-400">
              Parlons de votre projet <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
