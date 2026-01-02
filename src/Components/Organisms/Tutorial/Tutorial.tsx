import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";
import {
  HideTutorialButton,
  HideTutorialIcon,
  ShowTutorialButton,
  ShowTutorialIcon,
  TutorialButtonsWrapper,
  TutorialMinifigImage,
  TutorialTextIcon,
  TutorialWrapper,
} from "./Tutorial.styles";
import TutorialPage from "../../Molecules/TutorialPage/TutorialPage";
import {
  TutorialPageText,
  TutorialPageTextHelperHorizontalImage,
} from "../../Molecules/TutorialPage/TutorialPage.styles";
import minifigImage from "../../../assets/svg/TutorialMinifig.svg";
import hideTutorialIcon from "../../../assets/svg/HideTutorialIcon.svg";
import { InSceneTutorialButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";
import showTutorialIcon from "../../../assets/svg/ShowTutorialIcon.svg";
import instructionEdgeImage from "../../../assets/svg/InstructionEdgeImage.svg";
import orangeSelectedPartImage from "../../../assets/svg/OrangeSelectedPartImage.svg";
import greenSelectedPartImage from "../../../assets/svg/GreenSelectedPartImage.svg";
import nestPartImage from "../../../assets/svg/NestPartImage.svg";
import rotateContextMenuImage from "../../../assets/svg/RotateContextMenuImage.svg";
import focusContextMenuImage from "../../../assets/svg/FocusContextMenuImage.svg";
import arrangeModelImage from "../../../assets/svg/ArrangeModelImage.svg";
import specialCasesImage from "../../../assets/svg/SpecialCasesImage.svg";

const totalTutorialPages = 9;

const Tutorial = () => {
  const gl = useThree((state) => state.gl);
  const rootRef = useRef<Root | null>(null);

  const target = gl.domElement.parentNode;

  const loadIsTutorialVisible = () => {
    const saved = localStorage.getItem("isTutorialVisible");
    return saved ? JSON.parse(saved) : true;
  };

  const saveIsTutorialVisible = (visible: boolean) => {
    localStorage.setItem("isTutorialVisible", JSON.stringify(visible));
  };

  const switchIsTutorialVisible = (visible: boolean) => {
    setIsTutorialVisible(visible);
    saveIsTutorialVisible(visible);
  };

  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [isTutorialVisible, setIsTutorialVisible] = useState(() => {
    return loadIsTutorialVisible();
  });

  useLayoutEffect(() => {
    if (!target) return;

    const el = document.createElement("div");
    const root = (rootRef.current = createRoot(el));

    target.appendChild(el);

    return () => {
      root.unmount();
      rootRef.current = null;
      target.removeChild(el);
    };
  }, [target]);

  const handleNextPage = () => {
    setCurrentPageNumber((prev) =>
      prev < totalTutorialPages ? prev + 1 : prev
    );
  };

  const handlePreviousPage = () => {
    setCurrentPageNumber((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const renderCurrentTutorialPage = (currentPageNumber: number) => {
    switch (currentPageNumber) {
      case 0:
        return (
          <TutorialPage
            pageNumber={0}
            header="Welcome User"
            isTitlePage
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              This short tutorial shows you how to use this application. You can
              hide it by clicking the
              <TutorialTextIcon src={hideTutorialIcon} /> icon. To show it
              again, click the <TutorialTextIcon src={showTutorialIcon} /> icon
              in the top right corner.
              <br />
              Please click Next button when you are ready.
            </TutorialPageText>
          </TutorialPage>
        );
      case 1:
        return (
          <TutorialPage
            pageNumber={1}
            header="Controls Overview"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              To move around the scene, you need to press and hold the right
              mouse button. To rotate the scene, press and hold the left mouse
              button. To zoom in or zoom out, use your mouse wheel.
            </TutorialPageText>
          </TutorialPage>
        );
      case 2:
        return (
          <TutorialPage
            pageNumber={2}
            header="Instruction"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              Use the instruction to determine which parts you need at the
              current stage of building the model. You can turn the instruction
              page by clicking its edge.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              src={instructionEdgeImage}
              percentWidth={80}
            />
          </TutorialPage>
        );

      case 3:
        return (
          <TutorialPage
            pageNumber={3}
            header="Selecting Parts"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              To select a part, click on it. If the part is orange, it means you
              don't need it at this phase, or another part needs to be added to
              the model first.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              src={orangeSelectedPartImage}
              percentWidth={80}
            />
          </TutorialPage>
        );
      case 4:
        return (
          <TutorialPage
            pageNumber={4}
            header="Selecting Parts"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              If the selected part is green, you can add it to the model.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              src={greenSelectedPartImage}
              percentWidth={60}
            />
          </TutorialPage>
        );
      case 5:
        return (
          <TutorialPage
            pageNumber={5}
            header="Building the Model"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              With the part selected, move the mouse around the model and find a
              place where it fits. When the cursor is over, you will see a
              bluish representation of the selected part. Click it to place a
              part in the model.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              src={nestPartImage}
              percentWidth={60}
            />
          </TutorialPage>
        );
      case 6:
        return (
          <TutorialPage
            pageNumber={6}
            header="Model rotation"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              Sometimes you need to rotate the model to add the following parts.
              To achieve this, click the model and rotate it using the buttons
              in the bottom-right corner of the screen.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              percentWidth={60}
              src={rotateContextMenuImage}
            />
          </TutorialPage>
        );
      case 7:
        return (
          <TutorialPage
            pageNumber={7}
            header="Model rotation"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              Sometimes it's easier to move around the scene when the camera
              focus is on a specific part or the model. You can focus the camera
              on objects by selecting them and using the menu in the
              bottom-right corner.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              percentWidth={60}
              src={focusContextMenuImage}
            />
          </TutorialPage>
        );
      case 8:
        return (
          <TutorialPage
            pageNumber={8}
            header="MODEL ARRANGEMENT"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              After completing the model and clicking on it, you will see a menu
              with the "Arrange Model" button. Click on that button to move the
              model to its final position.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              percentWidth={60}
              src={arrangeModelImage}
            />
          </TutorialPage>
        );
      case 9:
        return (
          <TutorialPage
            pageNumber={9}
            header="SPECIAL CASES"
            totalPages={totalTutorialPages}
          >
            <TutorialPageText>
              In most cases, you will follow the instructions. Sometimes,
              because all parts added to the model must be connected to it (they
              can't be floating), you will need to determine the correct order
              of connecting them, which may differ from what the instructions
              suggest.
            </TutorialPageText>
            <TutorialPageTextHelperHorizontalImage
              percentWidth={60}
              src={specialCasesImage}
            />
          </TutorialPage>
        );
      default:
        return null;
    }
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.render(
      <>
        {!isTutorialVisible && (
          <ShowTutorialButton onClick={() => switchIsTutorialVisible(true)}>
            <ShowTutorialIcon src={showTutorialIcon} />
          </ShowTutorialButton>
        )}
        {isTutorialVisible && (
          <TutorialWrapper>
            {renderCurrentTutorialPage(currentPageNumber)}
            <TutorialButtonsWrapper>
              {currentPageNumber > 0 ? (
                <InSceneTutorialButton onClick={handlePreviousPage}>
                  Previous
                </InSceneTutorialButton>
              ) : null}
              {currentPageNumber < totalTutorialPages ? (
                <InSceneTutorialButton onClick={handleNextPage}>
                  Next
                </InSceneTutorialButton>
              ) : null}
            </TutorialButtonsWrapper>
            <TutorialMinifigImage src={minifigImage} />
            <HideTutorialButton onClick={() => switchIsTutorialVisible(false)}>
              <HideTutorialIcon src={hideTutorialIcon} />
            </HideTutorialButton>
          </TutorialWrapper>
        )}
      </>
    );
  });

  return null;
};

export default Tutorial;
