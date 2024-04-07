import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import useElementContextMenu from "../../../Hooks/useElementContextMenu";
import { ThreeEvent } from "@react-three/fiber";
import { useEffect } from "react";

type PartProps = {
  modelPath: string;
};

const Part = (props: PartProps) => {
  const { modelPath } = props;
  const { nodes } = useGLTF(modelPath);
  const { handleSelectMesh, handleResetSelectedMesh } = useElementContextMenu();
  const model = nodes["Scene"].children[0] as Mesh;

  useEffect(() => {
    model.children.forEach((child) => {
      const userData = child.userData;
      if (userData.isSlot || userData.isConnector) {
        child.visible = false;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <primitive
      object={model}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        handleSelectMesh(e);
      }}
      onPointerMissed={() => {
        handleResetSelectedMesh();
      }}
    />
  );
};

export default Part;
