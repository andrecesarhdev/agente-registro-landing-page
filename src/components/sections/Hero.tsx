import fotoPerfil from "../../assets/img.png";
import imagemHero from "../../assets/segurancadigital.avif";
import { getWhatsAppLink } from "../../utils/whatsapp";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imagemHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/90 z-0" />

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXTO PRINCIPAL */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Certificado Digital <span className="text-blue-500">rápido</span> e
            seguro 🔐
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Emissão e renovação por videoconferência em poucos minutos, com
            total segurança.
          </p>
          <a
            href={getWhatsAppLink(
              "Olá! Quero entender qual certificado digital é ideal para mim."
            )}
            target="_blank"
            className="inline-block mt-6 bg-gradient-to-r from-blue-600
            to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-3 rounded-xl
            font-medium transition" 
            >
            Falar no WhatsApp
          </a>
        </div>

        {/* FOTO + TEXTO EMBAIXO */}
        <div className="flex flex-col items-center text-center md:items-center md:translate-y-6">
          {/* FOTO */}
          <div className="relative group">
            <img
              src={fotoPerfil}
              alt="Agente de Registro"
              className="
                w-[260px] md:w-[340px] lg:w-[420px]
                object-contain
                drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]
                transition duration-500 ease-out
                group-hover:scale-105
              "
            />

            {/* GLOW */}
            <div className="absolute bottom-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
          </div>

          {/* TEXTO ABAIXO */}
          <div className="mt-8 space-y-2">
            <h3 className="text-xl font-semibold text-white tracking-wide">
              André César Henrique
            </h3>

            <p className="text-gray-300 text-sm">
              Agente de Registro homologado pela Consulti Brasil
            </p>

            <div className="mt-4 flex justify-center">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs">
                ✔ Atendimento seguro e autorizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
