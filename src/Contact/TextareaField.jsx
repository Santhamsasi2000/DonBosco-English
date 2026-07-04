const TextareaField = ({ formik }) => {

  const isError   = formik.touched.message && formik.errors.message;
  const isSuccess = formik.touched.message && !formik.errors.message && formik.values.message;
  const charCount = formik.values.message.length;

  return (
    <div className="flex flex-col gap-1.5">

      {/* ── Label ── */}
      <label
        htmlFor="message"
        className="text-xs sm:text-sm font-semibold text-blue-900 flex items-center gap-1.5"
      >
        {/* Chat Icon */}
        <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
        Your Message
        <span className="text-red-500">*</span>
      </label>

      {/* ── Textarea Wrapper ── */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message here... (min. 20 characters)"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`
            w-full px-4 py-3 pb-8
            rounded-xl border-2 text-sm
            text-blue-900 placeholder-blue-300
            outline-none resize-none
            transition-all duration-300
            ${isError
              ? "border-red-400 bg-red-50 focus:border-red-500"
              : isSuccess
              ? "border-green-400 bg-green-50 focus:border-green-500"
              : "border-blue-100 bg-blue-50 hover:border-blue-300 focus:border-blue-500 focus:bg-white"
            }
          `}
        />

        {/* ── Character Counter ── */}
        <div
          className={`
            absolute bottom-3 right-3
            text-xs font-semibold px-2 py-0.5 rounded-full
            transition-colors duration-300
            ${charCount > 450
              ? "bg-red-100 text-red-500"
              : charCount > 300
              ? "bg-yellow-100 text-yellow-600"
              : charCount >= 20
              ? "bg-green-100 text-green-600"
              : "bg-blue-100 text-blue-400"
            }
          `}
        >
          {charCount} / 500
        </div>
      </div>

      {/* ── Error Message ── */}
      {isError && (
        <p className="text-red-500 text-xs flex items-center gap-1.5 font-medium">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {formik.errors.message}
        </p>
      )}

    </div>
  );
};

export default TextareaField;