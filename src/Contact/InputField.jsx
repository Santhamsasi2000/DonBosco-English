const InputField = ({
  label,
  name,
  type,
  placeholder,
  formik,
}) => {

  const isError   = formik.touched[name] && formik.errors[name];
  const isSuccess = formik.touched[name] && !formik.errors[name] && formik.values[name];

  return (
    <div className="flex flex-col gap-1.5">

      {/* ── Label ── */}
      <label
        htmlFor={name}
        className="text-xs sm:text-sm font-semibold text-blue-900 flex items-center gap-1"
      >
        {label}
        <span className="text-red-500">*</span>
      </label>

      {/* ── Input Wrapper ── */}
      <div className="relative">

        {/* Input */}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={`
            w-full px-4 py-3 pr-10
            rounded-xl border-2 text-sm
            text-blue-900 placeholder-blue-300
            outline-none transition-all duration-300
            ${isError
              ? "border-red-400 bg-red-50 focus:border-red-500"
              : isSuccess
              ? "border-green-400 bg-green-50 focus:border-green-500"
              : "border-blue-100 bg-blue-50 hover:border-blue-300 focus:border-blue-500 focus:bg-white"
            }
          `}
        />

        {/* ── Status Icon ── */}
        {isError && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {isSuccess && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* ── Error Message ── */}
      {isError && (
        <p className="text-red-500 text-xs flex items-center gap-1.5 font-medium">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {formik.errors[name]}
        </p>
      )}

    </div>
  );
};

export default InputField;