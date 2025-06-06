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
import useAnalytics from "../../../Hooks/useAnalytics";

export const FinishedSetCongratulationsBanner = () => {
  const {
    handleCheckIfSetIsFinished,
    handleGetLegoSetNumber,
    handleGetSetRootMarker,
  } = useTrainInstruction();

  const [isInformationRed, setIsInformationRed] = useState(() => {
    const finishedSetCookie = localStorage.getItem(
      `Model_${handleGetLegoSetNumber()}_Finished_InformationRed`
    );
    return !!finishedSetCookie;
  });

  const { handleFocusCamera } = useFocusCamera();
  const { trackModelEvent } = useAnalytics();

  useEffect(() => {
    const setRootMarker = handleGetSetRootMarker();
    if (isInformationRed) {
      handleFocusCamera(setRootMarker, SCENE_OFFSET);
    }
  }, [isInformationRed, handleGetSetRootMarker, handleFocusCamera]);

  const handleSetIsInformationRed = () => {
    trackModelEvent("User Finished Set", handleGetLegoSetNumber());
    setIsInformationRed(true);
    localStorage.setItem(
      `Model_${handleGetLegoSetNumber()}_Finished_InformationRed`,
      "true"
    );
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
                {`You have built ${
                  handleGetLegoSetNumber().split("_")[1] || "????"
                } set.`}
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
