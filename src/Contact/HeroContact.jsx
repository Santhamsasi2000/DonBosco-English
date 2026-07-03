const HeroContact = () => (
  <section
    className="relative w-full h-50 flex items-center justify-center bg-center bg-cover"
    style={{
      backgroundImage: "url('/images/contact/hero-contact.jpg')",
    }}
  >
    <div className="w-full text-center bg-black/25 py-16 px-4">
      <h1 className="text-white text-5xl font-bold mb-2">Contact Us</h1>
      <div className="w-16 h-1 bg-orange-400 mx-auto mb-6 rounded"></div>
      <p className="text-white text-xl font-normal">
        We'd love to hear from you. Reach out to us with your questions, feedback, or inquiries.
      </p>
    </div>
  </section>
);

export default HeroContact;