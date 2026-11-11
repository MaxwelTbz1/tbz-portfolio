import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative grid-lines overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="container-main relative">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="eyebrow">
            <span>Backend Engineer</span>
            <span className="text-gray-700">/</span>
            <span>Available for opportunities</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={13} className="accent-text" />
            Bénin, Afrique de l'Ouest
          </div>
        </div>

        <div className="relative">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-500">
            Bonjour, je suis
          </p>

          <h1 className="hero-title">
            RÉGIS
            <br />
            <span className="outline-text">TCHIBOZO.</span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="max-w-md text-xl font-medium leading-relaxed text-gray-200 md:text-2xl">
                Je transforme des idées en{" "}
                <span className="accent-text">systèmes backend</span> fiables et
                bien structurés.
              </p>
            </div>

            <div className="flex flex-col items-start justify-between gap-7">
              <p className="max-w-md text-sm leading-7 text-gray-400">
                Développeur backend spécialisé dans l'écosystème Node.js et
                TypeScript. Je travaille sur la conception d'API, la gestion des
                données et le développement de services applicatifs.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-[#3987ff] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-blue-600"
                >
                  Explorer mes projets
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  href="#about"
                  className="inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-xs text-gray-300 transition hover:border-white/40"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <Link
            href="#about"
            aria-label="Défiler vers la section à propos"
            className="hidden text-gray-500 transition hover:text-[#3987ff] sm:block"
          >
            <ArrowDown size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
