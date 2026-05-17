"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import {
  MonitorSmartphone,
  Wrench,
  BarChart3,
  Factory,
} from "lucide-react";

const services = [
  {
    title: "Software Engenix",

    description:
      "Plataforma CMMS/EAM moderna para gestão de manutenção, ativos, indicadores e inteligência operacional industrial.",

    icon: MonitorSmartphone,

    details: [
      "Gestão de manutenção CMMS/EAM",
      "Ordens de serviço inteligentes",
      "Dashboards operacionais",
      "Indicadores KPI em tempo real",
      "Gestão de ativos industriais",
      "Inspeções digitais",
    ],
  },

  {
    title: "Consultoria de Manutenção",

    description:
      "Estruturação de PCM, backlog, indicadores, confiabilidade e gestão estratégica da manutenção industrial.",

    icon: Wrench,

    details: [
      "Estruturação de PCM",
      "Gestão de backlog",
      "Indicadores industriais",
      "Análise de falhas",
      "Confiabilidade operacional",
      "Planejamento de manutenção",
    ],
  },

  {
    title: "Melhoria Contínua",

    description:
      "Projetos voltados para eficiência operacional, performance industrial, indicadores KPI e tomada de decisão orientada por dados.",

    icon: BarChart3,

    details: [
      "Lean Manufacturing",
      "Eficiência operacional",
      "Mapeamento de processos",
      "Gestão por indicadores",
      "Redução de perdas",
      "Performance industrial",
    ],
  },

  {
    title: "Soluções Agroindustriais",

    description:
      "Serviços especializados para usinas, entressafra, manutenção agrícola e operações agroindustriais de alta performance.",

    icon: Factory,

    details: [
      "Planejamento de entressafra",
      "Cronogramas industriais",
      "Gestão agrícola",
      "Usinas sucroalcooleiras",
      "Disponibilidade operacional",
      "Planejamento de recursos",
    ],
  },
];

export default function WhatWeOffer() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative section-spacing overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-[-200px] w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="max-w-4xl mb-24">

          <FadeUp>

            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

              O QUE OFERECEMOS

            </span>

          </FadeUp>

          <FadeUp delay={0.1}>

            <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">

              Soluções integradas para transformar operações industriais.

            </h2>

          </FadeUp>

          <FadeUp delay={0.2}>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">

              Tecnologia, engenharia e inteligência operacional conectadas para elevar a performance, confiabilidade e eficiência industrial.

            </p>

          </FadeUp>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <FadeUp
              key={index}
              delay={0.1 * index}
            >

                <div
                onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                }
                className="group premium-card rounded-[36px] p-10 h-full hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >

                {/* TOP */}
                <div className="flex items-start justify-between gap-6 mb-10">

                  <div className="flex-1">

                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600">
                      ENGENIX
                    </span>

                    <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">

                      {service.title}

                    </h3>

                  </div>

                    {/* ICON */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                    <service.icon
                        className="w-7 h-7 text-blue-600"
                        strokeWidth={2}
                    />

                    </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-600 text-lg leading-relaxed">

                  {service.description}

                </p>

            {/* DETAILS */}
            <AnimatePresence>

            {openIndex === index && (

                <motion.div
                initial={{
                    opacity: 0,
                    height: 0,
                }}
                animate={{
                    opacity: 1,
                    height: "auto",
                }}
                exit={{
                    opacity: 0,
                    height: 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="overflow-hidden"
                >

                <div className="mt-10 pt-8 border-t border-slate-200 space-y-4">

                    {service.details.map((detail, i) => (

                    <div
                        key={i}
                        className="flex items-center gap-3 text-slate-700"
                    >

                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>

                        <span>{detail}</span>

                    </div>

                    ))}

                </div>

                </motion.div>

            )}

            </AnimatePresence>

            {/* LINK */}
            <div className="mt-10 flex items-center gap-2 text-blue-600 font-semibold">

            {openIndex === index
                ? "Fechar"
                : "Saiba mais"}

            <span>
                {openIndex === index ? "−" : "+"}
            </span>

            </div>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
}