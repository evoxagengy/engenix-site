"use client";

import FadeUp from "@/components/animations/FadeUp";

import {
  ClipboardCheck,
  Boxes,
  Wrench,
  BarChart3,
  ShieldCheck,
  CalendarRange,
} from "lucide-react";

const modules = [
  {
    title: "PCM Inteligente",
    description:
      "Planejamento e controle da manutenção com visão estratégica.",

    icon: ClipboardCheck,
  },

  {
    title: "Gestão de Ativos",
    description:
      "Controle completo do ciclo de vida dos ativos industriais.",

    icon: Boxes,
  },

  {
    title: "Ordens de Serviço",
    description:
      "Execução, acompanhamento e histórico completo das intervenções.",

    icon: Wrench,
  },

  {
    title: "Indicadores em Tempo Real",
    description:
      "Dashboards inteligentes para decisões rápidas e assertivas.",

    icon: BarChart3,
  },

  {
    title: "Inspeções Digitais",
    description:
      "Checklists, conformidades e inspeções operacionais.",

    icon: ShieldCheck,
  },

  {
    title: "Planejamento Operacional",
    description:
      "Cronogramas, paradas, entressafra e alocação de recursos.",

    icon: CalendarRange,
  },
];

export default function Modules() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <FadeUp>
          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">
              Plataforma completa
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">

              Módulos que conectam sua
              operação do <span className="text-gradient">início ao fim.</span>

            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">

              Uma plataforma desenvolvida para integrar manutenção,
              ativos, indicadores e inteligência operacional em um único ecossistema.

            </p>

          </div>
        </FadeUp>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <FadeUp key={index} delay={index * 0.08}>

                <div className="group premium-card rounded-[32px] p-8">

                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-300">

                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-blue-600 group-hover:text-white transition-all duration-300"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">

                    {module.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 leading-relaxed text-lg">

                    {module.description}

                  </p>

                </div>

              </FadeUp>
            );
          })}

        </div>

      </div>

    </section>
  );
}