import HeroBanner  from "../Contact/HeroBanner";
import Breadcrumb  from "../Contact/Breadcrumb";
import InfoCards   from "../Contact/InfoCards";
import MapSection  from "../Contact/MapSection";
import ContactForm from "../Contact/ContactForm";

const Contact = () => {
  return (
    <main className="bg-blue-50 min-h-screen">

      {/* Hero */}
      <HeroBanner />

      {/* Breadcrumb */}
      <Breadcrumb pages={["Home", "Contact Us"]} />

      {/* Info Cards */}
      <InfoCards />

      {/* Map + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <MapSection  />
          <ContactForm />
        </div>
      </section>

    </main>
  );
};

export default Contact;