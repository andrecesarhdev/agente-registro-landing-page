import fotoPerfil from "../../assets/img.png";
import imagemHero from "../../assets/segurancadigital.avif";
import { getWhatsAppLink } from "../../utils/whatsapp";
import logo from "../../assets/icp.png";
import consultiLogo from "../../assets/Consulti-color-white-H.png";

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
            Emita seu Certificado Digital online,
            <span className="text-blue-500">
              {" "}
              em qualquer lugar do Brasil
            </span>{" "}
            🔐
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Atendimento 100% online com validação por videoconferência. Rápido,
            seguro e sem burocracia.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Atendimento para todo o Brasil • Base em Recife
          </p>
          <a
            href={getWhatsAppLink(
              "Olá! Quero emitir meu certificado digital. Pode me ajudar?"
            )}
            target="_blank"
            className="inline-block mt-6 bg-gradient-to-r from-blue-600
            to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-3 rounded-xl
            font-medium transition"
          >
            Emitir meu certificado agora
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
            <h3 className="text-xl font-semibold text-white tracking-wide flex items-center justify-center gap-2">
              André César Henrique
              <a
                href="https://www.gov.br/iti/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar site oficial"
              >
                <img
                  src={logo}
                  alt="ICP Brasil"
                  className="h-5 w-auto opacity-70 hover:opacity-100 transition"
                />
              </a>
            </h3>
            <p className="text-gray-300 text-sm flex items-center justify-center gap-2 flex-wrap">
              Agente de Registro homologado pela
              <a
                href="https://consultibrasil.com.br"
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar site oficial"
              >
                <img
                  src={consultiLogo}
                  alt="Consulti Brasil"
                  className="h-5 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </a>
            </p>

            <p className="mt-3 text-sm text-gray-400">
              +100 certificados emitidos com sucesso
            </p>

            <div className="mt-4 flex justify-center">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs">
                ✔ Agente autorizado • Atendimento 100% online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
