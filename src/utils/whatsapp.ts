export const WHATSAPP_NUMBER = "5581995171280"; 

export const DEFAULT_MESSAGE =
  "Olá! Gostaria de mais informações sobre certificado digital.";

export function getWhatsAppLink(message?: string) {
  const text = message || DEFAULT_MESSAGE;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}