const HeroBanner = () => {
  return (
    <section className="relative bg-blue-900 text-white py-16 sm:py-20 md:py-28 px-4 overflow-hidden">

      {/* ── Blobs ── */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Dot Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize:  "28px 28px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* Icon Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-2xl shadow-2xl mb-6">
          <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Get In{" "}
          <span className="text-green-400">Touch</span>
        </h1>

        <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />

        <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Have questions about admissions or academics? We'd love to
          hear from you. Send us a message and we'll respond as soon
          as possible.
        </p>

        {/* ── Quick Pills ── */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <a
            href="tel:6384994252"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300"
          >
            {/* Phone Icon */}
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            6384994252
          </a>

          <a
            href="mailto:dbnpschool@gmail.com"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300"
          >
            {/* Mail Icon */}
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            dbnpschool@gmail.com
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;