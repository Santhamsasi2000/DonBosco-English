import { vision } from "../../data/whoWeAreData";

const VisionSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT : Text ── */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Vision Statement
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              Our{" "}
              <span className="text-green-600">Vision</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 mt-3 mb-6 rounded-full" />

            {/* Content */}
            <p className="text-blue-700 text-sm sm:text-base leading-relaxed mb-6">
              {vision.content}
            </p>

            {/* Quote */}
            <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4 shadow-sm">
              <p className="text-blue-800 text-xs sm:text-sm italic font-medium leading-relaxed">
                "Shaping mentoring leaders of tomorrow by following
                the footsteps of{" "}
                <span className="text-green-600 font-bold not-italic">
                  Don Bosco
                </span>
                ."
              </p>
            </div>

          </div>

          {/* ── RIGHT : Highlights Grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {vision.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-100 shadow-md p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Emoji Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 group-hover:bg-blue-900 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-blue-900 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;