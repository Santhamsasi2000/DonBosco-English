import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menus } from "./Menus";

const DesktopMenu = ({ closeMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="hidden xl:flex gap-10 items-center">
      {menus.map((menu, index) => (
       <li
        key={index}
        className="relative"
        onMouseEnter={() => setOpenIndex(index)}
        onMouseLeave={() => setOpenIndex(null)}
      >
        {/* ✅ If NO submenu → normal link */}
        {!menu.submenu ? (
          <NavLink
            to={menu.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-semibold ${
                isActive ? "text-green-700" : "text-gray-800"
              } hover:text-green-700`
            }
          >
            {menu.name}
          </NavLink>
        ) : (
          /* ✅ If HAS submenu → dropdown trigger */
          <div className="cursor-pointer font-semibold text-gray-800 hover:text-green-700">
            {menu.name}
          </div>
        )}

        {/* Dropdown */}
        <AnimatePresence>
          {menu.submenu && openIndex === index && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 mt-3 w-56 bg-white shadow-lg rounded-lg py-2 z-50"
            >
              {menu.submenu.map((sub, i) => (
                <li key={i}>
                  <NavLink
                    to={sub.path}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    {sub.name}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
       </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;