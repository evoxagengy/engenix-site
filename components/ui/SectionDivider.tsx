export default function SectionDivider() {
  return (
    <div className="relative py-8 overflow-hidden">

      {/* LINE */}
      <div className="absolute inset-0 flex items-center">

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent"></div>

      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>

    </div>
  );
}