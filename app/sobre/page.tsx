import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function SobrePage() {
  return (
    <main className="gradient-mesh overflow-hidden">

      <Header />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 z-0">

        <Image
          src="/agro4.png"
          alt="Agro"
          fill
          priority
          className="object-cover object-center opacity-[0.68] scale-[1.02]"
        />

      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/55 to-white/10"></div>

      </div>

        {/* GLOW */}
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="container-custom relative z-20 pt-32 pb-24">

          <div className="relative max-w-5xl min-h-[650px] flex flex-col justify-center">

            <FadeUp>

              <span className="relative z-10 inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-[0.2em] uppercase">

                Sobre a Engenix

              </span>

            </FadeUp>

            <FadeUp delay={0.1}>

            <h1 className="relative z-10 mt-10 text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight text-slate-900">

              Tecnologia,
                engenharia e
              <span className="block text-blue-600">
                inteligência operacional
              </span>

              <span className="block">
                para a indústria moderna.
              </span>

            </h1>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="relative z-10 mt-8 text-xl text-slate-600 leading-[1.9] max-w-3xl">

                A Engenix nasceu com o propósito de transformar operações industriais através de tecnologia, gestão estratégica da manutenção e soluções voltadas para alta performance operacional.

              </p>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="section-spacing">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div className="relative">

              <FadeUp>

                <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

                  NOSSA VISÃO

                </span>

              </FadeUp>

              <FadeUp delay={0.1}>

                <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-[1] tracking-tight text-slate-900">

                  Simplificar operações complexas através da inteligência operacional.

                </h2>

              </FadeUp>

              <FadeUp delay={0.2}>

                <p className="mt-8 text-lg text-slate-600 leading-[1.9]">

                  Desenvolvemos soluções voltadas para manutenção industrial, confiabilidade, melhoria contínua e operações agroindustriais, conectando engenharia, tecnologia e gestão estratégica em uma única visão operacional.

                </p>

              </FadeUp>

            </div>

            {/* RIGHT */}
            <FadeUp delay={0.3}>

              <div className="premium-card rounded-[40px] p-10">

                <div className="space-y-10">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">

                      Missão

                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">

                      Transformar dados operacionais em decisões inteligentes para aumentar performance, confiabilidade e eficiência industrial.

                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">

                      Visão

                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">

                      Ser referência em soluções industriais inteligentes para manutenção, engenharia e operações agroindustriais.

                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">

                      Valores

                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">

                      Tecnologia, inovação, confiabilidade, excelência operacional e compromisso com resultados reais.

                    </p>

                  </div>

                </div>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* ESSÊNCIA DA MARCA */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

        {/* BLUE GLOW */}
        <div className="absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

        {/* SECOND GLOW */}
        <div className="absolute bottom-[-300px] left-[-300px] w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full"></div>

        {/* LINE */}
        <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>

        <div className="container-custom">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-start">

            {/* LEFT */}
            <div className="relative">

              <FadeUp>

                <span className="relative z-10 text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">

                  Essência da marca

                </span>

              </FadeUp>

              <FadeUp delay={0.1}>

                <h2 className="relative z-10 mt-8 text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-slate-900">

                  A identidade da

                  <span className="block text-blue-600">
                    transformação industrial.
                  </span>

                </h2>

              </FadeUp>

              <FadeUp delay={0.2}>

                <div className="relative z-10 w-24 h-1 bg-blue-600 rounded-full mt-10"></div>

              </FadeUp>

              <FadeUp delay={0.3}>

                <div className="relative z-10 mt-14 space-y-8">

                  <p className="text-xl leading-[1.9] text-slate-600">

                    A Engenix nasceu com o propósito de transformar operações industriais através da tecnologia, engenharia e inteligência operacional.

                  </p>

                  <p className="text-xl leading-[1.9] text-slate-600">

                    Nossa identidade foi construída para refletir confiabilidade, inovação e performance, conectando pessoas, processos e ativos para gerar resultados reais.

                  </p>

                </div>

              </FadeUp>

            </div>

            {/* RIGHT */}
            <FadeUp delay={0.4}>

              <div className="premium-card bg-white/80 backdrop-blur-xl border border-white/60 rounded-[40px] p-12 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">

                <div className="space-y-14">

                  {/* MISSÃO */}
                  <div>

                    <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

                      Missão

                    </span>

                    <p className="mt-5 text-lg text-slate-600 leading-[1.9]">

                      Transformar operações industriais através da tecnologia, simplificando a gestão e aumentando a eficiência operacional.

                    </p>

                  </div>

                  {/* DIVIDER */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                  {/* VISÃO */}
                  <div>

                    <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

                      Visão

                    </span>

                    <p className="mt-5 text-lg text-slate-600 leading-[1.9]">

                      Ser referência em inteligência operacional industrial, impulsionando empresas a alcançarem previsibilidade, eficiência e vantagem competitiva.

                    </p>

                  </div>

                  {/* DIVIDER */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                  {/* VALORES */}
                  <div>

                    <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

                      Valores

                    </span>

                    <div className="grid grid-cols-2 gap-8 mt-8">

                      {[
                        "Inovação",
                        "Confiabilidade",
                        "Eficiência",
                        "Performance",
                        "Rastreabilidade",
                        "Excelência operacional",
                      ].map((item, index) => (

                        <div
                          key={index}
                          className="flex items-center gap-3"
                        >

                          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)]"></div>

                          <span className="text-slate-700 font-medium">
                            {item}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}