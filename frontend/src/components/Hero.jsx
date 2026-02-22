export default function Hero() {
  return (
    <section className="pt-6 pb-10 text-center fade-in">

      {/* BADGE */}
      <div className="inline-block border border-yellow-500/40 text-yellow-400 px-5 py-1.5 rounded-full mb-5 text-sm tracking-wide">
        ⚡ AI-Powered Loan Orchestration
      </div>

      {/* HEADING */}
      <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto mb-5">
        Loans, Decided by{" "}
        <span className="text-yellow-500">Intelligence</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
        Apply for loans with AI-powered instant decisions. Transparent process,
        military-grade security, and real-time tracking from application to
        disbursement.
      </p>

      {/* BUTTONS */}
      <div className="flex justify-center gap-5">
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]">
          Apply for a Loan →
        </button>

        <button className="border border-white/20 px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
          Sign In
        </button>
      </div>

    </section>
  );
}