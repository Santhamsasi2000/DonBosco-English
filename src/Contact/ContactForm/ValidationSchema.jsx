import * as Yup from "yup";

const noNumbersRegex = /^[^0-9]*$/;

export const ValidationSchema = Yup.object({
  name: Yup.string()
    .matches(noNumbersRegex, "Name must not contain numbers")
    .min(3, "Name must be at least 3 characters long")
    .required("Your Name is required"),
  email: Yup.string().email("Invalid email address"),
  mobileNumber: Yup.string()
    // Dubai number: must start with 5 and have total 9 digits
    .matches(/^5\d{8}$/, "Please enter a valid Dubai mobile number (e.g. 542458604)")
    .required("Mobile number is required (e.g. 542458604)"),
  address: Yup.string()
    .min(3, "Address must be at least 3 characters long")
    .required("Address is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters long")
    .required("Subject is required"),
  message: Yup.string().max(500, "Message cannot exceed 500 characters"),
});
