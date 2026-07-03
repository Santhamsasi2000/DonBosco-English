import { IoMdCall } from "react-icons/io";

const AdmissionCTA = () => {
  return (
    <section className="bg-green-800 py-12 px-4 sm:px-6 mb-6">
      <div className="flex flex-col lg:flex-row flex-wrap lg:justify-between items-center
      gap-6 justify-center">

        {/* Left Text */}
        <div className="w-full lg:w-[40%] xl:w-[50%]">
          <h2 className="text-white text-xl sm:text-2xl font-semibold max-w-xl leading-snug">
          Give your child the gift of quality education rooted in values and excellence.
          </h2>
        </div>

        {/* Right Buttons */}
        <div className="w-full lg:w-[55%] xl:w-[45%] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">

          {/* Phone */}
          <a
            href="tel:6384994252"
            className="flex items-center gap-3 bg-blue-400 text-blue-800 px-8 py-4 font-semibold"
          >
            <IoMdCall className="text-xl"/>
            +91-6384994252
          </a>

          {/* OR Circle */}
          <div className="relative">
            <div className="w-10 h-10 bg-green-900 text-white 
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center rounded-full z-10 text-sm font-bold">
              OR
            </div>
          </div>

          {/* Apply */}
          <a
            href="/admissions"
            className="bg-gray-200 text-green-900 px-10 py-4 font-semibold tracking-widest"
          >
            APPLY ADMISSIONS
          </a>

        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;