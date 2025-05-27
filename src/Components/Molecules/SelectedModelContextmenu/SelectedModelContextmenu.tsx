import { rotateElementUp } from "../../../Utilities/utilities";
import { Mesh, Object3D } from "three";
import { InSceneRotateModelContextMenuButton } from "../../Atoms/InSceneButtons/InSceneButtons.styles";
import {
  SelectedItemContextMenuWrapper,
  SelectedItemMenuSection,
  SelectedItemMenuSectionHeader,
  SelectedItemMenuSectionHorizontalWrapper,
} from "../../Atoms/SelectedItemContextMenu/SelectedItemContextMenu.styles";
import useFocusCamera from "../../../Hooks/useFocusCamera";
import InSceneHTMLWrapper from "../../Atoms/InSceneHTMLWrapper/InSceneHTMLWrapper";
type Props = {
  mesh: Object3D | Mesh;
};

const SelectedModelContextMenu = ({ mesh }: Props) => {
  const { handleFocusCamera } = useFocusCamera();

  return (
    <InSceneHTMLWrapper positionRight={30} positionBottom={30}>
      <SelectedItemContextMenuWrapper>
        <SelectedItemMenuSection>
          <SelectedItemMenuSectionHeader>Rotate</SelectedItemMenuSectionHeader>
          <SelectedItemMenuSectionHorizontalWrapper>
            <InSceneRotateModelContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", -90);
              }}
            >
              Up
            </InSceneRotateModelContextMenuButton>
            <InSceneRotateModelContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", -90);
              }}
            >
              Left
            </InSceneRotateModelContextMenuButton>
            <InSceneRotateModelContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "y", 90);
              }}
            >
              Right
            </InSceneRotateModelContextMenuButton>
            <InSceneRotateModelContextMenuButton
              onClick={(e) => {
                e.stopPropagation();
                rotateElementUp(mesh, "x", 90);
              }}
            >
              Down
            </InSceneRotateModelContextMenuButton>
          </SelectedItemMenuSectionHorizontalWrapper>
        </SelectedItemMenuSection>

        <SelectedItemMenuSection>
          <SelectedItemMenuSectionHeader>Camera</SelectedItemMenuSectionHeader>
          <SelectedItemMenuSectionHorizontalWrapper>
            <InSceneRotateModelContextMenuButton
              onClick={(e) => {
                e.stopPropagation();

                handleFocusCamera(mesh);
              }}
            >
              Focus
            </InSceneRotateModelContextMenuButton>
          </SelectedItemMenuSectionHorizontalWrapper>
        </SelectedItemMenuSection>
      </SelectedItemContextMenuWrapper>
    </InSceneHTMLWrapper>
  );
};
export default SelectedModelContextMenu;
