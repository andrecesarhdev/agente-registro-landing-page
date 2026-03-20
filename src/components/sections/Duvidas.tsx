import { useState } from "react";
import { getWhatsAppLink } from "../../utils/whatsapp";

const duvidas = [
  {
    question: "O que é um Certificado Digital?",
    answer:
      "É uma identidade eletrônica que permite assinar documentos, acessar sistemas do governo e realizar transações com validade jurídica e segurança.",
  },
  {
    question: "Qual a diferença entre e-CPF e e-CNPJ?",
    answer:
      "O e-CPF é utilizado por pessoas físicas para acessar serviços como o e-CAC e assinar documentos. Já o e-CNPJ é voltado para empresas, permitindo emissão de notas fiscais e acesso a sistemas fiscais.",
  },
  {
    question: "Qual a diferença entre A1 e A3?",
    answer:
      "O certificado A1 é digital (arquivo instalado no computador) com validade de 1 ano. Já o A3 é armazenado em token ou cartão físico, com validade maior e mais segurança.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Documento oficial com foto (RG ou CNH), CPF e, no caso de empresas, documentos da empresa como contrato social.",
  },
  {
    question: "O certificado é válido em todo o Brasil?",
    answer:
      "Sim. O certificado digital tem validade jurídica em todo o território nacional.",
  },
  {
    question: "Posso emitir totalmente online?",
    answer:
      "Sim! Todo o processo pode ser feito por videoconferência de forma rápida e segura.",
  },
];
export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#020617]">
      <div className="max-w-4xl mx-auto">
        {/* TÍTULO */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          Tem dúvidas sobre{" "}
          <span className="text-blue-500">Certificado Digital</span>?
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Veja as respostas para as dúvidas mais comuns
        </p>

        {/* FAQ LISTA */}
        <div className="mt-10 space-y-4">
          {duvidas.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* PERGUNTA */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>

                <span
                  className={`text-blue-500 text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* RESPOSTA */}
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
            "Olá! Vim pelo site e tenho duvidas sobre como emitir meu certificado digital."
          )}
          target="_blank"
          className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-blue-500
          hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl
          font-semibold transition" 
          >
          Se ainda tiver dúvidas, estamos a disposição para atende-lo!
        </a>
        </div>
      </div>
    </section>
  );
}
