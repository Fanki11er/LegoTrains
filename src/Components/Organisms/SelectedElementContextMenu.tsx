import { RotateElementContextMenuButton } from "../Atoms/Buttons/Buttons.styles";
import {
  SelectedElementContextMenuWrapper,
  SelectedElementMenuSection,
  SelectedElementMenuSectionHeader,
  SelectedElementMenuSectionHorizontalWrapper,
} from "./SelectedElementContextMenu.styles";
import { rotateElementUp } from "../../Utilities/utilities";
import { Html } from "@react-three/drei";
import { Mesh, Object3D } from "three";
type Props = {
  mesh: Object3D | Mesh;
};

const SelectedElementContextMenu = (props: Props) => {
  const { mesh } = props;
  return (
    <Html>
      <SelectedElementContextMenuWrapper>
        <SelectedElementMenuSection>
          <SelectedElementMenuSectionHeader>
            Rotate
          </SelectedElementMenuSectionHeader>
          <SelectedElementMenuSectionHorizontalWrapper>
            <RotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", -90);
              }}
            >
              Up
            </RotateElementContextMenuButton>
            <RotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", -90);
              }}
            >
              Left
            </RotateElementContextMenuButton>
            <RotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", 90);
              }}
            >
              Right
            </RotateElementContextMenuButton>
            <RotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", 90);
              }}
            >
              Down
            </RotateElementContextMenuButton>
          </SelectedElementMenuSectionHorizontalWrapper>
        </SelectedElementMenuSection>
      </SelectedElementContextMenuWrapper>
    </Html>
  );
};
export default SelectedElementContextMenu;
