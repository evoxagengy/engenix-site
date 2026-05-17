import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

      <Header />

      <section className="relative flex items-center justify-center min-h-[80vh] bg-grid">

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

        {/* CARD */}
        <div className="relative z-10 bg-white border border-slate-200 rounded-[40px] px-14 py-16 shadow-soft text-center max-w-2xl mx-6">

          {/* TAG */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8">
            ENGENIX DOWNLOAD CENTER
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900">

            Página em
            <span className="text-blue-600">
              {" "}construção.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl text-slate-600 leading-relaxed">

            Estamos preparando a central de downloads da Engenix com aplicativos,
            documentações técnicas, materiais institucionais e recursos da plataforma.

          </p>

          {/* STATUS */}
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200">

            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>

            <span className="text-slate-700 font-medium">
              Desenvolvimento em andamento
            </span>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}