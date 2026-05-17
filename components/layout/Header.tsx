"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >

        <div
          className={`container-custom flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >

          {/* LOGO */}
        <div className="flex items-center">

        <Image
        src="/logo-engenix.png"
        alt="Engenix"
        width={260}
        height={80}
        priority
        className="w-auto h-16 object-contain scale-[1.8]"
        />

        </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">

            {[
              "Downloads",
              "Soluções",
              "Segmentos",
              "Empresa",
              "Recursos",
            ].map((item, index) => (

              <a
                key={index}
                href="#"
                className="relative text-slate-700 hover:text-blue-600 transition font-medium group"
              >

                {item}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ))}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <button className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover-lift transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-600/20">

              Solicitar demonstração

              <span className="text-lg">→</span>

            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1.5"
            >

              <span className="w-6 h-[2px] bg-slate-900 rounded-full"></span>
              <span className="w-6 h-[2px] bg-slate-900 rounded-full"></span>
              <span className="w-6 h-[2px] bg-slate-900 rounded-full"></span>

            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <>

            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed top-0 right-0 h-screen w-[320px] bg-white z-50 shadow-2xl border-l border-slate-200 p-8"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-12">

                <div className="flex items-center">

                <Image
                    src="/logo-engenix.png"
                    alt="Engenix"
                    width={170}
                    height={44}
                    className="w-auto h-9 object-contain"
                />

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-slate-700 hover:text-blue-600 transition"
                >
                  ×
                </button>

              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">

                {[
                  "Engenix System",
                  "Soluções",
                  "Segmentos",
                  "Empresa",
                  "Recursos",
                ].map((item, index) => (

                  <a
                    key={index}
                    href="#"
                    className="text-lg font-medium text-slate-700 hover:text-blue-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>

                ))}

              </div>

              {/* CTA */}
              <button className="mt-12 w-full bg-blue-600 hover:bg-blue-700 hover-lift transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-blue-600/20">

                Solicitar demonstração

              </button>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </>
  );
}