import {
  ErrorFallbackImage,
  ErrorFallbackText,
  ErrorFallbackWrapper,
} from "./ErrorFallback.styles";
import errorFallbackImage from "../../../assets/svg/ErrorFallbackImage.svg";

type Props = {
  message: string;
};
const ErrorFallback = ({ message }: Props) => {
  return (
    <ErrorFallbackWrapper>
      <ErrorFallbackImage src={errorFallbackImage} alt={"Error image"} />
      <ErrorFallbackText>{message}</ErrorFallbackText>
    </ErrorFallbackWrapper>
  );
};

export default ErrorFallback;
