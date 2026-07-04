import { generalInfo } from "../../data/whoWeAreData";

const GeneralInfoSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-12">

          {/* Title Badge */}
          <div className="inline-flex items-center justify-center gap-2
                          bg-blue-900 text-white
                          px-6 sm:px-8 py-2.5 rounded-xl
                          shadow-lg mb-6">

            {/* Info Icon */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="text-sm sm:text-base md:text-lg font-extrabold
                           tracking-widest uppercase">
              {generalInfo.title}
            </h2>

          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 sm:w-24 bg-blue-100" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="h-px w-16 sm:w-24 bg-blue-100" />
          </div>

        </div>

        {/* ── Main Content Card ── */}
        <div className="bg-blue-50 rounded-2xl border border-blue-100
                        shadow-md overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── LEFT : Content ── */}
            <div className="p-7 sm:p-8 md:p-10 flex flex-col justify-center">

              {/* Label */}
              <div className="inline-flex items-center gap-2
                              bg-green-100 text-green-700
                              px-3 py-1 rounded-full
                              text-xs font-semibold mb-4 self-start">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"
                    clipRule="evenodd"
                  />
                </svg>
                About Our School
              </div>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold
                             text-blue-900 mb-4 leading-tight">
                Don Bosco{" "}
                <span className="text-green-600">School of Merit</span>
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-green-500 rounded-full mb-5" />

              {/* Content Text */}
              <p className="text-blue-700 text-sm sm:text-base leading-relaxed mb-6">
                {generalInfo.content}
              </p>

              {/* Quote Strip */}
              <div className="relative bg-white rounded-xl
                              border-l-4 border-green-500
                              p-4 sm:p-5 shadow-sm">
                <div className="absolute -top-2.5 left-4
                                bg-green-500 text-white
                                text-xs font-bold
                                px-2 py-0.5 rounded-full">
                  Motto
                </div>
                <p className="text-blue-900 text-sm sm:text-base
                              font-semibold italic leading-relaxed">
                  "To Bloom, To Flourish, To Accomplish"
                </p>
                <p className="text-blue-400 text-xs mt-1">
                  — Salesians of Don Bosco, INT Province
                </p>
              </div>

            </div>

            {/* ── RIGHT : Highlights ── */}
            <div className="bg-blue-900 p-7 sm:p-8 md:p-10
                            grid grid-cols-1 sm:grid-cols-2 gap-4
                            content-center">

              {generalInfo.highlights.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/5 hover:bg-white/10
                             border border-white/10
                             hover:border-green-500/40
                             rounded-2xl p-4 sm:p-5
                             flex flex-col gap-2
                             transition-all duration-300
                             hover:-translate-y-0.5"
                >
                  {/* Icon + Label Row */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">
                      {item.icon}
                    </span>
                    <span className="text-blue-300 text-xs font-semibold
                                     uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-6 h-px bg-green-500/50 rounded-full" />

                  {/* Value */}
                  <p className="text-white text-sm sm:text-base font-bold
                                leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
                        rounded-2xl px-6 sm:px-8 py-4
                        flex flex-col sm:flex-row items-center
                        justify-between gap-3 shadow-lg">

          <div className="flex items-center gap-3">
            {/* School Icon */}
            <div className="w-9 h-9 bg-green-600 rounded-xl
                            flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000
                     1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1
                     1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0
                     00.787 0l7-3a1 1 0 000-1.838l-7-3z"
                />
              </svg>
            </div>
            <p className="text-white text-xs sm:text-sm font-medium">
              Managed by the{" "}
              <span className="text-green-400 font-bold">
                Salesians of Don Bosco
              </span>
              , INT Province
            </p>
          </div>

          {/* Founded Badge */}
          <div className="flex items-center gap-2
                          bg-white/10 border border-white/20
                          rounded-full px-4 py-1.5">
            <span className="text-green-400 text-sm">📅</span>
            <span className="text-white text-xs sm:text-sm font-semibold">
              Founded in{" "}
              <span className="text-green-400">2018</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GeneralInfoSection;