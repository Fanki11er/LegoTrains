import {
  ErrorFallbackImage,
  ErrorFallbackText,
  ErrorFallbackWrapper,
} from "./ErrorFallback.styles";
import errorFallbackImage from "../../../assets/svg/ErrorFallbackImage.svg";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  message: string;
};
const ErrorFallback = ({ message, children }: Props) => {
  return (
    <ErrorFallbackWrapper>
      <ErrorFallbackImage src={errorFallbackImage} alt={"Error image"} />
      <ErrorFallbackText>{message}</ErrorFallbackText>
      {children}
    </ErrorFallbackWrapper>
  );
};

export default ErrorFallback;
