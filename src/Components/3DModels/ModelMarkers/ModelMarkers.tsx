import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Object3D } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";
import useSelectModel from "../../../Hooks/useSelectModel";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { MarkersInfo } from "../../../Classes/Model";
import { ModelMarkerPersistanceData } from "../../../Classes/PersistanceModule";

type Props = {
  modelMarkersInfo: MarkersInfo;
  persistanceData: ModelMarkerPersistanceData | undefined;
};

const ModelMarkers = (props: Props) => {
  const { modelMarkersInfo, persistanceData } = props;
  const { scene } = useGLTF(modelMarkersInfo.markersPath);

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
    model.name = modelMarkersInfo.rootMarkerId;

    if (model) {
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
      model.addEventListener("childremoved", handleMoveElementToFloorLevel);
    }

    return () => {
      model.removeEventListener("childadded", handleMoveElementToFloorLevel);
      model.removeEventListener("childremoved", handleMoveElementToFloorLevel);
    };
  }, [modelMarkersInfo]);

  useEffect(() => {
    if (model && persistanceData) {
      model.position.copy(persistanceData.position);
      model.rotation.copy(persistanceData.rotation);
      // model.matrix.copy(persistanceData.matrix);
      // model.matrixWorld.copy(persistanceData.matrixWorld);
    }
  }, [model, persistanceData]);

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
