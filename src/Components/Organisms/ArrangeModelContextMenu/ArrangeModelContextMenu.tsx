import { ArrangeModelContextMenuWrapper } from "./ArrangeModelContextMenu.styles";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import { InSceneArrangeModelButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";
import InSceneHTMLWrapper from "../../Atoms/InSceneHTMLWrapper/InSceneHTMLWrapper";

const ArrangeModelContextMenu = () => {
  const { handleMoveReadyModelToSetArrangement } = useTrainInstruction();

  return (
    <InSceneHTMLWrapper>
      <ArrangeModelContextMenuWrapper>
        <InSceneArrangeModelButton
          onClick={handleMoveReadyModelToSetArrangement}
        >
          Arrange Model
        </InSceneArrangeModelButton>
      </ArrangeModelContextMenuWrapper>
    </InSceneHTMLWrapper>
  );
};
export default ArrangeModelContextMenu;
