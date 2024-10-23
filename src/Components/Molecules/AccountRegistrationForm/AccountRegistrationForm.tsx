import { Formik } from "formik";
import {
  FormRedirectionLink,
  StyledAccountRegistrationForm,
  StyledAccountRegistrationFormHeader,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "./AccountRegistrationForm.styles";
import FormInput from "../FormInput/FormInput";
import * as Yup from "yup";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import useAuth from "../../../Hooks/useAuth";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
const NAME_FIELD = "name";
const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";
const REPEAT_PASSWORD_FIELD = "repeatedPassword";

type FormValues = {
  [NAME_FIELD]: string;
  [EMAIL_FIELD]: string;
  [PASSWORD_FIELD]: string;
  [REPEAT_PASSWORD_FIELD]: string;
};

const yupRegistrationValidationShape = Yup.object({
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

const AccountRegistrationForm = () => {
  const { signUpWithEmailAndPassword, authError } = useAuth();
  const initialValues = {
    [NAME_FIELD]: "",
    [EMAIL_FIELD]: "",
    [PASSWORD_FIELD]: "",
    [REPEAT_PASSWORD_FIELD]: "",
  };

  const onSubmit = async (values: FormValues) => {
    await signUpWithEmailAndPassword(
      values[EMAIL_FIELD],
      values[PASSWORD_FIELD],
      values[NAME_FIELD]
    );
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={yupRegistrationValidationShape}
      onSubmit={async (values) => await onSubmit(values)}
    >
      {({ isSubmitting }) => (
        <StyledAccountRegistrationForm noValidate>
          <StyledAccountRegistrationFormHeader>
            Registration
          </StyledAccountRegistrationFormHeader>
          {authError && <FormError>{authError}</FormError>}
          <StyledInputsWrapper>
            <FormInput name={NAME_FIELD} labelText={"Name"} />
            <FormInput name={EMAIL_FIELD} labelText={"Email"} type={"email"} />
            <FormInput
              name={PASSWORD_FIELD}
              labelText={"Password"}
              type={"password"}
            />
            <FormInput
              name={REPEAT_PASSWORD_FIELD}
              labelText={"Repeated Password"}
              type={"password"}
            />
          </StyledInputsWrapper>
          {isSubmitting ? (
            <SubmitIndicator />
          ) : (
            <StyledSubmitButton type={"submit"}>Register</StyledSubmitButton>
          )}
          <div>
            Already have account? //!! Redirect
            <FormRedirectionLink to={""}>Sign In</FormRedirectionLink>{" "}
          </div>
        </StyledAccountRegistrationForm>
      )}
    </Formik>
  );
};

export default AccountRegistrationForm;
