import {
  Clock,
  FileCheck,
  Globe,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

const beneficios = [
  {
    title: "Evite filas e burocracia",
    desc: "Resolva tudo online, sem precisar ir até um atendimento presencial.",
    icon: Globe,
  },
  {
    title: "Assine documentos em minutos",
    desc: "Envie contratos e documentos com validade jurídica em poucos cliques.",
    icon: Zap,
  },
  {
    title: "Atendimento 100% online",
    desc: "Validação por videoconferência com suporte completo.",
    icon: MessageCircle,
  },
  {
    title: "Mais segurança nos seus dados",
    desc: "Proteção com criptografia avançada e validade jurídica garantida.",
    icon: ShieldCheck,
  },
  {
    title: "Ideal para empresas e profissionais",
    desc: "Acesse sistemas e emita notas fiscais com facilidade.",
    icon: FileCheck,
  },
  {
    title: "Economia de tempo",
    desc: "Evite deslocamentos e resolva tudo rapidamente.",
    icon: Clock,
  },
];

export function Beneficios() {
  return (
    <section className="py-16 px-4 bg-[#020617]">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Por que você precisa de um{" "}
          <span className="text-blue-500">Certificado Digital?</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Emita, assine documentos e resolva tudo online com rapidez e segurança.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#0f172a]
                  border border-gray-700
                  rounded-xl p-6 text-left
                  transition
                  hover:border-blue-500/40
                  hover:scale-[1.02]
                  hover:shadow-lg
                "
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-blue-500 w-5 h-5 shrink-0" />

                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}