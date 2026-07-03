import { motion } from "framer-motion";
import { coordinators, facultySections } from "../data/facultyData";
import { FaChalkboardTeacher, FaUserTie, FaStar } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const TeachingFaculty = () => {
  return (
    <main className="bg-blue-50 min-h-screen">

      {/* ───── HERO BANNER ───── */}
      <section
        className="
          relative bg-blue-900 text-white
          py-16 sm:py-20 md:py-24
          px-4 text-center overflow-hidden
        "
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 p-4 rounded-full shadow-lg">
              <FaChalkboardTeacher className="text-white text-3xl sm:text-4xl" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Teaching Faculty
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-blue-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Academic Year <span className="text-green-400 font-bold">2025 – 2026</span>
          </p>
        </motion.div>
      </section>

      {/* ───── BREADCRUMB ───── */}
      <div className="bg-white border-b border-blue-100 px-4 py-3">
        <div className="max-w-6xl mx-auto text-xs sm:text-sm text-blue-700 flex items-center gap-2">
          <span>Home</span>
          <span>/</span>
          <span>About Us</span>
          <span>/</span>
          <span className="text-green-600 font-semibold">Teaching Faculty</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">

        {/* ───── COORDINATORS SECTION ───── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700
                            px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
              <FaStar className="text-green-600" />
              Leadership Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">
              Section Coordinators
            </h2>
            <div className="w-14 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coordinators.map((coord, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="
                  bg-white rounded-2xl shadow-md
                  border border-blue-100
                  p-5 sm:p-6
                  flex flex-col items-center text-center
                  hover:shadow-blue-200 hover:shadow-lg
                  transition-all duration-300
                  group
                "
              >
                {/* Avatar */}
                <div
                  className="
                    w-14 h-14 sm:w-16 sm:h-16
                    bg-blue-900 group-hover:bg-green-600
                    rounded-full flex items-center justify-center
                    text-2xl mb-4 transition-colors duration-300
                    shadow-md
                  "
                >
                  <MdSchool className="text-white text-2xl" />
                </div>

                {/* Role Badge */}
                <span
                  className="
                    text-[10px] sm:text-xs
                    bg-green-100 text-green-700
                    font-semibold px-3 py-1
                    rounded-full mb-3
                  "
                >
                  {coord.role}
                </span>

                {/* Name */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900">
                  {coord.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───── FACULTY SECTIONS ───── */}
        <section className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700
                            px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
              <FaUserTie className="text-blue-600" />
              Our Educators
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">
              Faculty Members
            </h2>
            <div className="w-14 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
          </motion.div>

          {facultySections.map((section, si) => (
            <motion.div
              key={si}
              variants={fadeUp}
              custom={si}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden"
            >
              {/* Section Header */}
              <div
                className={`
                  px-5 sm:px-7 py-4
                  flex items-center gap-3
                  ${section.color === "blue"
                    ? "bg-blue-900"
                    : "bg-green-700"
                  }
                `}
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <FaChalkboardTeacher className="text-white text-lg" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide">
                  {section.section}
                </h3>
                <span className="ml-auto bg-white/20 text-white text-xs font-semibold
                                 px-2.5 py-1 rounded-full">
                  {section.members.length} Members
                </span>
              </div>

              {/* Members Grid */}
              <div className="p-5 sm:p-6 md:p-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.members.map((member, mi) => (
                    <motion.div
                      key={mi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: mi * 0.05 }}
                      viewport={{ once: true }}
                      className="
                        flex items-center gap-3
                        bg-blue-50 hover:bg-blue-100
                        rounded-xl px-4 py-3
                        transition-colors duration-200
                        group cursor-default
                      "
                    >
                      {/* Dot */}
                      <div
                        className={`
                          w-2 h-2 rounded-full flex-shrink-0
                          ${section.color === "blue"
                            ? "bg-blue-600"
                            : "bg-green-600"
                          }
                        `}
                      />
                      <span className="text-xs sm:text-sm text-blue-900 font-medium">
                        {member}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ───── STATS SECTION ───── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-blue-900 rounded-2xl p-8 sm:p-10 text-white text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8">
            Faculty at a Glance
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Coordinators",        value: "6",  icon: "👑" },
              { label: "Higher Secondary",    value: "8",  icon: "🎓" },
              { label: "School & Primary",    value: "12", icon: "📚" },
              { label: "Support Staff",       value: "7",  icon: "🤝" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-green-400">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TeachingFaculty;