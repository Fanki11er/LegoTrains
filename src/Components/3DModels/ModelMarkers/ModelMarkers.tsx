import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Object3D} from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";               
import useSelectModel from "../../../Hooks/useSelectModel";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { ModelMarkersInfo } from "../../../Classes/Model";
import { ModelMarkerPersistanceData } from "../../../Classes/PersistanceModule";
  

type Props = {
  modelMarkersInfo: ModelMarkersInfo
  persistanceData: ModelMarkerPersistanceData | undefined
};

const ModelMarkers = (props: Props) => {
  const { modelMarkersInfo } = props;
  const { scene } = useGLTF(modelMarkersInfo.modelMarkersPath);

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const modelRef = useRef<Object3D>(null!);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const handleMoveElementToFloorLevel = () => {
    if (modelRef.current) {
      moveElementToFloorLevel(modelRef.current);

    }
  };

  useEffect(() => {
    const model = modelRef.current;
    console.log(model, "MMMM")
    model.name = modelMarkersInfo.rootModelMarkerId

    if (model) {
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
      model.addEventListener("childremoved", handleMoveElementToFloorLevel);
     
    }

    return () => {
      model.removeEventListener("childadded", handleMoveElementToFloorLevel);
      model.removeEventListener("childremoved", handleMoveElementToFloorLevel);
    };
  }, [modelMarkersInfo]);

  return (
    <>
      <primitive
        object={model}
        ref={modelRef}
        onClick={() => {
          if (modelRef.current) {
            handleSelect(modelRef.current, true);
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
