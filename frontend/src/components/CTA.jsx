export default function CTA() {
  return (
    <section className="py-24 fade-in">

      <div
        className="
        relative max-w-6xl mx-auto text-center px-10 py-16 rounded-3xl
        bg-gradient-to-br from-[#0F1F35] via-[#0A1628] to-[#0F1F35]
        border border-yellow-500/20
        transition-all duration-500 ease-out
        hover:border-yellow-400
        hover:shadow-[0_0_80px_rgba(245,158,11,0.25)]
        "
      >

        {/* Soft glow layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 blur-2xl opacity-70"></div>

        <div className="relative z-10">

          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Join thousands of borrowers who’ve experienced the future of loan
            processing.
          </p>

          <button
            className="
            bg-yellow-500 text-black px-10 py-3 rounded-lg font-semibold
            transition-all duration-300
            hover:brightness-110 hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]
            "
          >
            Create Your Account →
          </button>

        </div>
      </div>

    </section>
  );
}