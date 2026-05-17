import HeroDashboard from "./HeroDashboard";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">

      {/* TOP GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* LEFT GLOW */}
      <div className="absolute top-[300px] left-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* RIGHT GLOW */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full"></div>

      <div className="container-custom min-h-[90vh] grid lg:grid-cols-2 gap-16 lg:gap-20 items-center py-20 lg:py-24 relative z-10">

        {/* LEFT */}
        <div>

          {/* TAG */}
          <FadeUp>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8 shadow-sm">

              ENGENIX SYSTEM

            </div>

          </FadeUp>

          {/* TITLE */}
          <FadeUp delay={0.1}>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">

              Transformando
              <br />

              manutenção em

              <span className="text-gradient">
                {" "}inteligência operacional.
              </span>

            </h1>

          </FadeUp>

          {/* SUBTEXT */}
          <FadeUp delay={0.2}>

            <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">

              O Engenix System integra pessoas, processos e ativos para gerar performance, confiabilidade e decisões estratégicas na indústria.

            </p>

          </FadeUp>

          {/* BUTTONS */}
          <FadeUp delay={0.3}>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 hover-lift transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-600/20">

                Solicitar demonstração

              </button>

              <button className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-slate-700 backdrop-blur-sm">

                Conhecer plataforma

              </button>

            </div>

          </FadeUp>

          {/* MINI BENEFITS */}
          <FadeUp delay={0.4}>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">

              <div className="bg-white/70 backdrop-blur-sm border border-white rounded-3xl px-6 py-5 shadow-lg shadow-slate-100/50">

                <h3 className="text-3xl font-bold text-slate-900">
                  -32%
                </h3>

                <p className="text-slate-500 mt-1">
                  Redução de downtime
                </p>

              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white rounded-3xl px-6 py-5 shadow-lg shadow-slate-100/50">

                <h3 className="text-3xl font-bold text-slate-900">
                  +48%
                </h3>

                <p className="text-slate-500 mt-1">
                  Eficiência operacional
                </p>

              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white rounded-3xl px-6 py-5 shadow-lg shadow-slate-100/50">

                <h3 className="text-3xl font-bold text-slate-900">
                  100%
                </h3>

                <p className="text-slate-500 mt-1">
                  Controle de ativos
                </p>

              </div>

            </div>

          </FadeUp>

        </div>

        {/* RIGHT */}
        <div
          className="relative"
          style={{
            perspective: "2000px",
          }}
        >

          <HeroDashboard />

        </div>

      </div>

    </section>
  );
}