import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const InformationContact = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-serif font-semibold mb-10 text-gray-800">
          Contact Information
        </h2>

        <div className="space-y-10">

          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="bg-pink-100 p-4 rounded-xl text-pink-600 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">
                Shanthi Rani Matriculation Higher Secondary School
                <br />
                Hosur, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-5">
            <div className="bg-green-100 p-4 rounded-xl text-green-700 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">04565 284 919</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <div className="bg-red-100 p-4 rounded-xl text-red-600 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">info@shanthiranischool.edu</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-start gap-5">
            <div className="bg-pink-100 p-4 rounded-xl text-pink-600 text-xl">
              <FaClock />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office Hours</h3>
              <p className="text-gray-600">
                Monday – Friday: 8:00 AM - 4:00 PM
                <br />
                Saturday: 8:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InformationContact;