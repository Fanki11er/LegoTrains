import workingIndicatorSVG from "../../../assets/svg/WorkingIndicator.svg";
import { SubmitIndicatorImg } from "./SubmitIndicator.styles";

const SubmitIndicator = () => {
  return (
    <>
      <SubmitIndicatorImg src={workingIndicatorSVG} alt={"Submit indicator"} />
    </>
  );
};

export default SubmitIndicator;
