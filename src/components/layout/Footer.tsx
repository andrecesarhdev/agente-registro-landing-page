import { getWhatsAppLink } from "../../utils/whatsapp";
import logo from "../../assets/logoactech.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-black border-t border-gray-800 pt-16 pb-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <a href="#inicio" className="flex justify-center">
          <img
            src={logo}
            alt="ACTech Certificação Digital"
            className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
        </a>

        <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
          Emita seu certificado digital e-CPF ou e-CNPJ de forma rápida, segura
          e 100% online. Atendimento direto via WhatsApp com suporte completo
          durante todo o processo.
        </p>

        <a
          href={getWhatsAppLink(
            "Olá! Quero emitir meu certificado digital agora."
          )}
          target="_blank"
          className="
            inline-block mt-8
            bg-green-500 hover:bg-green-600
            text-white px-6 py-3 rounded-xl
            font-medium
            transition
            hover:scale-105
          "
        >
          👉 Falar no WhatsApp
        </a>

        <div className="border-t border-gray-800 mt-10 pt-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} ACTech Certificação Digital • Todos os
            direitos reservados
          </p>

          <p className="text-gray-700 text-xs mt-1">
            Desenvolvido por André César Henrique
          </p>
        </div>
      </div>
    </footer>
  );
}
