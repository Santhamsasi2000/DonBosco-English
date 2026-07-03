import { NavLink } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Logo
import Logo from "/images/Header/donbosco-school-of-merit-logo.jpg"
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => 
    {
      setMenuOpen(prev => !prev)
    };

    const closeMenu = () => {
      setMenuOpen(false);
    }

    //Animation Variants
    const navVariants = {
      hidden: { y: -80, opacity: 0 },
      visible: { y:0, opacity: 1 , transition: { duration: 1.5, ease: "easeOut" }}
    };

    const menuVariants = {
      hidden: { x: 80, opacity: 0 },
      visible: { x: 0, opacity: 1 , transition: { duration:1, ease: "easeOut" }},
      exit: { x: 80, opacity: 0 , transition: { duration: 1, ease: "easeIn" }}
    };

  return (
    <motion.nav 
      className="px-3 py-1 sm:px-4 sm:py-2
      transition-colors duration-300 ease-in-out shadow-md"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      >
       <div className="flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="">
          <div className="flex items-center gap-3">
            <LazyLoadImage src={Logo} 
            className="w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] sm:w-[80px] sm:h-[80px] mt-1"/>
            <div>
            <motion.h1 
            className="text-xl xs:text-2xl 
            font-bold mb-0 text-blue-600 font-title"
            whileHover={{scale: 1.05}}
            transition={{ type: "spring", stiffness: 300 }}
            >
              DON BOSCO
            </motion.h1>
            <p className="font-bold text-green-700">School of Merit</p>
            <p className="text-blue-800">Pallithammam, Sivaganga - 630551</p>
            </div>
           </div>
          
        </NavLink>
        
        {/* Desktop Menus */}
        <DesktopMenu closeMenu={closeMenu}/>

{/* =============== Mobile View ========================*/}

         {/* Toggle Button */}
         <div className="block xl:hidden">
          <motion.button
            className="mt-2"
            type="button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            animate={{ rotate: menuOpen ? 180 : 0}}
          >
            {menuOpen ? (
              <RxCross1 className="text-2xl text-green-600 hover:text-green-600"/>
            ) : (
              <RxHamburgerMenu className="text-2xl text-green-900 hover:text-green-600"/>
            )}
          </motion.button>
         </div>
       </div>

       {/* Mobile Menu */}
        <AnimatePresence>
        {
            menuOpen && (
            <motion.div
             className="block xl:hidden"
             initial="hidden"
             animate="visible"
             exit="exit"
             variants={menuVariants}>
                <MobileMenu closeMenu={closeMenu}/>
            </motion.div>
            )
        }
        </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar


