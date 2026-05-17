import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/animations/FadeUp";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="gradient-mesh overflow-hidden">

      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="container-custom relative z-10">

          <div className="max-w-4xl">

            <FadeUp>

              <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-[0.2em] uppercase">

                Contato

              </span>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h1 className="mt-10 text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight text-slate-900">

                Vamos transformar

                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">

                  sua operação.

                </span>

              </h1>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="mt-10 text-xl text-slate-600 leading-[1.9] max-w-3xl">

                Entre em contato com a Engenix para conhecer nossas soluções em tecnologia industrial, manutenção, confiabilidade e inteligência operacional.

              </p>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="pb-32">

        <div className="container-custom">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">

            {/* INFO */}
            <div className="space-y-6">

              {[
                {
                  icon: Mail,
                  title: "E-mail",
                  value: "contato@engenixsystem.com.br",
                },

                {
                  icon: Phone,
                  title: "WhatsApp",
                  value: "+55 (34) 99999-9999",
                },

                {
                  icon: MapPin,
                  title: "Localização",
                  value: "Uberaba • Minas Gerais",
                },

              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <FadeUp
                    key={index}
                    delay={0.1 * index}
                  >

                    <div className="premium-card rounded-[32px] p-8 flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                        <Icon className="w-6 h-6 text-blue-600" />

                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-slate-900">

                          {item.title}

                        </h3>

                        <p className="mt-2 text-slate-600 leading-relaxed">

                          {item.value}

                        </p>

                      </div>

                    </div>

                  </FadeUp>

                );
              })}

            </div>

            {/* FORM */}
            <FadeUp delay={0.2}>

              <div className="premium-card rounded-[40px] p-10">

                <div className="mb-10">

                  <span className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">

                    Solicitar contato

                  </span>

                  <h2 className="mt-4 text-4xl font-bold text-slate-900">

                    Fale com nossa equipe.

                  </h2>

                </div>

                <form className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">

                    <input
                      type="text"
                      placeholder="Nome"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-blue-500 transition"
                    />

                    <input
                      type="email"
                      placeholder="E-mail"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-blue-500 transition"
                    />

                  </div>

                  <input
                    type="text"
                    placeholder="Empresa"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-blue-500 transition"
                  />

                  <textarea
                    placeholder="Como podemos ajudar?"
                    rows={6}
                    className="w-full rounded-3xl border border-slate-200 p-5 outline-none focus:border-blue-500 transition resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-600/20"
                  >

                    Enviar mensagem →

                  </button>

                </form>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}