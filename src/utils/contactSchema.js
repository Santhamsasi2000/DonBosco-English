import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s.]+$/, "Name can only contain letters")
    .required("Full name is required"),

  phone: Yup.string()
    .trim()
    .matches(/^[6-9][0-9]{9}$/, "Enter a valid Indian mobile number")
    .required("Phone number is required"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email address is required"),

  subject: Yup.string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters")
    .required("Subject is required"),

  message: Yup.string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message must not exceed 500 characters")
    .required("Message is required"),
});

export const initialValues = {
  name:    "",
  phone:   "",
  email:   "",
  subject: "",
  message: "",
};