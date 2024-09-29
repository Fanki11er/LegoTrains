import { Html } from "@react-three/drei";
import { FinishedModelContextMenuWrapper } from "./FinishedModelContextMenu.styles";
import { FinishModelButton } from "../../Atoms/Buttons/Buttons.styles";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";

const FinishedModelContextMenu = () => {
  const { handleMoveReadyModelToSetArrangement } = useTrainInstruction();

  return (
    <Html>
      <FinishedModelContextMenuWrapper>
        <FinishModelButton onClick={handleMoveReadyModelToSetArrangement}>
          Finish
        </FinishModelButton>
      </FinishedModelContextMenuWrapper>
    </Html>
  );
};
export default FinishedModelContextMenu;
