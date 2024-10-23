import { Formik } from "formik";
import useAuth from "../../../Hooks/useAuth";
import FormikForm from "../Form/FormikForm";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import {
  FormRedirectionLink,
  StyledInputsWrapper,
  StyledSubmitButton,
} from "../Form/FormikForm.styles";
import FormInput from "../FormInput/FormInput";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../router/routerPaths";
const { userDashboardRouterPath, accountRegistrationPath } = paths;

const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";

type FormValues = {
  [EMAIL_FIELD]: string;
  [PASSWORD_FIELD]: string;
};

const AccountLoginForm = () => {
  const { loginUserWithEmailAndPassword, loginUserAnonymously, authError } =
    useAuth();
  const navigate = useNavigate();

  const initialValues = {
    [EMAIL_FIELD]: "",
    [PASSWORD_FIELD]: "",
  };

  const onSubmit = async (values: FormValues) => {
    loginUserWithEmailAndPassword(values[EMAIL_FIELD], values[PASSWORD_FIELD]);
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) =>
        onSubmit(values).then(() => {
          resetForm();
          navigate(userDashboardRouterPath);
        })
      }
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
              <div>or</div>
              {isSubmitting ? (
                <SubmitIndicator />
              ) : (
                <StyledSubmitButton
                  type={"button"}
                  onClick={async () => {
                    setSubmitting(true);
                    await loginUserAnonymously().then(() => {
                      resetForm();
                      navigate(userDashboardRouterPath);
                    });
                    setSubmitting(false);
                  }}
                >
                  Login anonymously
                </StyledSubmitButton>
              )}
            </>
          )}
          <div>
            Don't have account?
            <FormRedirectionLink to={accountRegistrationPath}>
              Register
            </FormRedirectionLink>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default AccountLoginForm;
