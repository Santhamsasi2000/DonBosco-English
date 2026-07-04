const ProgressBar = ({ progress }) => {
  return (
    <div className="mb-6">

      {/* Label Row */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-blue-400 font-medium">
          Form Completion
        </span>
        <span
          className={`text-xs font-bold transition-colors duration-300 ${
            progress === 100 ? "text-green-600" : "text-blue-600"
          }`}
        >
          {progress}%
        </span>
      </div>

      {/* Track */}
      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            progress === 100 ? "bg-green-500" : "bg-blue-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Success Message */}
      {progress === 100 && (
        <p className="text-green-600 text-xs font-semibold mt-1.5 text-right">
          ✅ All fields filled! Ready to submit.
        </p>
      )}

    </div>
  );
};

export default ProgressBar;