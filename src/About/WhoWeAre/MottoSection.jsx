import { motto } from "../../data/whoWeAreData";

const MottoSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 px-4 border-b border-blue-100">
      <div className="max-w-4xl mx-auto">

        {/* ── Motto Card ── */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-center overflow-hidden shadow-xl">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-green-600/5 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl" />

          <div className="relative z-10">

            {/* Star Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-4 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            {/* Label */}
            <p className="text-green-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
              Our Motto
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-green-500/50 mx-auto mb-4 rounded-full" />

            {/* Motto Text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
              "{motto}"
            </h2>

            {/* Bottom Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <div className="w-2 h-2 bg-green-400/50 rounded-full" />
              <div className="w-2 h-2 bg-green-400/30 rounded-full" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MottoSection;