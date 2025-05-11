import workingIndicatorSVG from "../../../assets/svg/WorkingIndicator.svg";
import { SubmitIndicatorImg } from "./SubmitIndicator.styles";
type Props = {
  size?: number;
};

const SubmitIndicator = ({ size }: Props) => {
  return (
    <SubmitIndicatorImg
      src={workingIndicatorSVG}
      $size={size}
      alt={"Submit indicator"}
    />
  );
};

export default SubmitIndicator;
