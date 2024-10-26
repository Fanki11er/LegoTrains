import * as Yup from "yup";
import {
  EMAIL_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD,
  REPEAT_PASSWORD_FIELD,
} from "../../Constants/constants";

export const yupEmailValidationShape = Yup.object({
  [EMAIL_FIELD]: Yup.string()
    .email("Wrong email format")
    .required("Email is required"),
});

export const yupRegistrationValidationShape = Yup.object({
  [NAME_FIELD]: Yup.string()
    .min(2, "Need at least 2 characters")
    .max(30, "Maximum 30 characters")
    .required("Name is required"),
  [PASSWORD_FIELD]: Yup.string()
    .min(8, "Need at least 8 characters")
    .required("Password is required"),
  [REPEAT_PASSWORD_FIELD]: Yup.string()
    .oneOf([Yup.ref(PASSWORD_FIELD)], "Passwords are different")
    .required("Password is required"),
  [EMAIL_FIELD]: Yup.string()
    .email("Wrong email format")
    .required("Email is required"),
});
