import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <a href="#inicio" className="font-semibold text-lg text-white">
          Consulti Certificados
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <a href="#inicio" className={linkClass("inicio")}>Início</a>
          <a href="#certificados" className={linkClass("certificados")}>Certificados</a>
          <a href="#como-funciona" className={linkClass("como-funciona")}>Como funciona</a>
          <a href="#duvidas" className={linkClass("duvidas")}>Dúvidas</a>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-gray-800 px-4 pb-4">
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
        </div>
      )}
    </nav>
  );
}