import { PropsWithChildren } from "react";
import {
  StyledAccountRegistrationFormHeader,
  StyledFormikForm,
} from "./FormikForm.styles";
import { GradientTextWrapper } from "../../Atoms/GradientTextWrapper/GradientTextWrapper.styles";

type Props = {
  header: string;
};

const FormikForm = ({ children, header }: Props & PropsWithChildren) => {
  return (
    <StyledFormikForm noValidate>
      <StyledAccountRegistrationFormHeader>
        <GradientTextWrapper>{header}</GradientTextWrapper>
      </StyledAccountRegistrationFormHeader>
      {children}
    </StyledFormikForm>
  );
};

export default FormikForm;
