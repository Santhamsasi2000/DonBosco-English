import { mission } from "../../data/whoWeAreData";

const MissionSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Mission Statement
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">
            Our{" "}
            <span className="text-green-600">Mission</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-blue-500 text-sm sm:text-base max-w-xl mx-auto">
            Three pillars that guide everything we do at Don Bosco School.
          </p>
        </div>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mission.pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-blue-50 hover:bg-blue-900 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-default"
            >

              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-all duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 group-hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300">
                <span className="text-blue-400 group-hover:text-white text-xs font-bold transition-colors duration-300">
                  0{i + 1}
                </span>
              </div>

              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center
                text-2xl mb-5 shadow-md transition-all duration-300
                ${pillar.color === "blue"
                  ? "bg-blue-900 group-hover:bg-green-600"
                  : "bg-green-600 group-hover:bg-blue-600"
                }
              `}>
                {pillar.icon}
              </div>

              {/* Keyword */}
              <h3 className="text-lg sm:text-xl font-extrabold text-blue-900 group-hover:text-white mb-3 transition-colors duration-300">
                {pillar.keyword}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-green-500 group-hover:bg-green-400 mb-4 rounded-full transition-all duration-300 group-hover:w-12" />

              {/* Content */}
              <p className="text-blue-600 group-hover:text-blue-200 text-sm leading-relaxed transition-colors duration-300">
                {pillar.content}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionSection;