const MapSection = () => {
  return (
    <div className="flex flex-col gap-5">

      {/* ── Heading ── */}
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
          {/* Pin Icon */}
          <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Find Us on Map
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
          Our Location
        </h2>
        <div className="w-10 h-1 bg-green-500 mt-2 rounded-full" />
      </div>

      {/* ── Google Map ── */}
      <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-blue-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.027727457653!2d78.68583437591494!3d9.848038090249752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0057b253db1cd9%3A0x8a367d183f179eb4!2sDon%20Bosco%20Higher%20Secondary%20School%20Pallithammam!5e0!3m2!1sen!2sin!4v1783145843649!5m2!1sen!2sin"
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Don Bosco School Map"
        />
      </div>

      {/* ── Address Card ── */}
      <div className="bg-white rounded-2xl border border-blue-100 shadow-md p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">

        {/* School Icon */}
        <div className="bg-blue-900 rounded-xl p-3 flex-shrink-0">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>

        {/* Address */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-blue-900 text-sm sm:text-base mb-1">
            Don Bosco Higher Secondary School
          </h4>
          <p className="text-blue-400 text-xs sm:text-sm leading-relaxed">
            Sagaya Nagar, Pallithammam,<br />
            Kalaiyarkoil Via – 630551,<br />
            Sivaganga, Tamil Nadu, India.
          </p>
        </div>

        {/* Directions Button */}
        <a
          href="https://www.google.com/maps/dir//Don+Bosco+Higher+Secondary+School+Pallithammam,+RMXQ%2BPPM,+Sagaya+Nagar,+Puliyadithammam,+Sivaganga+NH-230,+Madurai+Thondi+Road+Sivaganga,+Nedungulam,+Tamil+Nadu+630551"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 text-white text-xs font-bold px-4 py-3 rounded-xl flex-shrink-0 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {/* Direction Icon */}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Get Directions
        </a>

      </div>
    </div>
  );
};

export default MapSection;