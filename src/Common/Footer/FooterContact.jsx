import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const place = "Sagaya Nagar, Pallithammam(PO), Kalaiyarkoil(TK), Sivaganga(Dt), Tamil Nadu 630551";
const placeUrl = "https://www.google.com/maps/dir//Ashok+Raj+Lodge%26+Restaurant+A%2FC,+No-1412+Madurai+to+Thondi+Main+Road.Kalaiyarkovil,+opp+to-Petrol+Pump+Kochi-Madurai-Tondi+Point+Highway,+Murthi+Nagar,+Kalayarkoil,+Tamil+Nadu+630551/@9.8465627,78.6356551,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00f860f2a3d62b:0x6eff024600253ced!2m2!1d78.6356551!2d9.8465627?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D";
const email = "dbnpschool@gmail.com";
const mobile1 = "6384994252"; 

const FooterContact = () => {
  return (
    <div className="flex flex-col items-stretch">
      <p className='text-red-200 font-bold text-lg xs:text-xl mb-2'>Contact Us</p>
      <div className="mb-2 flex gap-3 items-center">
        <i className="text-xl text-yellow-200"><FaMapMarkerAlt /></i>
        <a href={placeUrl}
        target="_blank" className="text-white hover:underline text-sm xs:text-base"
        rel="noopener noreferrer">{place}</a>
      </div>
      <div className="mb-3 flex gap-3 items-center">
          <i className="text-xl text-yellow-200"><IoIosMail /></i>
          <a href={`mailto:${email}`} 
          className="hover:underline text-white text-sm xs:text-base">
            {email}
          </a>
      </div>
      <div className="flex gap-3 items-center">
          <i className="text-xl text-yellow-200"><FaMobileAlt /></i>
          <a href={`tel:${mobile1}`} 
          className="hover:underline text-white text-sm xs:text-base">
            {mobile1}
          </a>
      </div>
    </div>
  )
}

export default FooterContact
