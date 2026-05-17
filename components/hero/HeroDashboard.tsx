"use client";

import FadeUp from "@/components/animations/FadeUp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroDashboard() {
  return (
    <FadeUp delay={0.2}>

      <motion.div
        className="relative w-full"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          rotateX: 2,
          rotateY: -2,
        }}
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

        {/* Card */}
        <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-[28px] lg:rounded-[32px] p-4 lg:p-6 backdrop-blur-xl border border-white rounded-[32px] p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">

          {/* TOP */}
          <div className="flex items-center justify-between mb-8">

            <div>

              <h3 className="text-xl font-semibold text-slate-900">
                Visão geral
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                Performance operacional em tempo real
              </p>

            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">

            <Image
                src="/logo.png"
                alt="Engenix"
                width={65}
                height={65}
                className="object-contain"
            />

            </div>

          </div>

          {/* KPI GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-6">

            <div className="border border-slate-200 rounded-2xl p-4 bg-white/70 backdrop-blur-sm">

              <span className="text-sm text-slate-500">
                Disponibilidade
              </span>

              <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2">
                92%
              </h4>

            </div>

            <div className="border border-slate-200 rounded-2xl p-4 bg-white/70 backdrop-blur-sm">

              <span className="text-sm text-slate-500">
                Ordens de serviço
              </span>

              <h4 className="text-3xl font-bold text-slate-900 mt-2">
                1.842
              </h4>

            </div>

            <div className="border border-slate-200 rounded-2xl p-4 bg-white/70 backdrop-blur-sm">

              <span className="text-sm text-slate-500">
                Backlog
              </span>

              <h4 className="text-3xl font-bold text-slate-900 mt-2">
                247
              </h4>

            </div>

            <div className="border border-slate-200 rounded-2xl p-4 bg-white/70 backdrop-blur-sm">

              <span className="text-sm text-slate-500">
                MTTR
              </span>

              <h4 className="text-3xl font-bold text-slate-900 mt-2">
                3,2h
              </h4>

            </div>

          </div>

          {/* GRAPH */}
          <div className="border border-slate-200 rounded-3xl p-6 bg-white/60 backdrop-blur-sm">

            {/* GRAPH TOP */}
            <div className="flex items-center justify-between mb-8">

              <div>

                <h4 className="text-lg font-semibold text-slate-900">
                  Performance operacional
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  Indicadores atualizados em tempo real
                </p>

              </div>

              <div className="text-sm font-medium text-blue-600">
                Últimos 30 dias
              </div>

            </div>

            {/* BARS */}
            <div className="flex items-end justify-between gap-3 h-56">

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "35%" }}
                transition={{ duration: 0.6 }}
                className="w-full bg-blue-100 rounded-t-2xl"
              />

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "48%" }}
                transition={{ duration: 0.7 }}
                className="w-full bg-blue-200 rounded-t-2xl"
              />

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "60%" }}
                transition={{ duration: 0.8 }}
                className="w-full bg-blue-300 rounded-t-2xl"
              />

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "52%" }}
                transition={{ duration: 0.9 }}
                className="w-full bg-blue-400 rounded-t-2xl"
              />

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "75%" }}
                transition={{ duration: 1 }}
                className="w-full bg-blue-500 rounded-t-2xl"
              />

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "92%" }}
                transition={{ duration: 1.1 }}
                className="w-full bg-blue-600 rounded-t-2xl"
              />

            </div>

          </div>

        </div>

      </motion.div>

    </FadeUp>
  );
}