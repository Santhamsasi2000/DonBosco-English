import { FaMapMarkerAlt, FaMobile } from "react-icons/fa"
import { IoTime } from "react-icons/io5"
import { IoMdMail } from "react-icons/io"

const FindUs = () => {
  return (
    <section className="p-4 xs:p-6 rounded-xl shadow bg-white">
      
      {/* title */}
      <h3 className="font-bold mb-3 xs:mb-5 text-xl xs:text-2xl text-red-800">
        Find Us
      </h3>

      {/* Map */}
      <iframe className="w-full h-[250px] rounded-lg mb-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.0452354425906!2d78.6330801732265!3d9.846567975659717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00f860f2a3d62b%3A0x6eff024600253ced!2sAshok%20Raj%20Lodge%26%20Restaurant%20A%2FC!5e0!3m2!1sen!2sin!4v1757680224723!5m2!1sen!2sin"
        >
      </iframe>

      {/* Location */}
      <div className="mb-3">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-yellow-600 text-xl"/>
          <span className="font-bold text-gray-700 mb-1">Address</span>
        </div>
        <div className="ms-6">
          <a 
          className="hover:underline text-sm xs:text-base text-gray-700"
          href="https://www.google.com/maps/dir//Ashok+Raj+Lodge%26+Restaurant+A%2FC,+No-1412+Madurai+to+Thondi+Main+Road.Kalaiyarkovil,+opp+to-Petrol+Pump+Kochi-Madurai-Tondi+Point+Highway,+Murthi+Nagar,+Kalayarkoil,+Tamil+Nadu+630551/@9.8465627,78.6356551,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00f860f2a3d62b:0x6eff024600253ced!2m2!1d78.6356551!2d9.8465627?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" rel="noopener noreferrer"
          >
            No:1412, opposite to Bharath Petrol Bunk, Murthi Nagar, Kalayarkoil - 630551
          </a>
        </div>
      </div>

      {/* Mobile Number */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <FaMobile className="text-yellow-600 text-xl"/>
          <span className="font-bold text-gray-700">Phone Numbers</span>
        </div>
        <div className="ms-6">
          {
              phoneNumbers.map(({name, mobile},index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:gap-3 mb-2 sm:mb-1">
                    <span className="font-medium">{name}</span>
                      {
                      mobile.map((number) => (
                          <a className="hover:underline text-sm xs:text-base"
                          key={number} 
                          href={`tel:${number}`}
                          >{number}</a>
                      ))
                      }
                  </div>
              ))
            }
        </div>
      </div>

      {/* Email */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <IoMdMail className="text-yellow-600 text-xl"/>
          <span className="font-bold text-gray-700">Email Address</span>
        </div>
        <div className="ms-6">
          <a 
            className="hover:underline text-sm xs:text-base"
            href="mailto:ashokrajgroups@gmail.com"
            target="_blank" rel="noopener noreferrer"
            >
              ashokrajgroups@gmail.com
          </a>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <IoTime className="text-yellow-600 text-xl"/>
          <span className="font-bold text-gray-700">Opening Hours</span>
        </div>
        <div className="ms-6">
          <p className="mb-1 text-sm xs:text-base">Restaurant: 6:00 AM - 11:00 PM</p>
          <p className="mb-1 text-sm xs:text-base">Bakery: 6:00 AM - 10:00 PM</p>
          <p className="text-sm xs:text-base">Lodge: 24x7 Check-in</p>
        </div>
      </div>
    </section>
  )
}

export default FindUs

const phoneNumbers = [
    {
        name: "Restaurant:",
        mobile: ["8508525062", "9043246178"],
    },
    {
        name: "Bakery:",
        mobile: ["9043246178", "7708675225"],
    },
    {
        name: "Lodge:",
        mobile: ["7639232333"],
    },
    {
        name: "Veg-Restaurant:",
        mobile: ["9043246176", "9543088737"],
    },
];
