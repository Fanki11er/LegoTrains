import {
  ErrorIndicatorImage,
  ErrorIndicatorText,
  ErrorIndicatorWrapper,
} from "./ErrorIndicator.styles";
import errorIndicatorImg from "../../../assets/svg/ErrorIndicatorImage.svg";

type Props = {
  message: string;
};
const ErrorIndicator = ({ message }: Props) => {
  return (
    <ErrorIndicatorWrapper>
      <ErrorIndicatorImage src={errorIndicatorImg} alt={"Error image"} />
      <ErrorIndicatorText>{message}</ErrorIndicatorText>
    </ErrorIndicatorWrapper>
  );
};

export default ErrorIndicator;
