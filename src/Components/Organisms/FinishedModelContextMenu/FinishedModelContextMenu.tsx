import { Html } from "@react-three/drei";
import { FinishedModelContextMenuWrapper } from "./FinishedModelContextMenu.styles";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import { InSceneFinishModelButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";

const FinishedModelContextMenu = () => {
  const { handleMoveReadyModelToSetArrangement } = useTrainInstruction();

  return (
    <Html>
      <FinishedModelContextMenuWrapper>
        <InSceneFinishModelButton
          onClick={handleMoveReadyModelToSetArrangement}
        >
          Finish
        </InSceneFinishModelButton>
      </FinishedModelContextMenuWrapper>
    </Html>
  );
};
export default FinishedModelContextMenu;
