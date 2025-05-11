import { useField } from "formik";
import {
  StyledFormInput,
  StyledFormInputError,
  StyledFormInputLabel,
} from "./FormInput.styles";

type Props = {
  name: string;
  placeholderText?: string;
  labelText: string;
  type?: string;
};
const FormInput = ({ name, placeholderText, labelText, type }: Props) => {
  const [fieldProps, meta] = useField(name);

  return (
    <StyledFormInputLabel>
      {labelText}
      <StyledFormInput
        type={type || "text"}
        placeholder={placeholderText}
        {...fieldProps}
        $error={meta.touched && meta.error ? meta.error : undefined}
      />
      {meta.touched && meta.error && (
        <StyledFormInputError>{meta.error}</StyledFormInputError>
      )}
    </StyledFormInputLabel>
  );
};

export default FormInput;
