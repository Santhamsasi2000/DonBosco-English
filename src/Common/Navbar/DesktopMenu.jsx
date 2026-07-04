import { NavLink, useLocation } from "react-router-dom";
import { useState }             from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menus }                from "../../data/Menus";

/* ── Dropdown Variants ── */
const dropdownVariants = {
  hidden:  { opacity: 0, y: 8,  scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0, y: 8, scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const DesktopMenu = ({ closeMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  /* Check if any child route is active */
  const isParentActive = (menu) => {
    if (!menu.submenu) return false;
    return menu.submenu.some((sub) =>
      location.pathname.startsWith(sub.path)
    );
  };

  return (
    <ul className="hidden xl:flex items-center gap-1 2xl:gap-2">
      {menus.map((menu, index) => {
        const parentActive = isParentActive(menu);

        return (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => menu.submenu && setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            {/* ── Direct Link (no submenu) ── */}
            {!menu.submenu ? (
              <NavLink
                to={menu.path}
                onClick={closeMenu}
                className={({ isActive }) => `
                  relative flex items-center
                  px-4 py-2 rounded-lg
                  text-[13.5px] 2xl:text-[15px] font-bold uppercase tracking-wide
                  transition-all duration-300
                  ${isActive
                    ? "text-green-700 bg-green-50"
                    : "text-blue-950 hover:text-green-700 hover:bg-green-50"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {menu.name}
                    {/* Active Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-1 left-4 right-4
                                   h-[2px] bg-green-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ) : (
              /* ── Dropdown Trigger (has submenu) ── */
              <button
                type="button"
                className={`
                  relative flex items-center gap-1.5
                  px-4 py-2 rounded-lg
                  text-[13.5px] 2xl:text-[15px] font-bold uppercase tracking-wide
                  transition-all duration-300 cursor-pointer select-none
                  ${parentActive || openIndex === index
                    ? "text-green-700 bg-green-50"
                    : "text-blue-950 hover:text-green-700 hover:bg-green-50"
                  }
                `}
              >
                {menu.name}

                {/* Arrow Icon */}
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
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

                {/* Active Underline */}
                {parentActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-1 left-4 right-4
                               h-[2px] bg-green-600 rounded-full"
                  />
                )}
              </button>
            )}

            {/* ── Dropdown Panel ── */}
            <AnimatePresence>
              {menu.submenu && openIndex === index && (
                <motion.div
                  key={`dropdown-${index}`}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-[calc(100%+6px)]
                             w-[230px] z-50"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-xl
                                  border border-blue-100 p-2 overflow-hidden">

                    {/* Top Accent */}
                    <div className="h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 rounded-full mx-2 mb-2" />

                    <ul className="flex flex-col gap-0.5">
                      {menu.submenu.map((sub, i) => (
                        <li key={i}>
                          <NavLink
                            to={sub.path}
                            onClick={() => {
                              closeMenu();
                              setOpenIndex(null);
                            }}
                            className={({ isActive }) => `
                              flex items-center gap-3
                              px-4 py-2.5 rounded-xl
                              text-[13.5px] font-medium
                              transition-all duration-200 group
                              ${isActive
                                ? "bg-green-50 text-green-700 font-semibold"
                                : "text-blue-900 hover:bg-green-50 hover:text-green-700"
                              }
                            `}
                          >
                            {({ isActive }) => (
                              <>
                                {/* Dot */}
                                <span
                                  className={`
                                    w-[7px] h-[7px] rounded-full flex-shrink-0
                                    transition-all duration-300
                                    ${isActive
                                      ? "bg-green-600 scale-125"
                                      : "bg-blue-200 group-hover:bg-green-500"
                                    }
                                  `}
                                />
                                <span>{sub.name}</span>
                              </>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;