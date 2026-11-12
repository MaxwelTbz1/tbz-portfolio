import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "TON_LIEN_LINKEDIN",
    Icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/MaxwelTbz1",
    Icon: FaGithub,
  },
  {
    name: "Gmail",
    href: "mailto:TON_EMAIL",
    Icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/TON_NUMERO",
    Icon: FaWhatsapp,
  },
  {
    name: "Discord",
    href: "TON_LIEN_DISCORD",
    Icon: FaDiscord,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {socialLinks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={name}
          title={name}
          className="text-[var(--muted)] transition-all duration-200 hover:-translate-y-1 hover:text-[#3987ff]"
        >
          <Icon size={20} />
        </a>
      ))}

      <a
        href="TON_LIEN_FRIYM"
        target="_blank"
        rel="noreferrer"
        aria-label="Friym"
        title="Friym"
        className="font-bold tracking-tight text-[var(--muted)] transition hover:-translate-y-1 hover:text-[#3987ff]"
      >
        <Image
          src="https://thesvg.org/icons/friym/default.svg"
          alt="Friym"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
}
