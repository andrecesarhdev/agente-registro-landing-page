import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "../../utils/whatsapp";

const passos = [
  {
    titulo: "Fale conosco",
    descricao:
      "Entre em contato pelo WhatsApp e informe qual certificado você precisa.",
  },
  {
    titulo: "Agendamento rápido",
    descricao:
      "Marcamos sua videoconferência no melhor horário para você, sem burocracia.",
  },
  {
    titulo: "Validação em minutos",
    descricao:
      "Uma chamada rápida (5 a 10 minutos) para validar sua identidade com segurança.",
  },
  {
    titulo: "Certificado liberado",
    descricao:
      "Após a validação, seu certificado é emitido e pronto para uso imediatamente.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-16 px-4 bg-[#020617]">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Emita seu certificado em poucos minutos,
          <span className="text-blue-500"> sem sair de casa</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Processo simples, rápido e com suporte completo em todas as etapas.
        </p>
      </div>

      {/* PASSOS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {passos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="
              bg-[#0B1220]
              border border-gray-800
              rounded-2xl p-6 text-center
              shadow-lg
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="flex justify-center">
              <CheckCircle className="text-blue-500" size={32} />
            </div>

            <h3 className="mt-4 font-semibold text-lg text-white">
              {index + 1}. {item.titulo}
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {item.descricao}
            </p>
          </motion.div>
        ))}
      </div>

      {/* DIFERENCIAIS */}
      <div className="mt-12 max-w-4xl mx-auto text-center">

        <p className="text-sm text-gray-400">
          Atendimento rápido • Sem burocracia • Suporte completo
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="bg-[#0B1220] border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
            ✔ 100% online
          </span>
          <span className="bg-[#0B1220] border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
            ✔ Sem sair de casa
          </span>
          <span className="bg-[#0B1220] border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
            ✔ Emissão rápida
          </span>
          <span className="bg-[#0B1220] border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
            ✔ Validade jurídica
          </span>
        </div>

        <a
          href={getWhatsAppLink(
            "Olá! Quero emitir meu certificado digital. Pode me ajudar?"
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
            shadow-lg hover:shadow-blue-900/40
            hover:scale-105
          "
        >
          👉 Quero emitir meu certificado
        </a>

        <p className="text-xs text-gray-500 mt-3">
          Atendimento imediato via WhatsApp
        </p>

      </div>
    </section>
  );
}