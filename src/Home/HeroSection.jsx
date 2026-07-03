import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:h-[90vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                min-h-[60vh] sm:min-h-[70vh] lg:h-[90vh]
                bg-cover bg-center bg-no-repeat
                relative flex items-center
              "
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* ── Overlay ── */}
              <div className="absolute inset-0 bg-black/55 sm:bg-black/50" />

              {/* ── Content ── */}
              <div
                className="
                  relative z-10
                  w-full max-w-7xl mx-auto
                  px-5 sm:px-8 lg:px-16
                  text-white
                "
              >
                <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">

                  {/* Subtitle */}
                  <p
                    className="
                      text-[10px] sm:text-xs md:text-sm lg:text-base
                      tracking-[0.2em] sm:tracking-widest
                      uppercase font-medium
                      text-green-400
                      mb-2 sm:mb-3 md:mb-4
                    "
                  >
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1
                    className="
                      text-xl sm:text-3xl md:text-4xl
                      lg:text-5xl xl:text-6xl
                      font-extrabold leading-tight
                      tracking-tight
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Divider */}
                  <div
                    className="
                      mt-3 sm:mt-4
                      w-10 sm:w-14 md:w-16
                      h-[3px] sm:h-1
                      bg-green-500 rounded-full
                    "
                  />

                  {/* Description */}
                  <p
                    className="
                      mt-3 sm:mt-4 md:mt-5
                      text-xs sm:text-sm md:text-base lg:text-lg
                      text-gray-200 leading-relaxed
                      max-w-xs sm:max-w-sm md:max-w-md
                    "
                  >
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div
                    className="
                      mt-5 sm:mt-7 md:mt-8
                      flex flex-col sm:flex-row
                      gap-3 sm:gap-4
                    "
                  >
                    {/* Primary Button */}
                    <button
                      className="
                        w-full sm:w-auto
                        bg-green-600 hover:bg-green-700
                        active:bg-green-800
                        px-5 sm:px-7 md:px-8
                        py-2.5 sm:py-3 md:py-4
                        rounded-lg
                        text-xs sm:text-sm md:text-base
                        font-semibold uppercase tracking-wider
                        transition-all duration-300
                        shadow-lg hover:shadow-green-500/30
                      "
                    >
                      Contact Us
                    </button>

                    {/* Secondary Button */}
                    <button
                      className="
                        w-full sm:w-auto
                        border-2 border-white hover:border-green-400
                        hover:text-green-400
                        active:bg-white/10
                        px-5 sm:px-7 md:px-8
                        py-2.5 sm:py-3 md:py-4
                        rounded-lg
                        text-xs sm:text-sm md:text-base
                        font-semibold uppercase tracking-wider
                        transition-all duration-300
                      "
                    >
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
              {/* ── End Content ── */}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;

/* ── Slide Data ── */
const slides = [
  {
    image: "/images/home/hero-section/hero-1.jpg",
    subtitle: "Education & School",
    title: "Creating A Brighter Future For Our Children",
    desc: "Quality education with modern facilities for holistic development of every student.",
  },
  {
    image: "/images/home/hero-section/hero-2.jpg",
    subtitle: "Learning & Activities",
    title: "Nurturing Young Minds For Tomorrow",
    desc: "Encouraging creativity, discipline, and leadership among students every day.",
  },
  {
    image: "/images/home/hero-section/hero-3.jpg",
    subtitle: "Admissions Open",
    title: "Join Our School Today",
    desc: "Admissions open for the academic year 2026–27. Secure your child's future now.",
  },
];