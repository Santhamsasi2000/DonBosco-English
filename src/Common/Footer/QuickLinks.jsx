import { NavLink } from "react-router-dom";

const QuickLinks = () => {

  const links = [
    { name: "Admissions", path: "/admissions" },
    { name: "Fees Payment", path: "/fees-payment" },
    { name: "Facilities", path: "/facilities" },
    { name: "Academic Calendar", path: "/academic-calendar" },
    { name: "Gallery", path: "/gallery" }
  ];

  return (
    <div>
      <div className="flex flex-col items-start">
        <p className="text-red-200 font-bold text-lg xs:text-xl mb-2">
          Quick Links
        </p>

        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="hover:underline text-white mb-2 text-sm xs:text-base"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;