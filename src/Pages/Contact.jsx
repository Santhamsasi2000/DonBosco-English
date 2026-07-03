import ContactUsForm from "../Contact/ContactForm/ContactUsForm"
import FindUs from "../Contact/FindUs"
import HeroContact from "../Contact/HeroContact"
import InformationContact from "../Contact/InformationContact"

const Contact = () => {
  return (
    <>
      <HeroContact/>
      {/* main */}
      <div className="flex flex-wrap justify-between 
       gap-8 lg:gap-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
        <div className="w-full lg:w-[47%] xl:w-[45%]">
          <InformationContact />
        </div>
        <div className="w-full lg:w-[47%] xl:w-[45%]">
           {/* <ContactUsForm/> */}
        </div>
      </div>
    </>
  )
}

export default Contact
