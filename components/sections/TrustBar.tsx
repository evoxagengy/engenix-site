export default function TrustBar() {
  return (
    <section className="pb-24">

      <div className="container-custom">

        {/* TRUSTED */}
        <div className="text-center mb-12">

          <span className="text-xs tracking-[0.3em] text-blue-600 font-semibold uppercase">
            Empresas que confiam na Engenix
          </span>

        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-60 mb-20">

          <span className="text-3xl font-bold text-slate-500">
            Raízen
          </span>

          <span className="text-2xl font-semibold text-slate-500">
            Coruripe
          </span>

          <span className="text-2xl font-semibold text-slate-500">
            São Martinho
          </span>

          <span className="text-2xl font-semibold text-slate-500">
            Agrovale
          </span>

          <span className="text-2xl font-semibold text-slate-500">
            Caramuru
          </span>

        </div>

        {/* KPI STRIP */}
        <div className="premium-card rounded-[32px] p-8 lg:p-12 shadow-xl shadow-slate-100">

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                -32%
              </h3>

              <p className="text-slate-500 mt-2">
                Redução de downtime
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                +48%
              </h3>

              <p className="text-slate-500 mt-2">
                Eficiência operacional
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                100%
              </h3>

              <p className="text-slate-500 mt-2">
                Controle de ativos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                +55%
              </h3>

              <p className="text-slate-500 mt-2">
                Confiabilidade operacional
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                Total
              </h3>

              <p className="text-slate-500 mt-2">
                Digitalização operacional
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}