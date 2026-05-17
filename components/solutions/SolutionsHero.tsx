import FadeUp from "@/components/animations/FadeUp";

export default function SolutionsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/agro1.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-slate-950/60"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-950/40 via-transparent to-transparent"></div>

      {/* CONTENT */}
      <div className="container-custom relative z-10 pt-32 pb-24">

        <div className="max-w-4xl">

          <FadeUp>

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-200 text-sm font-semibold tracking-[0.2em] uppercase">

              Soluções Engenix

            </span>

          </FadeUp>

          <FadeUp delay={0.1}>

            <h1 className="mt-10 text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white">

            Tecnologia que simplifica.
            
            <span className="text-blue-400">
                {" "}Inteligência que transforma.
            </span>

            </h1>

          </FadeUp>

          <FadeUp delay={0.2}>

            <p className="mt-8 text-lg lg:text-xl text-slate-200/90 leading-[1.9] max-w-2xl">

              Desenvolvemos soluções inteligentes para manutenção, confiabilidade, melhoria contínua e operações agroindustriais de alta performance.

            </p>

          </FadeUp>

          <FadeUp delay={0.3}>

            <div className="flex flex-col sm:flex-row gap-5 mt-14">

              <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-600/30">

                Solicitar diagnóstico

              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-white px-10 py-5 rounded-2xl font-semibold text-lg">

                Conhecer soluções

              </button>

            </div>

          </FadeUp>

          {/* STATS */}
          <FadeUp delay={0.4}>

            <div className="flex flex-wrap gap-14 mt-20">

              <div>

                <h3 className="text-5xl font-bold text-white">
                  +48%
                </h3>

                <p className="mt-2 text-slate-300 text-lg">
                  Eficiência operacional
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-white">
                  -32%
                </h3>

                <p className="mt-2 text-slate-300 text-lg">
                  Redução de downtime
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-white">
                  100%
                </h3>

                <p className="mt-2 text-slate-300 text-lg">
                  Controle operacional
                </p>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
}