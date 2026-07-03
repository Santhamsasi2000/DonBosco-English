import SocialMedia from './SocialMedia';
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
    <section className='bg-blue-800 px-6 py-6 xs:px-7 sm:px-10 xs:py-10'>
      <div className='flex flex-wrap gap-x-10 gap-y-6 justify-between xl:justify-center'>
        <div className='w-full sm:w-6/12 xl:w-5/12'>
          <SocialMedia/>  
        </div>
        <div className='w-full sm:w-5/12 xl:w-3/12'>
          <QuickLinks/>
        </div>
        <div className='w-full sm:w-6/12 xl:w-3/12'>
          <FooterContact/>
        </div>
      </div>

      {/* Developed By */}
      <div className='mt-8 text-sm xs:text-base text-white 
      flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-1'>
        © {new Date().getFullYear()} Don Bosco School of Merit. All rights reserved.
        <span>
          Developed By 
          <a 
          className='underline text-green-300 ml-2'
          href="https://www.sasikumar.online/projects"
          target="_blank" rel="noopener noreferrer">Sasikumar.online</a>
        </span>
      </div>
    </section>
  ) 
}

export default Footer
