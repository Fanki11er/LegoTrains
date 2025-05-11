import {
  SelectedElementContextMenuWrapper,
  SelectedElementMenuSection,
  SelectedElementMenuSectionHeader,
  SelectedElementMenuSectionHorizontalWrapper,
} from "./SelectedElementContextMenu.styles";
import { rotateElementUp } from "../../../Utilities/utilities";
import { Html } from "@react-three/drei";
import { Mesh, Object3D } from "three";
import { InSceneRotateElementContextMenuButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";
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
            <InSceneRotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", -90);
              }}
            >
              Up
            </InSceneRotateElementContextMenuButton>
            <InSceneRotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", -90);
              }}
            >
              Left
            </InSceneRotateElementContextMenuButton>
            <InSceneRotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", 90);
              }}
            >
              Right
            </InSceneRotateElementContextMenuButton>
            <InSceneRotateElementContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", 90);
              }}
            >
              Down
            </InSceneRotateElementContextMenuButton>
          </SelectedElementMenuSectionHorizontalWrapper>
        </SelectedElementMenuSection>
        {/* //!!Position helper*/}
        <SelectedElementMenuSection>
          <SelectedElementMenuSectionHeader>
            Position
          </SelectedElementMenuSectionHeader>
          <span>{`X: ${mesh.position.x} Z: ${mesh.position.z}`}</span>
        </SelectedElementMenuSection>
      </SelectedElementContextMenuWrapper>
    </Html>
  );
};
export default SelectedElementContextMenu;
