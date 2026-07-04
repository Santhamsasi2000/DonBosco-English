import { coreValues } from "../../data/whoWeAreData";

const ValuesSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            What We Stand For
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">
            Our Core{" "}
            <span className="text-green-600">Values</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-blue-500 text-sm sm:text-base max-w-xl mx-auto">
            The principles that define our school culture and guide our students
            towards becoming well-rounded individuals.
          </p>
        </div>

        {/* ── Values Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl border border-blue-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >

              {/* Top Accent Bar */}
              <div className={`
                absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300
                ${value.color === "blue" ? "bg-blue-900" : "bg-green-600"}
              `} />

              {/* Icon Circle */}
              <div className={`
                w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                flex items-center justify-center
                text-2xl sm:text-3xl mb-4 mt-2
                shadow-md transition-all duration-300
                ${value.color === "blue"
                  ? "bg-blue-50 group-hover:bg-blue-900"
                  : "bg-green-50 group-hover:bg-green-600"
                }
              `}>
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-blue-900 mb-2">
                {value.title}
              </h3>

              {/* Divider */}
              <div className={`
                w-8 h-0.5 mb-3 rounded-full transition-all duration-300 group-hover:w-14
                ${value.color === "blue" ? "bg-blue-200" : "bg-green-200"}
              `} />

              {/* Desc */}
              <p className="text-blue-500 text-xs sm:text-sm leading-relaxed">
                {value.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;