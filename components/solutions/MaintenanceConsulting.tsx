import FadeUp from "@/components/animations/FadeUp";
import Image from "next/image";

const services = [
  {
    title: "Software Engenix",
    description:
      "Plataforma CMMS/EAM moderna para gestão de manutenção, ativos, indicadores e inteligência operacional industrial.",

    icon: "/logo.png",
  },

  {
    title: "Consultoria de Manutenção",
    description:
      "Estruturação de PCM, backlog, indicadores, confiabilidade e gestão estratégica da manutenção industrial.",

    icon: "/pcm_inteligente.png",
  },

  {
    title: "Melhoria Contínua",
    description:
      "Projetos voltados para eficiência operacional, performance industrial, indicadores KPI e tomada de decisão orientada por dados.",

    icon: "/indicadores.png",
  },

  {
    title: "Soluções Agroindustriais",
    description:
      "Serviços especializados para usinas, entressafra, manutenção agrícola e operações agroindustriais de alta performance.",

    icon: "/planejamento.png",
  },
];

export default function MaintenanceConsulting() {
  return (
    <section className="section-spacing relative overflow-hidden bg-slate-50">

      {/* GLOW */}
      <div className="absolute left-[-200px] top-[200px] w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="max-w-4xl mb-24">

          <FadeUp>

            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

              ENGENIX SOLUTIONS

            </span>

          </FadeUp>

          <FadeUp delay={0.1}>

            <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">

              Consultoria estratégica para manutenção industrial.

            </h2>

          </FadeUp>

          <FadeUp delay={0.2}>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">

              Atuamos na estruturação operacional da manutenção através de engenharia, indicadores, confiabilidade e inteligência operacional aplicada ao ambiente industrial.

            </p>

          </FadeUp>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <FadeUp
              key={index}
              delay={0.1 * index}
            >

              <div className="group premium-card rounded-[32px] p-8 h-full hover:-translate-y-1 transition-all duration-300">

                {/* TOP */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">

                <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="object-contain"
                />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">

                  {service.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-slate-600 leading-relaxed text-lg">

                  {service.description}

                </p>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
}