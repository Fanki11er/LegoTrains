import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import useAuth from "../../../Hooks/useAuth";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import FormikForm from "../Form/FormikForm";
import {
  FormRedirectionLink,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "../Form/FormikForm.styles";
import { paths } from "../../../router/routerPaths";
import {
  EMAIL_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD,
  REPEAT_PASSWORD_FIELD,
} from "../../../Constants/constants";
import { yupRegistrationValidationShape } from "../../../Utilities/validators/validators";

const { userDashboardRouterPath, loginPath } = paths;

type FormValues = {
  [NAME_FIELD]: string;
  [EMAIL_FIELD]: string;
  [PASSWORD_FIELD]: string;
  [REPEAT_PASSWORD_FIELD]: string;
};

const AccountRegistrationForm = () => {
  const { signUpWithEmailAndPassword, setUsername } = useAuth();
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    [NAME_FIELD]: "",
    [EMAIL_FIELD]: "",
    [PASSWORD_FIELD]: "",
    [REPEAT_PASSWORD_FIELD]: "",
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={yupRegistrationValidationShape}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setAuthError("");
        signUpWithEmailAndPassword(values[EMAIL_FIELD], values[PASSWORD_FIELD])
          .then(async (userCredentials) => {
            await setUsername(userCredentials.user, values[NAME_FIELD]).catch(
              (err) => {
                setAuthError(err.message);
              }
            );
            resetForm();
            setSubmitting(false);
            navigate(userDashboardRouterPath);
          })
          .catch((err) => {
            setAuthError(err.message);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm header={"Registration"}>
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
            Already have account?
            <FormRedirectionLink to={loginPath}>Login</FormRedirectionLink>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default AccountRegistrationForm;
