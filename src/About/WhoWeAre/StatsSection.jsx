import { stats } from "../../data/whoWeAreData";

const StatsSection = () => {
  return (
    <section className="relative bg-blue-900 py-14 sm:py-16 px-4 overflow-hidden">

      {/* Blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
            Don Bosco School at a{" "}
            <span className="text-green-400">Glance</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 rounded-2xl p-5 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-3">
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 mb-1">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-blue-200 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;