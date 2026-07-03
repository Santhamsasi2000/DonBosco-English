import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { label } from "framer-motion/client";

const socialMedia = [
  {
    id: 1,
    link: "https://api.whatsapp.com/send?phone=919043246178",
    icon: <SiWhatsapp />,
    label: "Connect on Whatsapp",
  },
  {
    id: 2,
    link: "https://www.facebook.com/AshokrajRestaurantBakeryLodge/",
    icon: <FaFacebookF />,
    label: "Follow on facebook",
  },
  {
    id: 3,
    link: "https://www.instagram.com/ashokraj_restaurant/",
    icon: <FaInstagram />,
    label: "Follow on Instagram",
  },
];

const SocialMedia = () => {
  return (
    <div>
      <h3 className='font-bold text-lg
      xs:text-2xl mb-1 flex gap-2 items-center text-red-200'>
       Don Bosco School of Merit
      </h3>
      <p className="mb-4 text-white text-sm xs:text-base">
        Don Bosco School of Merit, founded in 2018 by the Salesians of Don Bosco, INT Province, works with the motto "To Bloom, To Flourish, To Accomplish.
      </p>
      <div className="flex gap-4">
      {
        socialMedia.map(({ id, link, icon })=>(
        <div className='flex gap-4' key={id}>
            <a className='text-yellow-200 text-xl hover:text-red-300' href={link} 
            target='_blank'  rel="noopener noreferrer" aria-label={label}>{icon}</a>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default SocialMedia
