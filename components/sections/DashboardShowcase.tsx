import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section className="section-spacing bg-white overflow-hidden">

      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">
            Plataforma operacional
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 leading-tight">

            Inteligência operacional em tempo real.

          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">

            Dashboards modernos, indicadores estratégicos e controle operacional completo para ambientes industriais de alta performance.

          </p>

        </div>

        {/* SHOWCASE */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>

          {/* MAIN CONTAINER */}
          <div className="relative bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-[40px] p-6 lg:p-10 shadow-2xl shadow-slate-200/60 overflow-hidden">

            {/* TOP BAR */}
            <div className="flex items-center justify-between mb-10">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              <div className="text-sm text-slate-500 font-medium">
                Engenix System
              </div>

            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">


                {/* SIDEBAR */}
                <div className="bg-white border border-slate-200 rounded-[32px] p-6">

                <div className="mb-10">

                    <div className="w-12 h-12 flex items-center justify-center mb-5">

                    <Image
                        src="/logo.png"
                        alt="Engenix"
                        width={50}
                        height={50}
                        className="object-contain"
                    />

                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                    Dashboard
                    </h3>

                </div>

                <div className="space-y-4">

                  {[
                    "Visão Geral",
                    "PCM",
                    "Ordens de Serviço",
                    "Indicadores",
                    "Ativos",
                    "Inspeções",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className={`px-4 py-3 rounded-2xl transition ${
                        index === 0
                          ? "bg-blue-600 text-white"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* MAIN DASHBOARD */}
              <div className="space-y-6">

                {/* TOP KPIS */}
                <div className="grid md:grid-cols-3 gap-6">

                  <div className="bg-white border border-slate-200 rounded-[28px] p-6">

                    <span className="text-slate-500 text-sm">
                      Disponibilidade
                    </span>

                    <h3 className="text-5xl font-bold text-slate-900 mt-4">
                      92%
                    </h3>

                    <p className="text-emerald-600 font-semibold mt-3">
                      +8.2% este mês
                    </p>

                  </div>

                  <div className="bg-white border border-slate-200 rounded-[28px] p-6">

                    <span className="text-slate-500 text-sm">
                      MTBF
                    </span>

                    <h3 className="text-5xl font-bold text-slate-900 mt-4">
                      148h
                    </h3>

                    <p className="text-blue-600 font-semibold mt-3">
                      Performance estável
                    </p>

                  </div>

                  <div className="bg-white border border-slate-200 rounded-[28px] p-6">

                    <span className="text-slate-500 text-sm">
                      Backlog
                    </span>

                    <h3 className="text-5xl font-bold text-slate-900 mt-4">
                      247
                    </h3>

                    <p className="text-amber-600 font-semibold mt-3">
                      Monitoramento ativo
                    </p>

                  </div>

                </div>

                {/* CHART + ACTIVITY */}
                <div className="grid lg:grid-cols-[1fr_320px] gap-6">

                  {/* CHART */}
                  <div className="bg-white border border-slate-200 rounded-[32px] p-8">

                    <div className="flex items-center justify-between mb-10">

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          Performance operacional
                        </h3>

                        <p className="text-slate-500 mt-2">
                          Indicadores em tempo real
                        </p>
                      </div>

                      <div className="text-blue-600 font-semibold">
                        Últimos 30 dias
                      </div>

                    </div>

                    {/* BARS */}
                    <div className="flex items-end justify-between gap-3 h-72">

                      <div className="w-full bg-blue-100 rounded-t-2xl h-[35%]"></div>
                      <div className="w-full bg-blue-200 rounded-t-2xl h-[48%]"></div>
                      <div className="w-full bg-blue-300 rounded-t-2xl h-[55%]"></div>
                      <div className="w-full bg-blue-400 rounded-t-2xl h-[65%]"></div>
                      <div className="w-full bg-blue-500 rounded-t-2xl h-[82%]"></div>
                      <div className="w-full bg-blue-600 rounded-t-2xl h-[95%]"></div>

                    </div>

                  </div>

                  {/* ACTIVITY */}
                  <div className="bg-white border border-slate-200 rounded-[32px] p-6">

                    <h3 className="text-2xl font-bold text-slate-900 mb-8">
                      Atividades
                    </h3>

                    <div className="space-y-5">

                      {[
                        "OS #1842 concluída",
                        "Indicadores atualizados",
                        "PCM sincronizado",
                        "Inspeção operacional",
                      ].map((item, index) => (

                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl p-4"
                        >

                          <div className="flex items-center gap-3">

                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                            <span className="font-medium text-slate-800">
                              {item}
                            </span>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}