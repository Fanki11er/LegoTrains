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
  withHelper?: boolean;
};

const SelectedElementContextMenu = ({ mesh, withHelper }: Props) => {
  const { handleFocusCamera } = useFocusCamera();

  return (
    <InSceneHTMLWrapper positionRight={30} positionBottom={30}>
      <SelectedItemContextMenuWrapper>
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
        {/* //??Position helper*/}
        {withHelper ? (
          <SelectedItemMenuSection>
            <SelectedItemMenuSectionHeader>
              Position
            </SelectedItemMenuSectionHeader>
            <span>{`X: ${mesh.position.x} Z: ${mesh.position.z}`}</span>
          </SelectedItemMenuSection>
        ) : null}
      </SelectedItemContextMenuWrapper>
    </InSceneHTMLWrapper>
  );
};
export default SelectedElementContextMenu;
