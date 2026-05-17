import FadeUp from "@/components/animations/FadeUp";
import Image from "next/image";

export default function SystemSolution() {
  return (
    <section className="section-spacing relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 right-[-200px] w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* TOP */}
        <div className="max-w-3xl mb-24">

          <FadeUp>

            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

              ENGENIX SYSTEM

            </span>

          </FadeUp>

          <FadeUp delay={0.1}>

            <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">

              Plataforma CMMS/EAM desenvolvida para operações industriais modernas.

            </h2>

          </FadeUp>

          <FadeUp delay={0.2}>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">

              Centralize manutenção, ativos, indicadores, inspeções e inteligência operacional em uma plataforma enterprise preparada para operações de alta performance.

            </p>

          </FadeUp>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">

          {/* LEFT MOCKUP */}
          <FadeUp delay={0.3}>

            <div className="premium-card rounded-[40px] p-8 overflow-hidden">

              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-10">

                <div>

                  <span className="text-sm text-slate-500">
                    Dashboard operacional
                  </span>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    Gestão inteligente da manutenção
                  </h3>

                </div>

                <div className="w-12 h-12 flex items-center justify-center">

                  <Image
                    src="/logo.png"
                    alt="Engenix"
                    width={36}
                    height={36}
                    className="object-contain"
                  />

                </div>

              </div>

              {/* KPI GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

                <div className="rounded-3xl bg-blue-50 p-5">

                  <span className="text-slate-500 text-sm">
                    Disponibilidade
                  </span>

                  <h4 className="mt-3 text-3xl font-bold text-slate-900">
                    92%
                  </h4>

                </div>

                <div className="rounded-3xl bg-slate-50 p-5">

                  <span className="text-slate-500 text-sm">
                    Backlog
                  </span>

                  <h4 className="mt-3 text-3xl font-bold text-slate-900">
                    4,2 sem
                  </h4>

                </div>

                <div className="rounded-3xl bg-slate-50 p-5">

                  <span className="text-slate-500 text-sm">
                    MTBF
                  </span>

                  <h4 className="mt-3 text-3xl font-bold text-slate-900">
                    148h
                  </h4>

                </div>

                <div className="rounded-3xl bg-blue-600 p-5 text-white">

                  <span className="text-blue-100 text-sm">
                    Performance
                  </span>

                  <h4 className="mt-3 text-3xl font-bold">
                    +55%
                  </h4>

                </div>

              </div>

              {/* CHART */}
              <div className="rounded-[32px] border border-slate-200 p-8">

                <div className="flex items-end justify-between gap-3 h-64">

                  <div className="w-full h-[30%] bg-blue-100 rounded-t-2xl"></div>
                  <div className="w-full h-[42%] bg-blue-200 rounded-t-2xl"></div>
                  <div className="w-full h-[58%] bg-blue-300 rounded-t-2xl"></div>
                  <div className="w-full h-[50%] bg-blue-400 rounded-t-2xl"></div>
                  <div className="w-full h-[72%] bg-blue-500 rounded-t-2xl"></div>
                  <div className="w-full h-[92%] bg-blue-600 rounded-t-2xl"></div>

                </div>

              </div>

            </div>

          </FadeUp>

          {/* RIGHT */}
          <div className="space-y-6">

            {[
              {
                title: "PCM Inteligente",
                text: "Planejamento e controle completo da manutenção industrial.",
              },

              {
                title: "Gestão de Ativos",
                text: "Controle do ciclo de vida dos ativos e equipamentos críticos.",
              },

              {
                title: "Indicadores Operacionais",
                text: "KPIs estratégicos para decisões rápidas e assertivas.",
              },

              {
                title: "Ordens de Serviço",
                text: "Execução, histórico e rastreabilidade operacional.",
              },
            ].map((item, index) => (

              <FadeUp key={index} delay={0.15 * index}>

                <div className="premium-card rounded-[28px] p-7">

                  <h3 className="text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed text-lg">

                    {item.text}

                  </p>

                </div>

              </FadeUp>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}