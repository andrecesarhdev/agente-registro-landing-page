import { useState } from "react";
import { getWhatsAppLink } from "../../utils/whatsapp";

const duvidas = [
  {
    question: "O certificado digital A1 é difícil de usar?",
    answer:
      "Não! O certificado A1 é um arquivo simples instalado no seu computador. Após a emissão, você já pode usar imediatamente para acessar sistemas e assinar documentos.",
  },
  {
    question: "Quanto tempo leva para emitir o certificado?",
    answer:
      "A emissão é rápida. Após a validação por videoconferência, seu certificado pode ser liberado em poucos minutos.",
  },
  {
    question: "Preciso ir presencialmente?",
    answer:
      "Não. Todo o processo é feito 100% online por videoconferência, com segurança e validade jurídica.",
  },
  {
    question: "Qual escolher: e-CPF A1 ou e-CNPJ A1?",
    answer:
      "O e-CPF A1 é ideal para pessoa física (imposto de renda, assinaturas, e-CAC). Já o e-CNPJ A1 é voltado para empresas (emissão de notas fiscais e acesso a sistemas fiscais).",
  },
  {
    question: "O certificado A1 é seguro?",
    answer:
      "Sim! Ele utiliza criptografia avançada e possui validade jurídica garantida em todo o Brasil.",
  },
  {
    question: "Vou ter suporte durante o processo?",
    answer:
      "Sim! Você recebe suporte completo desde o primeiro contato até a emissão e instalação do certificado.",
  },
];

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#020617]">
      <div className="max-w-4xl mx-auto">
        
        {/* TÍTULO */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          Ainda com dúvidas sobre{" "}
          <span className="text-blue-500">e-CPF ou e-CNPJ A1</span>?
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Veja como é simples emitir seu certificado digital
        </p>

        {/* FAQ */}
        <div className="mt-10 space-y-4">
          {duvidas.map((faq, index) => (
            <div
              key={index}
              className="
                bg-[#0f172a]
                border border-gray-700
                rounded-xl overflow-hidden
                transition-all duration-300
                hover:border-blue-500/30
              "
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="text-white font-medium">
                  {faq.question}
                </span>

                <span
                  className={`text-blue-500 text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`px-5 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-10">
          <a
            href={getWhatsAppLink(
              "Olá! Tenho dúvidas e quero emitir meu certificado digital."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-6
              bg-gradient-to-r from-blue-600 to-blue-500
              hover:from-blue-500 hover:to-blue-400
              text-white px-8 py-4 rounded-xl
              font-semibold text-lg
              transition-all duration-300
              hover:scale-105
              shadow-lg hover:shadow-blue-900/40
            "
          >
            👉 Tirar dúvidas e emitir agora
          </a>

          <p className="text-xs text-gray-500 mt-3">
            Atendimento rápido via WhatsApp
          </p>
        </div>

      </div>
    </section>
  );
}