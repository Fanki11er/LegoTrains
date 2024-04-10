import { Mesh } from "three";
import useElementContextMenu from "../../../Hooks/useElementContextMenu";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useMemo, useState } from "react";

type NestProps = {
  nest: Mesh;
  selectedMesh: Mesh;
};

const Nest = (props: NestProps) => {
  const { nest, selectedMesh } = props;
  const [isHovered, setIsHovered] = useState(false);

  const { handleProjectElementOnPosition, handleConnectElements } =
    useElementContextMenu();
  const position = useMemo(() => {
    return handleProjectElementOnPosition(nest, selectedMesh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nest, selectedMesh]);
  return (
    <>
      {position && (
        <mesh
          geometry={selectedMesh.geometry}
          material={nestMaterial}
          material-color={isHovered ? "green" : "blue"}
          position={position}
          onPointerEnter={() => {
            setIsHovered(true);
          }}
          onPointerLeave={() => {
            setIsHovered(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleConnectElements(nest, position);
          }}
        />
      )}
    </>
  );
};

export default Nest;
