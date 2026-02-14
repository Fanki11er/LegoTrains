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
import useAnalytics from "../../../Hooks/useAnalytics";
import { GradientTextWrapper } from "../../Atoms/GradientTextWrapper/GradientTextWrapper.styles";
import { FormOneLineSpan } from "../../Atoms/FormOneLineSpan/FormOneLineSpan.styles";

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
  const { trackUserEvent } = useAnalytics();

  const initialValues = {
    [EMAIL_FIELD]: "",
    [PASSWORD_FIELD]: "",
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={yupEmailValidationShape}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setAuthError("");

        trackUserEvent("Account Login Event");

        setSubmitting(true);
        loginUserWithEmailAndPassword(
          values[EMAIL_FIELD],
          values[PASSWORD_FIELD],
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
            <FormOneLineSpan>
              <GradientTextWrapper>Don't have account?</GradientTextWrapper>

              <FormRedirectionLink to={accountRegistrationPath}>
                Register
              </FormRedirectionLink>
            </FormOneLineSpan>
            <FormPaddingSpan>
              <GradientTextWrapper>or</GradientTextWrapper>
            </FormPaddingSpan>
            <StyledSubmitButton
              type={"button"}
              onClick={() => {
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
