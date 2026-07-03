import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  return (
   <section className="w-full min-h-[70vh] lg:h-[85vh]">
    <Swiper
      modules={[Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      loop
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="min-h-[70vh] lg:h-[85vh] bg-cover bg-center relative flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

              <div className="max-w-xl">

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base tracking-widest mb-3 sm:mb-4">
                  {slide.subtitle}
                </p>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200">
                  {slide.desc}
                </p>

                {/* Button */}
                <button className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition">
                  CONTACT US
                </button>

              </div>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   </section>
  );
};

export default HeroSection;

const slides = [
  {
    image: "/images/home/hero-section/hero-1.jpg",
    subtitle: "EDUCATION & SCHOOL",
    title: "CREATING A BRIGHTER FUTURE FOR OUR CHILDREN",
    desc: "Quality education with modern facilities for holistic development."
  },
  {
    image: "/images/home/hero-section/hero-2.jpg",
    subtitle: "LEARNING & ACTIVITIES",
    title: "NURTURING YOUNG MINDS FOR TOMORROW",
    desc: "Encouraging creativity, discipline, and leadership among students."
  },
  {
    image: "/images/home/hero-section/hero-3.jpg",
    subtitle: "ADMISSIONS OPEN",
    title: "JOIN OUR SCHOOL TODAY",
    desc: "Admissions open for the academic year 2026-27."
  }
];