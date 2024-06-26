import {
  ElementContextMenuButton,
  RotateElementContextMenuButton,
} from "../Atoms/Buttons/Buttons.styles";
import {
  SelectedElementContextMenuWrapper,
  SelectedElementMenuSection,
  SelectedElementMenuSectionHeader,
  SelectedElementMenuSectionHorizontalWrapper,
} from "./SelectedElementContextMenu.styles";
import { rotateElementUp } from "../../Utilities/utilities";
import { Html } from "@react-three/drei";
import useElementsManipulations from "../../Hooks/useElementsManipulations";

const SelectedElementContextMenu = () => {
  const { selectedMesh } = useElementsManipulations();
  return (
    <Html>
      {selectedMesh && (
        <SelectedElementContextMenuWrapper>
          <SelectedElementMenuSection>
            <SelectedElementMenuSectionHeader>
              Rotate
            </SelectedElementMenuSectionHeader>
            <SelectedElementMenuSectionHorizontalWrapper>
              <RotateElementContextMenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  rotateElementUp(selectedMesh.object, "x", -90);
                }}
              >
                Up
              </RotateElementContextMenuButton>
              <RotateElementContextMenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  rotateElementUp(selectedMesh.object, "y", -90);
                }}
              >
                Left
              </RotateElementContextMenuButton>
              <RotateElementContextMenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  rotateElementUp(selectedMesh.object, "y", 90);
                }}
              >
                Right
              </RotateElementContextMenuButton>
              <RotateElementContextMenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  rotateElementUp(selectedMesh.object, "x", 90);
                }}
              >
                Down
              </RotateElementContextMenuButton>
            </SelectedElementMenuSectionHorizontalWrapper>
          </SelectedElementMenuSection>

          <SelectedElementMenuSection>
            <SelectedElementMenuSectionHeader>
              Place to connect
            </SelectedElementMenuSectionHeader>
            <ElementContextMenuButton>
              Select connector
            </ElementContextMenuButton>
          </SelectedElementMenuSection>
        </SelectedElementContextMenuWrapper>
      )}
    </Html>
  );
};
export default SelectedElementContextMenu;
