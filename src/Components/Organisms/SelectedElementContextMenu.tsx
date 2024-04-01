import { RotateElementContextMenuButton } from "../Atoms/Buttons/Buttons.styles";
import {
  SelectedElementContextMenuWrapper,
  SelectedElementMenuSection,
  SelectedElementMenuSectionHeader,
  SelectedElementMenuSectionHorizontalWrapper,
} from "./SelectedElementContextMenu.styles";
import { rotateElementUp } from "../../Utilities/utilities";
import { Mesh } from "three";

type ComponentProps = {
  selectedElement: Mesh;
};
const SelectedElementContextMenu = (props: ComponentProps) => {
  const { selectedElement } = props;
  return (
    <SelectedElementContextMenuWrapper>
      <SelectedElementMenuSection>
        <SelectedElementMenuSectionHeader>
          Rotate
        </SelectedElementMenuSectionHeader>
        <SelectedElementMenuSectionHorizontalWrapper>
          <RotateElementContextMenuButton
            onClick={() => rotateElementUp(selectedElement, "x", -90)}
          >
            Up
          </RotateElementContextMenuButton>
          <RotateElementContextMenuButton
            onClick={() => rotateElementUp(selectedElement, "y", -90)}
          >
            Left
          </RotateElementContextMenuButton>
          <RotateElementContextMenuButton
            onClick={() => rotateElementUp(selectedElement, "y", 90)}
          >
            Right
          </RotateElementContextMenuButton>
          <RotateElementContextMenuButton
            onClick={() => rotateElementUp(selectedElement, "x", 90)}
          >
            Down
          </RotateElementContextMenuButton>
        </SelectedElementMenuSectionHorizontalWrapper>
      </SelectedElementMenuSection>
    </SelectedElementContextMenuWrapper>
  );
};
export default SelectedElementContextMenu;
