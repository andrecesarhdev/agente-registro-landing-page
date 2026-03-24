import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink("Olá! Quero emitir meu certificado digital agora.")}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        bg-green-500 hover:bg-green-600
        text-white
        px-5 py-3
        rounded-full
        shadow-lg hover:shadow-green-900/40
        transition-all duration-300
        flex items-center gap-2
        animate-pulse
        hover:scale-105
      "
    >
      <FaWhatsapp size={22} />

      <span className="hidden md:inline font-medium">Falar agora</span>
      <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
        online
      </span>
    </a>
  );
}
