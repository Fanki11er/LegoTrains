import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Object3D } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";

import useSelectModel from "../../../Hooks/useSelectModel";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

type Props = {
  modelPath: string;
};

const ModelMarkers = (props: Props) => {
  const { modelPath } = props;
  const { scene } = useGLTF(modelPath);

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);
  console.log(model)

  const modelRef = useRef<Object3D>(null!);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const handleMoveElementToFloorLevel = () => {
    if (modelRef.current) {
      moveElementToFloorLevel(modelRef.current);
    }
  };

  useEffect(() => {
    const model = modelRef.current;
    if (model) {
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
      model.addEventListener("childremoved", handleMoveElementToFloorLevel);
    }

    return () => {
      model.removeEventListener("childadded", handleMoveElementToFloorLevel);
      model.removeEventListener("childremoved", handleMoveElementToFloorLevel);
    };
  }, []);

  return (
    <>
      <primitive
        object={model}
        ref={modelRef}
        onClick={() => {
          if (modelRef.current) {
            handleSelect(modelRef.current);
          }
        }}
        onPointerMissed={() => {
          handleUnselect(modelRef.current);
        }}
      />
      {isSelected && modelRef.current && (
        <SelectedElementContextMenu mesh={modelRef.current} />
      )}
    </>
  );
};

export default ModelMarkers;
