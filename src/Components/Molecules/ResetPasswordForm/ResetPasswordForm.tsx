import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Formik } from "formik";
import FormikForm from "../../../Components/Molecules/Form/FormikForm";
import { FormError } from "../../../Components/Atoms/FormError/FormError.styles";
import {
  FormRedirectionLink,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "../../../Components/Molecules/Form/FormikForm.styles";
import FormInput from "../../../Components/Molecules/FormInput/FormInput";
import SubmitIndicator from "../../../Components/Molecules/SubmitIndicator/SubmitIndicator";
import { paths } from "../../../router/routerPaths";
import { OkStatus } from "../../../Components/Atoms/OkStatus/OkStatus.styles";
import { EMAIL_FIELD } from "../../../Constants/constants";
import { yupEmailValidationShape } from "../../../Utilities/validators/validators";
import useAnalytics from "../../../Hooks/useAnalytics";

const { loginPath } = paths;

type FormValues = {
  [EMAIL_FIELD]: string;
};

const ResetPasswordForm = () => {
  const { resetPassword } = useAuth();
  const [authError, setAuthError] = useState("");
  const [status, setStatus] = useState("");
  const { trackUserEvent } = useAnalytics();

  const initialValues = {
    [EMAIL_FIELD]: "",
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={yupEmailValidationShape}
      onSubmit={async (values, { setSubmitting }) => {
        setAuthError("");
        setStatus("");

        trackUserEvent("Reset Password Event");

        resetPassword(values[EMAIL_FIELD])
          .then(() => {
            setSubmitting(false);
            setStatus("Check your email inbox");
          })
          .catch((err) => {
            setAuthError(err.message);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm header={"Reset password"}>
          {authError && <FormError>{authError}</FormError>}
          {status && <OkStatus>{status}</OkStatus>}
          <StyledInputsWrapper>
            <FormInput name={EMAIL_FIELD} labelText={"Email"} type={"email"} />
          </StyledInputsWrapper>
          {isSubmitting ? (
            <SubmitIndicator />
          ) : (
            <StyledSubmitButton type={"submit"}>Reset</StyledSubmitButton>
          )}

          <FormRedirectionLink to={loginPath}>
            Back to login
          </FormRedirectionLink>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
