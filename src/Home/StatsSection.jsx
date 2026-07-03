import { FaClock, FaAward, FaUsers, FaSmile } from "react-icons/fa";
const StatsSection = () => {

  return (
    <div className="bg-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-16 lg:gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative bg-green-100 text-center py-12 px-6 shadow-lg rounded-xl"
          >
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full
               bg-blue-600 text-white text-2xl border-4 border-white">
                {item.icon}
              </div>
            </div>

            {/* Number */}
            <h2 className="text-4xl font-bold text-blue-800 mt-4">
              {item.number}
            </h2>

            {/* Label */}
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection

const stats = [
    {
      icon: <FaClock />,
      number: "2018", 
      label: "Year of Establishment",
    },
    {
      icon: <FaAward />,
      number: "100%",
      label: "Result",
    },
     {
      icon: <FaSmile />,
      number: "50",
      label: "Staff",
    },
    {
      icon: <FaUsers />,
      number: "600",
      label: "Student",
    },
  ];