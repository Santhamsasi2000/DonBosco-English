const HeroBanner = () => {
  return (
    <section className="relative bg-blue-900 text-white py-16 sm:py-20 md:py-28 px-4 overflow-hidden">

      {/* ── Blobs ── */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Dot Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize:  "28px 28px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
          {/* School Icon */}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
          </svg>
          Don Bosco Higher Secondary School
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Who{" "}
          <span className="text-green-400">We Are</span>
        </h1>

        <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

        <p className="mt-6 text-blue-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Rooted in the Salesian tradition of Don Bosco, we are committed
          to nurturing young minds with faith, reason and loving kindness —
          shaping the leaders of tomorrow.
        </p>

        {/* ── Scroll Down Hint ── */}
        <div className="mt-10 flex flex-col items-center gap-2 text-blue-300">
          <span className="text-xs tracking-widest uppercase">Discover More</span>
          <div className="w-5 h-8 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-green-400 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;