import { PropsWithChildren } from "react";
import {
  StyledAccountRegistrationFormHeader,
  StyledFormikForm,
} from "./FormikForm.styles";

type Props = {
  header: string;
};

const FormikForm = ({ children, header }: Props & PropsWithChildren) => {
  return (
    <StyledFormikForm noValidate>
      <StyledAccountRegistrationFormHeader>
        {header}
      </StyledAccountRegistrationFormHeader>
      {children}
    </StyledFormikForm>
  );
};

export default FormikForm;
