import { NavLink, useLocation } from "react-router-dom";
import { useState }             from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menus }                from "../../data/Menus";

/* ── Submenu slide variants ── */
const submenuVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: {
    opacity: 1, height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0, height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const MobileMenu = ({ closeMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isParentActive = (menu) => {
    if (!menu.submenu) return false;
    return menu.submenu.some((sub) =>
      location.pathname.startsWith(sub.path)
    );
  };

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 py-4">
      <ul className="flex flex-col gap-1">
        {menus.map((menu, index) => {
          const parentActive = isParentActive(menu);
          const isOpen       = openIndex === index;

          return (
            <li key={index}>

              {/* ── Direct Link ── */}
              {!menu.submenu ? (
                <NavLink
                  to={menu.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    flex items-center justify-between
                    px-4 py-3 rounded-xl
                    text-sm font-bold uppercase tracking-wide
                    transition-all duration-300
                    ${isActive
                      ? "bg-green-50 text-green-700"
                      : "text-blue-950 hover:bg-blue-50 hover:text-green-700"
                    }
                  `}
                >
                  {menu.name}
                </NavLink>
              ) : (
                <>
                  {/* ── Accordion Trigger ── */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`
                      w-full flex items-center justify-between
                      px-4 py-3 rounded-xl
                      text-sm font-bold uppercase tracking-wide
                      transition-all duration-300 cursor-pointer
                      ${parentActive || isOpen
                        ? "bg-green-50 text-green-700"
                        : "text-blue-950 hover:bg-blue-50 hover:text-green-700"
                      }
                    `}
                  >
                    <span>{menu.name}</span>

                    {/* Animated Arrow */}
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  {/* ── Submenu Accordion ── */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key={`sub-${index}`}
                        variants={submenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <ul className="mt-1 ml-4 pl-3
                                       border-l-2 border-green-100
                                       flex flex-col gap-0.5 pb-2">
                          {menu.submenu.map((sub, i) => (
                            <li key={i}>
                              <NavLink
                                to={sub.path}
                                onClick={closeMenu}
                                className={({ isActive }) => `
                                  flex items-center gap-2.5
                                  px-3 py-2.5 rounded-xl
                                  text-sm font-medium
                                  transition-all duration-200 group
                                  ${isActive
                                    ? "bg-green-50 text-green-700 font-semibold"
                                    : "text-blue-800 hover:bg-green-50 hover:text-green-700"
                                  }
                                `}
                              >
                                {({ isActive }) => (
                                  <>
                                    {/* Dot */}
                                    <span
                                      className={`
                                        w-[6px] h-[6px] rounded-full flex-shrink-0
                                        transition-all duration-300
                                        ${isActive
                                          ? "bg-green-600 scale-125"
                                          : "bg-blue-200 group-hover:bg-green-500"
                                        }
                                      `}
                                    />
                                    {sub.name}
                                  </>
                                )}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;