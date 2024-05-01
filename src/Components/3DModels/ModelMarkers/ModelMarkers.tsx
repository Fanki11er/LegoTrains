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

  const ref = useRef<Object3D>(null!);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const handleMoveElementToFloorLevel = () => {
    if (ref.current) {
      moveElementToFloorLevel(ref.current);
    }
  };

  useEffect(() => {
    const model = ref.current;
    if (model) {
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
    }

    return () =>
      model.removeEventListener("childadded", handleMoveElementToFloorLevel);
  }, []);

  return (
    <>
      <primitive
        object={model}
        ref={ref}
        onClick={() => {
          if (ref.current) {
            handleSelect(ref.current);
          }
        }}
        onPointerMissed={() => {
          handleUnselect(ref.current);
        }}
      />
      {isSelected && ref.current && (
        <SelectedElementContextMenu mesh={ref.current} />
      )}
    </>
  );
};

export default ModelMarkers;
