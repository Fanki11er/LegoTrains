import { useEffect, useState } from "react";
import InSceneHTMLWrapper from "../../Atoms/InSceneHTMLWrapper/InSceneHTMLWrapper";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import {
  FinishedSetCongratulationsBannerHeader,
  FinishedSetCongratulationsBannerImage,
  FinishedSetCongratulationsBannerText,
  FinishedSetCongratulationsBannerTextWrapper,
  FinishedSetCongratulationsBannerWrapper,
} from "./FinishedSetCongratulationsBanner.styles";
import { InSceneArrangeModelButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";
import congratulationsImage from "../../../assets/svg/CongratulationsBanner.svg"; // Adjust the path as necessary
import useFocusCamera from "../../../Hooks/useFocusCamera";
import { SCENE_OFFSET } from "../../../Constants/sceneOffset";

export const FinishedSetCongratulationsBanner = () => {
  const [isInformationRed, setIsInformationRed] = useState(false);
  const {
    handleCheckIfSetIsFinished,
    handleGetLegoSetNumber,
    handleGetSetRootMarker,
  } = useTrainInstruction();

  const { handleFocusCamera } = useFocusCamera();

  useEffect(() => {
    const setRootMarker = handleGetSetRootMarker();
    if (isInformationRed) {
      handleFocusCamera(setRootMarker, SCENE_OFFSET);
    }
  }, [isInformationRed, handleGetSetRootMarker, handleFocusCamera]);

  const handleSetIsInformationRed = () => {
    setIsInformationRed(true);
  };

  return (
    <>
      {!isInformationRed && handleCheckIfSetIsFinished() ? (
        <InSceneHTMLWrapper>
          <FinishedSetCongratulationsBannerWrapper>
            <FinishedSetCongratulationsBannerImage src={congratulationsImage} />
            <FinishedSetCongratulationsBannerTextWrapper>
              <FinishedSetCongratulationsBannerHeader>
                Congratulations!
              </FinishedSetCongratulationsBannerHeader>
              <FinishedSetCongratulationsBannerText>
                {`You have built ${handleGetLegoSetNumber()} set.`}
              </FinishedSetCongratulationsBannerText>
            </FinishedSetCongratulationsBannerTextWrapper>
            <InSceneArrangeModelButton
              onClick={() => {
                handleSetIsInformationRed();
              }}
            >
              OK
            </InSceneArrangeModelButton>
          </FinishedSetCongratulationsBannerWrapper>
        </InSceneHTMLWrapper>
      ) : null}
    </>
  );
};

export default FinishedSetCongratulationsBanner;
