import { Formik } from "formik";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../router/routerPaths";
import { createUserData } from "../../../firebase/writeToDbFunctions";
import FormikForm from "../Form/FormikForm";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import {
  FormRedirectionLink,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "../Form/FormikForm.styles";
import FormInput from "../FormInput/FormInput";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import {
  EMAIL_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD,
  REPEAT_PASSWORD_FIELD,
} from "../../../Constants/constants";
import { yupRegistrationValidationShape } from "../../../Utilities/validators/validators";

const { userDashboardRouterPath } = paths;

type FormValues = {
  [NAME_FIELD]: string;
  [EMAIL_FIELD]: string;
  [PASSWORD_FIELD]: string;
  [REPEAT_PASSWORD_FIELD]: string;
};

const UpgradeAccountForm = () => {
  const { upgradeAccount } = useAuth();
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
        upgradeAccount(values[EMAIL_FIELD], values[PASSWORD_FIELD])
          .then(async (userCredentials) => {
            await createUserData(userCredentials.user.uid, values[NAME_FIELD]);
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
        <FormikForm header={"Upgrade account"}>
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
            <StyledSubmitButton type={"submit"}>Upgrade</StyledSubmitButton>
          )}
          <FormRedirectionLink to={userDashboardRouterPath}>
            Back to dashboard
          </FormRedirectionLink>
        </FormikForm>
      )}
    </Formik>
  );
};

export default UpgradeAccountForm;
