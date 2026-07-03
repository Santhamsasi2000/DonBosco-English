import { FaBus } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineDomain } from "react-icons/md";

export default function QuickLinks() {

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Explore Our School
        </h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 gap-10">
          {links.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-2xl p-12 text-center shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center text-blue-600 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-sky-600">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 const links = [
    {
      title: "Admission 2026 - 27",
      icon: <HiOutlineClipboardDocumentList size={55} />,
    },
    {
      title: "School Calendar",
      icon: <FiCalendar size={55} />,
    },
    {
      title: "Transport",
      icon: <FaBus size={55} />,
    },
    {
      title: "Infrastructure",
      icon: <MdOutlineDomain size={55} />,
    },
  ];    