const beneficios = [
  {
    title: "Mais segurança",
    desc: "Proteja suas transações com validade jurídica e criptografia avançada.",
  },
  {
    title: "Agilidade nos processos",
    desc: "Assine documentos e acesse sistemas em segundos.",
  },
  {
    title: "100% online",
    desc: "Emita seu certificado sem sair de casa.",
  },
  {
    title: "Economia de tempo",
    desc: "Evite filas, deslocamentos e burocracia.",
  },
  {
    title: "Validade jurídica",
    desc: "Documentos com reconhecimento legal garantido.",
  },
  {
    title: "Validade jurídica",
    desc: "Documentos com reconhecimento legal garantido.",
  },
];

export function Beneficios() {
  return (
    <section className="py-16 px-4 bg-[#020617]">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Vantagens do <span className="text-blue-500">Certificado Digital</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Mais segurança, agilidade e praticidade para o seu dia a dia
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-gray-700 rounded-xl p-6 text-left hover:border-blue-500/40 transition"
            >
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}