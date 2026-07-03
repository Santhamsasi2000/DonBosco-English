import { LazyLoadImage } from "react-lazy-load-image-component"

const title = "Vision and Mission of Don Bosco School of Merit"
const AboutUs = () => {
  return (
    <section className="p-6 xs:p-8">
        <h1 className="uppercase font-bold mb-6 sm:mb-8 text-center 
        text-xl xs:text-[22px] sm:text-2xl text-green-700">
            {title}
        </h1>

        <div className="flex flex-col md:flex-row justify-between mb-6
         gap-8 md:gap-0 items-center">
          <div className="w-full xs:w-[90%] md:w-[48%]">
            <LazyLoadImage src="/images/About/about-us-1.jpg" 
            alt={title}
            className="shadow-lg w-full h-60 rounded-xl 
            border border-blue-600"/>
            </div>
            <div className="w-full xs:w-[90%] md:w-[47%]">
            <LazyLoadImage src="/images/About/about-us-2.jpg" 
            alt={title} 
            className="shadow-lg w-full h-60 rounded-xl border border-blue-600"/>
          </div>
          
        </div>

        <p className="text-center mt-4 text-lg mb-2">
            Motto - <span className="font-semibold text-blue-800">"To Bloom, To Flourish, To Accomplish"</span>
        </p>

        <div className="mb-4">
            <h4 className="font-bold text-green-700 text-lg mb-1">General Information</h4>
            <p>Don Bosco School of Merit was founded in the year 2018 for the primary sections with the motto "To Bloom, To Flourish, To Accomplish" by the Salesians of Don Bosco, INT Province.</p>
        </div>
        <div className="mb-4">
            <p className="font-bold text-green-700 text-lg mb-1">Vision Statement</p>
            <p>Don Bosco Nursery and Primary School aims at the holistic development of the pupil by making them Physically Sound, Intellectually Competent, Morally Upright, Emotionally Balanced, Spiritually Enlightened, and Socially Committed. Thus, shaping them as mentoring leaders of tomorrow, striving towards loving relationships, giving them integrity and excellence by following the footsteps of Don Bosco.</p>
        </div>
        <div>
            <h4 className="font-bold text-green-700 text-lg mb-1">Mission Statement</h4>
            <ul>
                <li><span className="font-semibold text-blue-800">Loving Relationship —</span> To bring out in the students the capability to love God, self, neighbor, and nature in building a peaceful world.</li>
                <li><span className="font-semibold text-blue-800">Integrity —</span> To instill in the students a sense of truth and honesty which creates the atmosphere of trust that allows genuine relationships to flourish.</li>
                <li><span className="font-semibold text-blue-800">Excellence —</span> To inspire the pupils to strive towards excellence in a joyful manner with the spirit of cooperation and interdependence.</li>
            </ul>
        </div>
    </section>
  )
}

export default AboutUs
