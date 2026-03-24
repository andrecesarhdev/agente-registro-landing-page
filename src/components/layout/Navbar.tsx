import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logoactech.png";
import { getWhatsAppLink } from "../../utils/whatsapp";

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `block py-2 ${
      active === id
        ? "text-white font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-gray-800">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="ACTech Certificação Digital"
            className="h-10 md:h-12 lg:h-14 w-auto max-w-[140px] object-contain"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#inicio" className={linkClass("inicio")}>
            Início
          </a>
          <a href="#certificados" className={linkClass("certificados")}>
            Certificados
          </a>
          <a href="#como-funciona" className={linkClass("como-funciona")}>
            Como funciona
          </a>
          <a href="#duvidas" className={linkClass("duvidas")}>
            Dúvidas
          </a>

          {/* 🔥 CTA WHATSAPP */}
          <a
            href={getWhatsAppLink(
              "Olá! Quero emitir meu certificado digital."
            )}
            target="_blank"
            className="
              bg-green-500 hover:bg-green-600
              text-white px-4 py-2 rounded-lg
              text-sm font-medium
              transition
              hover:scale-105
            "
          >
            Falar agora
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-gray-800 px-4 pb-4 w-full">

          <a href="#inicio" onClick={handleClick} className={linkClass("inicio")}>
            Início
          </a>
          <a href="#certificados" onClick={handleClick} className={linkClass("certificados")}>
            Certificados
          </a>
          <a href="#como-funciona" onClick={handleClick} className={linkClass("como-funciona")}>
            Como funciona
          </a>
          <a href="#duvidas" onClick={handleClick} className={linkClass("duvidas")}>
            Dúvidas
          </a>

          {/* 🔥 CTA MOBILE */}
          <a
            href={getWhatsAppLink(
              "Olá! Quero emitir meu certificado digital."
            )}
            target="_blank"
            onClick={handleClick}
            className="
              block mt-4
              bg-green-500 text-white text-center
              py-2 rounded-lg font-medium
            "
          >
            Falar agora
          </a>
        </div>
      )}
    </nav>
  );
}