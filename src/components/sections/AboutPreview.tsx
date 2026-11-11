import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="section-spacing border-y border-white/[0.07] bg-[#0c0f15]"
    >
      <div className="container-main grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel number="02" label="About me" />

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Comprendre.
            <br />
            Concevoir.
            <br />
            <span className="accent-text">Construire.</span>
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-9 text-gray-200">
            Je suis Régis TCHIBOZO, développeur orienté backend, passionné par
            la conception de solutions logicielles structurées et utiles.
          </p>

          <p className="mt-6 text-sm leading-8 text-gray-400">
            Mon parcours dans le développement web m'a conduit progressivement
            du frontend vers le backend. Cette évolution m'a permis de mieux
            comprendre les différentes couches d'une application et la manière
            dont elles communiquent.
          </p>

          <p className="mt-5 text-sm leading-8 text-gray-400">
            Aujourd'hui, je concentre mon travail sur Node.js, TypeScript,
            Express.js, les API REST et la gestion des données avec MongoDB.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">
            <div>
              <span className="font-mono text-xs text-blue-400">01</span>
              <h3 className="mt-3 text-sm font-medium">Approche structurée</h3>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                Des solutions pensées pour être compréhensibles et maintenables.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-blue-400">02</span>
              <h3 className="mt-3 text-sm font-medium">
                Apprentissage continu
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                Une progression construite à travers la pratique et les projets
                réels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
