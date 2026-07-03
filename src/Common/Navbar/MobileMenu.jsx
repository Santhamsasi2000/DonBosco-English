import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menus } from "./Menus";

const MobileMenu = ({ closeMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-xl mt-4 mx-2 p-4">
      <ul className="flex flex-col gap-4">

        {menus.map((menu, index) => (
          <li key={index} className="border-b pb-2">

            {/* ✅ If NO submenu → Direct Link */}
            {!menu.submenu ? (
              <NavLink
                to={menu.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block font-semibold ${
                    isActive ? "text-green-700" : "text-gray-800"
                  }`
                }
              >
                {menu.name}
              </NavLink>
            ) : (
              <>
                {/* ✅ Parent Menu (Accordion Toggle) */}
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center cursor-pointer font-semibold text-gray-800"
                >
                  {menu.name}
                  <span className="text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* ✅ Submenu */}
                {openIndex === index && (
                  <ul className="mt-3 ml-3 flex flex-col gap-2">
                    {menu.submenu.map((sub, i) => (
                      <li key={i}>
                        <NavLink
                          to={sub.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `block text-sm ${
                              isActive
                                ? "text-green-700 font-medium"
                                : "text-gray-600"
                            } hover:text-green-600`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

          </li>
        ))}

      </ul>
    </div>
  );
};

export default MobileMenu;