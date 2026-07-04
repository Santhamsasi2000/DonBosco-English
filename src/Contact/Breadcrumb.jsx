const Breadcrumb = ({ pages = [] }) => {
  return (
    <div className="bg-white border-b border-blue-100 px-4 py-3">
      <div className="max-w-7xl mx-auto text-xs sm:text-sm text-blue-600 flex items-center gap-2 flex-wrap">
        {pages.map((page, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            <span
              className={
                i === pages.length - 1
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600 cursor-pointer transition-colors duration-200"
              }
            >
              {page}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;