import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0c0f15]">
      <div className="container-main py-16 md:py-20">
        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          {/* Contact section */}
          <div>
            <p className="eyebrow">LET'S CONNECT</p>

            <h2 className="mt-7 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Une idée ?
              <br />
              <span className="accent-text">Parlons-en.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Vous avez un projet, une opportunité ou souhaitez simplement
              échanger autour du développement ? Je serais ravi d'en discuter
              avec vous.
            </p>

            <a
              href="mailto:TON_EMAIL_ICI"
              className="mt-8 inline-flex items-center gap-3 border border-[#3987ff] px-6 py-4 text-xs font-medium text-white transition-all duration-300 hover:bg-[#3987ff]"
            >
              Envoyer un message
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-5 md:pb-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Retrouvez-moi sur
            </p>

            <SocialLinks />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-widest text-gray-600 sm:flex-row md:mt-24">
          <p>
            © {new Date().getFullYear()} Régis TCHIBOZO. Tous droits réservés.
          </p>

          <p>Designed with intention. Built with code.</p>
        </div>
      </div>
    </footer>
  );
}
