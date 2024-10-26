import { useState } from "react";
import { Formik } from "formik";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormikForm from "../Form/FormikForm";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import {
  FormChoicesWrapper,
  FormPaddingSpan,
  FormRedirectionLink,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "../Form/FormikForm.styles";
import FormInput from "../FormInput/FormInput";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import { paths } from "../../../router/routerPaths";
import { EMAIL_FIELD, PASSWORD_FIELD } from "../../../Constants/constants";
import { yupEmailValidationShape } from "../../../Utilities/validators/validators";

const { userDashboardRouterPath, accountRegistrationPath, resetPasswordPath } =
  paths;

type FormValues = {
  [EMAIL_FIELD]: string;
  [PASSWORD_FIELD]: string;
};

const AccountLoginForm = () => {
  const { loginUserWithEmailAndPassword, loginUserAnonymously } = useAuth();
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    [EMAIL_FIELD]: "",
    [PASSWORD_FIELD]: "",
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={yupEmailValidationShape}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setAuthError("");
        loginUserWithEmailAndPassword(
          values[EMAIL_FIELD],
          values[PASSWORD_FIELD]
        )
          .then(() => {
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
      {({ isSubmitting, setSubmitting, resetForm }) => (
        <FormikForm header={"Login"}>
          {authError && <FormError>{authError}</FormError>}
          <StyledInputsWrapper>
            <FormInput name={EMAIL_FIELD} labelText={"Email"} type={"email"} />
            <FormInput
              name={PASSWORD_FIELD}
              labelText={"Password"}
              type={"password"}
            />
          </StyledInputsWrapper>
          {isSubmitting ? (
            <SubmitIndicator />
          ) : (
            <>
              <StyledSubmitButton type={"submit"}>Login</StyledSubmitButton>
            </>
          )}
          <FormChoicesWrapper>
            <span>
              Don't have account?
              <FormRedirectionLink to={accountRegistrationPath}>
                Register
              </FormRedirectionLink>
            </span>
            <FormPaddingSpan>or</FormPaddingSpan>
            <StyledSubmitButton
              type={"button"}
              onClick={async () => {
                setAuthError("");
                setSubmitting(true);
                loginUserAnonymously()
                  .then(() => {
                    resetForm();
                    navigate(userDashboardRouterPath);
                    setSubmitting(false);
                  })
                  .catch((err) => {
                    setAuthError(err.message);
                    setSubmitting(false);
                  });
              }}
            >
              Login anonymously
            </StyledSubmitButton>
          </FormChoicesWrapper>
          <FormRedirectionLink to={resetPasswordPath}>
            Forgot password?
          </FormRedirectionLink>
        </FormikForm>
      )}
    </Formik>
  );
};

export default AccountLoginForm;
