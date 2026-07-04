import { useFormik } from "formik";
import Swal from "sweetalert2";
import { contactSchema, initialValues } from "../utils/contactSchema";
import { formFields }                   from "../data/contactData";
import InputField                        from "./InputField";
import TextareaField                     from "./TextareaField";
import ProgressBar                       from "./ProgressBar";

const ContactForm = () => {

  /* ── Formik ── */
  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    validateOnChange: true,
    validateOnBlur:   true,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        /*
          Replace with your API:
          await axios.post("/api/contact", values);
        */
        await new Promise((res) => setTimeout(res, 1200));

        Swal.fire({
          icon:            "success",
          title:           "Message Sent! 🎉",
          html: `
            <div style="text-align:center">
              <p style="color:#4B5563;font-size:14px;margin-bottom:8px">
                Thank you,
                <strong style="color:#074573">${values.name}</strong>!
              </p>
              <p style="color:#6B7280;font-size:13px">
                We'll reply to
                <strong style="color:#16a34a">${values.email}</strong>
                <br/>within 1–2 business days.
              </p>
            </div>
          `,
          confirmButtonText:  "Awesome! 👍",
          confirmButtonColor: "#074573",
          background:         "#f0fdf4",
          iconColor:          "#16a34a",
          timer:              6000,
          timerProgressBar:   true,
        });

        resetForm();

      } catch {
        Swal.fire({
          icon:               "error",
          title:              "Something went wrong!",
          text:               "Please try again or call us directly.",
          confirmButtonColor: "#dc2626",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  /* ── Progress Calculation ── */
  const filledFields = Object.values(formik.values).filter(Boolean).length;
  const totalFields  = Object.keys(initialValues).length;
  const progress     = Math.round((filledFields / totalFields) * 100);
  const isDisabled   = formik.isSubmitting || !formik.isValid || !formik.dirty;

  return (
    <div>

      {/* ── Heading ── */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
          {/* Paper plane icon */}
          <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Send a Message
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
          Contact Form
        </h2>
        <div className="w-10 h-1 bg-green-500 mt-2 rounded-full" />
      </div>

      {/* ── Form Card ── */}
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 sm:p-8">

        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Form */}
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          className="space-y-5"
        >

          {/* Name + Phone : half */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {formFields
              .filter((f) => f.half)
              .map((field) => (
                <InputField
                  key={field.name}
                  {...field}
                  formik={formik}
                />
              ))}
          </div>

          {/* Email + Subject : full */}
          {formFields
            .filter((f) => !f.half)
            .map((field) => (
              <InputField
                key={field.name}
                {...field}
                formik={formik}
              />
            ))}

          {/* Message */}
          <TextareaField formik={formik} />

          {/* ── Submit Button ── */}
          <button
            type="submit"
            disabled={isDisabled}
            className={`
              w-full flex items-center justify-center gap-3
              text-white font-bold
              py-3.5 sm:py-4 rounded-xl
              text-sm sm:text-base
              transition-all duration-300 shadow-lg
              active:scale-95
              ${formik.isSubmitting
                ? "bg-blue-400 cursor-wait"
                : isDisabled
                ? "bg-blue-300 cursor-not-allowed opacity-60"
                : "bg-blue-900 hover:bg-green-600 hover:shadow-green-200 cursor-pointer"
              }
            `}
          >
            {formik.isSubmitting ? (
              <>
                {/* Spinner */}
                <svg
                  className="animate-spin w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12" cy="12" r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Sending Your Message...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Send Message
              </>
            )}
          </button>

          {/* Note */}
          <p className="text-center text-xs text-blue-300">
            🔒 Your information is safe with us. We reply within{" "}
            <span className="text-green-600 font-semibold">
              1–2 business days.
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;