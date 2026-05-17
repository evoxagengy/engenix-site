import Image from "next/image";

const solutions = [
  "Implantação",
  "Treinamentos",
  "PCM",
  "Gestão de Ativos",
  "Confiabilidade",
  "Engenharia de Manutenção",
];

export default function Solutions() {
  return (
    <section className="section-spacing bg-slate-50 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">
              ENGENIX SOLUTIONS
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900">

              Engenharia operacional aplicada à performance industrial.

            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">

              Da implantação à confiabilidade, a Engenix entrega metodologia, tecnologia e inteligência operacional para operações industriais modernas.

            </p>

            {/* FEATURES */}
            <div className="mt-12 grid sm:grid-cols-2 gap-4">

              {solutions.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 premium-card premium-border rounded-2xl px-5 py-4 shadow-sm"
                >

                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                  <span className="font-medium text-slate-800">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* MAIN CARD */}
            <div className="bg-white border border-slate-200 rounded-[36px] p-10 shadow-2xl shadow-slate-200/60">

              {/* TOP */}
           <div className="flex items-start justify-between gap-6 mb-10">

                <div className="flex-1">

                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600">
                    Diagnóstico operacional
                </span>

                <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 max-w-2xl">
                    Consultoria estratégica industrial
                </h2>

                </div>

            <div className="pt-10 shrink-0">

                <Image
                src="/logo.png"
                alt="Engenix"
                width={45}
                height={45}
                className="object-contain"
                />

            </div>

            </div>

              {/* ITEMS */}
              <div className="space-y-5">

                <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between">

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Planejamento de entressafra
                    </h4>

                    <p className="text-slate-500 mt-1">
                      Cronogramas e controle operacional
                    </p>
                  </div>

                  <span className="text-blue-600 font-semibold">
                    Ativo
                  </span>

                </div>

                <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between">

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Estruturação PCM
                    </h4>

                    <p className="text-slate-500 mt-1">
                      Padronização e indicadores
                    </p>
                  </div>

                  <span className="text-emerald-600 font-semibold">
                    Concluído
                  </span>

                </div>

                <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between">

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Gestão de ativos
                    </h4>

                    <p className="text-slate-500 mt-1">
                      Controle estratégico operacional
                    </p>
                  </div>

                  <span className="text-amber-600 font-semibold">
                    Em andamento
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}