import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <section className="bg-green-600 px-6 py-4">
      <div className="flex justify-center sm:justify-between">
        <div className="text-white flex items-center gap-6">
         <div className="hidden sm:flex items-center gap-2">
            <FaPhone />   
            <a>
              6384994252
            </a>
         </div>
         <div className="hidden md:flex items-center gap-2">
            <IoMdMail />  
            <a>
            donbosco@gmail.com
            </a>
         </div>
        </div>
        <div className="flex gap-6">
          <NavLink className="bg-blue-600 text-white px-3 xs:px-4 py-2 rounded-md font-medium">
            Admission Open
          </NavLink>
          <NavLink className="bg-blue-600 text-white px-3 xs:px-4 py-2 rounded-md font-medium">
            Fees Payment
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Header
