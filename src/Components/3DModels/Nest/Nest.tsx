import { Mesh } from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useMemo, useState } from "react";
import useElementsManipulations from "../../../Hooks/useElementsManipulations";

type NestProps = {
  nest: Mesh;
  selectedMesh: Mesh;
};

const Nest = (props: NestProps) => {
  const { nest, selectedMesh } = props;
  const [isHovered, setIsHovered] = useState(false);

  const { handleProjectElementOnPosition, handleConnectElements } =
    useElementsManipulations();
  const newPosition = useMemo(() => {
    return handleProjectElementOnPosition(nest, selectedMesh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nest, selectedMesh]);

  return (
    <>
      {newPosition && (
        <mesh
          geometry={selectedMesh.geometry.clone()}
          material={nestMaterial.clone()}
          material-color={isHovered ? "green" : "blue"}
          position={newPosition.position}
          quaternion={newPosition.rotation}
          onPointerEnter={() => {
            setIsHovered(true);
          }}
          onPointerLeave={() => {
            setIsHovered(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleConnectElements(nest);
          }}
        />
      )}
    </>
  );
};

export default Nest;
