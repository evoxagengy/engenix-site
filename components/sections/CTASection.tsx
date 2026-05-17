export default function CTASection() {
  return (
    <section className="section-spacing relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="relative overflow-hidden border border-white/10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl px-8 py-20 lg:px-20 text-center">

          {/* TAG */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-10">

            Modernize sua operação industrial

          </div>

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-5xl mx-auto">

            Transforme dados operacionais em decisões estratégicas.

          </h2>

          {/* TEXT */}
          <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">

            O Engenix System conecta manutenção, ativos e inteligência operacional em uma plataforma moderna criada para indústrias de alta performance.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-600/30">

              Solicitar demonstração

            </button>

            <button className="border border-white/10 hover:border-blue-400 transition text-white px-10 py-5 rounded-2xl font-semibold text-lg backdrop-blur-md">

              Falar com especialista

            </button>

          </div>

          {/* MINI STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div>
              <h3 className="text-4xl font-bold text-white">
                +48%
              </h3>

              <p className="text-slate-400 mt-2">
                Eficiência operacional
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                -32%
              </h3>

              <p className="text-slate-400 mt-2">
                Redução de downtime
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                100%
              </h3>

              <p className="text-slate-400 mt-2">
                Controle operacional
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                Total
              </h3>

              <p className="text-slate-400 mt-2">
                Digitalização industrial
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}