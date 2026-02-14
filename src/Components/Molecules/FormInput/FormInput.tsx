import { useField } from "formik";
import {
  GradientLabelSpan,
  StyledFormInput,
  StyledFormInputError,
  StyledFormInputLabel,
} from "./FormInput.styles";

type Props = {
  name: string;
  placeholderText?: string;
  labelText: string;
  type?: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
};
const FormInput = ({
  name,
  placeholderText,
  labelText,
  type,
  attributes,
}: Props) => {
  const [fieldProps, meta] = useField(name);

  return (
    <StyledFormInputLabel>
      <GradientLabelSpan>{labelText}</GradientLabelSpan>

      <StyledFormInput
        type={type || "text"}
        placeholder={placeholderText}
        {...fieldProps}
        {...attributes}
        $error={meta.touched && meta.error ? meta.error : undefined}
      />
      {meta.touched && meta.error && (
        <StyledFormInputError>{meta.error}</StyledFormInputError>
      )}
    </StyledFormInputLabel>
  );
};

export default FormInput;
