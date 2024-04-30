import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Box3, Object3D, Vector3 } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";

import useSelectModel from "../../../Hooks/useSelectModel";

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

  useEffect(() => {
    //Todo Figure if element is not on the floor
    if (ref.current) {
      ref.current.addEventListener("childadded", () => {
        const box = new Box3().setFromObject(ref.current!);
        const size = new Vector3();
        box.getSize(size);
        //console.log(box, "BOX");
        //console.log(size, "SIZE");
      });
    }
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
