import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../../utils/whatsapp";

export default function WhatsAppButton() {

  return (
    <a
      href={getWhatsAppLink(
        "Olá! Vim pelo site e quero emitir meu certificado digital."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition flex items-center gap-2"
    >
      <FaWhatsapp size={22} />
      <span className="hidden md:inline">Fale conosco</span>
    </a>
  );
}
