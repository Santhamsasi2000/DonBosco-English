import { contactCards } from "../data/contactData";

/* ── SVG Icons ── */
const icons = {
  "Our Address": (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  ),
  "Phone Number": (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  ),
  "Email Address": (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  ),
  "Office Hours": (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ),
};

const InfoCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {contactCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-blue-100 p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Icon */}
            <div
              className={`
                w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                flex items-center justify-center
                shadow-md mb-4
                transition-all duration-300
                ${card.color === "blue"
                  ? "bg-blue-900 group-hover:bg-green-600"
                  : "bg-green-600 group-hover:bg-blue-900"
                }
              `}
            >
              {icons[card.title]}
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold text-blue-900 mb-2">
              {card.title}
            </h3>

            {/* Lines */}
            <div className="space-y-0.5">
              {card.lines.map((line, li) =>
                card.href ? (
                  <a
                    key={li}
                    href={card.href}
                    className="block text-xs sm:text-sm text-blue-500 hover:text-green-600 font-medium transition-colors duration-200"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={li} className="text-xs sm:text-sm text-blue-400">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;