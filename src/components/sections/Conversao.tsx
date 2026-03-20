import { getWhatsAppLink } from "../../utils/whatsapp";

export function Conversao() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-blue-600/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Sua empresa não pode ficar nem um dia sem um{" "}
          <span className="text-blue-400">certificado digital</span>
        </h2>
        <p className="text-gray-300 mt-4">
          Evite bloqueios, atrasos e problemas com a Receita Federal. Emita
          agora de forma rápida, segura e 100% online.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ 100% online
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full">✔ Rápido</span>
          <span className="bg-white/5 px-3 py-1 rounded-full">✔ Seguro</span>
          <span className="bg-white/5 px-3 py-1 rounded-full">
            ✔ Validade jurídica
          </span>
        </div>
        <a
          href={getWhatsAppLink(
            "Olá! Vim pelo site e quero emitir meu certificado digital."
          )}
          target="_blank"
          className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-blue-500
          hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl
          font-semibold transition" 
          >
          Emitir meu certificado agora
        </a>
      </div>
    </section>
  );
}
