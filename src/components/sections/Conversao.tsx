import { getWhatsAppLink } from "../../utils/whatsapp";

export function Conversao() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-blue-600/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Não corra o risco de ficar sem{" "}
          <span className="text-blue-400">Certificado Digital</span>
        </h2>

        <p className="text-gray-300 mt-4">
          Evite bloqueios, atrasos e problemas com a Receita Federal. Emita
          agora de forma rápida, segura e sem sair de casa.
        </p>

        {/* PROVA + QUEBRA DE OBJEÇÃO */}
        <p className="text-sm text-gray-400 mt-3">
          Atendimento simples, suporte completo e validação por
          videoconferência.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ 100% online
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ Atendimento rápido
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ Processo simples
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ Validade jurídica
          </span>
        </div>

        {/* CTA MELHORADO */}
        <a
          href={getWhatsAppLink(
            "Olá! Quero emitir meu certificado digital agora."
          )}
          target="_blank"
          className="
            inline-block mt-8
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:from-blue-500 hover:to-blue-400
            text-white px-8 py-4 rounded-xl
            font-semibold text-lg
            transition
            hover:scale-105
            shadow-lg
          "
        >
          👉 Emitir meu certificado agora
        </a>

        {/* MICRO PROVA SOCIAL */}
        <p className="text-xs text-gray-400 mt-4">
          Atendimento online para todo o Brasil, com suporte rápido via WhatsApp
          e validação por videoconferência.
        </p>
      </div>
    </section>
  );
}
