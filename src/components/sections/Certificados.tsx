import { getWhatsAppLink } from "../../utils/whatsapp";

const certificados = [
  {
    title: "e-CPF A1",
    description:
      "Ideal para pessoas físicas que precisam acessar serviços da Receita Federal e assinar documentos digitalmente.",
    benefits: [
      "Acesso ao e-CAC",
      "Assinatura digital com validade jurídica",
      "Declaração de imposto de renda",
    ],
    time: "Emissão em até 10 minutos",
    price: "R$ 150,00",
  },
  {
    title: "e-CNPJ A1",
    description:
      "Perfeito para empresas que precisam emitir notas fiscais e acessar sistemas governamentais.",
    benefits: [
      "Emissão de NF-e",
      "Acesso a sistemas fiscais",
      "Mais segurança jurídica",
    ],
    time: "Atendimento rápido por videoconferência",
    price: "R$ 200,00",
  },
];

export default function Certificados() {
  return (
    <section className="py-16 px-4 bg-[#020617]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
        Tipos de <span className="text-blue-500">Certificado</span>
      </h2>

      <div className="max-w-6xl mx-auto">
        <div
          className="
            grid gap-8
            justify-center
            [grid-template-columns:repeat(auto-fit,minmax(280px,300px))]
          "
        >
          {certificados.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#0f172a] rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* TOPO */}
              <div>
                <span className="text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Certificado Digital
                </span>

                <h3 className="text-xl font-semibold text-gray-100 mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="border-t border-gray-700 my-5"></div>

                <ul className="space-y-3 text-sm text-gray-200">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BASE */}
              <div className="mt-auto">
                <div className="mt-5 text-sm text-gray-400">⏱ {item.time}</div>

                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-emerald-400">
                      {item.price}
                    </p>
                    <span className="text-xs text-gray-400">à vista</span>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      "Olá! Vim pelo site e quero emitir meu certificado digital."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 bg-gradient-to-r from-blue-600
                    to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white
                    text-center py-3 rounded-xl font-semibold transition-all
                    duration-300 shadow-md hover:shadow-blue-900/30"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
