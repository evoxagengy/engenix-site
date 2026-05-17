import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">

      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-4 gap-14">

            {/* BRAND */}
            <div>

            <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 flex items-center justify-center">

                <Image
                    src="/logo.png"
                    alt="Engenix"
                    width={38}
                    height={38}
                    className="object-contain"
                />

                </div>

                <span className="text-3xl font-semibold text-white">
                Engenix
                </span>

            </div>

            <p className="text-slate-400 leading-relaxed">

              Tecnologia industrial, inteligência operacional e gestão de manutenção para operações modernas.

            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-white font-semibold mb-6">
              Plataforma
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>Engenix System</p>
              <p>PCM</p>
              <p>Indicadores</p>
              <p>Ordens de Serviço</p>

            </div>

          </div>

          {/* SOLUTIONS */}
          <div>

            <h3 className="text-white font-semibold mb-6">
              Soluções
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>Implantação</p>
              <p>Confiabilidade</p>
              <p>Gestão de Ativos</p>
              <p>Engenharia de Manutenção</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white font-semibold mb-6">
              Contato
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>contato@engenixsystem.com.br</p>

              <p>Canarana • MT</p>

              <p>Frutal • MG</p>

              <p>Brasil</p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Engenix. Todos os direitos reservados.
          </p>

          <p className="text-slate-500 text-sm">
            Transformando manutenção em inteligência operacional.
          </p>

        </div>

      </div>

    </footer>
  );
}