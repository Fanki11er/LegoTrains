import { useGLTF } from "@react-three/drei";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Object3D } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu/SelectedElementContextMenu";
import useSelectModel from "../../../Hooks/useSelectModel";
import {
  convertToEuler,
  convertToVector3,
  moveElementToFloorLevel,
} from "../../../Utilities/utilities";
import { ModelPersistanceData } from "../../../Classes/PersistanceModule";
import { Model } from "../../../Classes/Model";
import FinishedModelContextMenu from "../../Organisms/FinishedModelContextMenu/FinishedModelContextMenu";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";

type Props = {
  modelDataObject: Model;
  persistanceData: ModelPersistanceData | undefined;
};

const ModelMarkers = (props: Props) => {
  const { persistanceData, modelDataObject } = props;
  const { scene } = useGLTF(modelDataObject.getModelMarkersPath());
  const { handleGetSetRootMarker } = useTrainInstruction();

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const modelRef = useRef<Object3D>(null!);

  useEffect(() => {
    moveElementToFloorLevel(model);
  }, [model]);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const handleMoveElementToFloorLevel = useCallback(() => {
    if (modelRef.current && !modelDataObject.getIsModelArranged()) {
      moveElementToFloorLevel(modelRef.current);
    }
  }, [modelDataObject]);

  useEffect(() => {
    const model = modelRef.current;
    model.name = modelDataObject.getRootModelMarkerId();

    if (model) {
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
      model.addEventListener("childremoved", handleMoveElementToFloorLevel);
    }

    return () => {
      model.removeEventListener("childadded", handleMoveElementToFloorLevel);
      model.removeEventListener("childremoved", handleMoveElementToFloorLevel);
    };
  }, [modelDataObject, handleMoveElementToFloorLevel]);

  useEffect(() => {
    if (model && persistanceData) {
      const setRootMarker = handleGetSetRootMarker();
      if (setRootMarker) {
        model.position.copy(
          convertToVector3(persistanceData.markersData.position)
        );
        model.rotation.copy(
          convertToEuler(persistanceData.markersData.rotation)
        );

        if (persistanceData.isModelArranged) {
          setRootMarker.add(model);
        }
      }
    }
  }, [model, persistanceData, handleGetSetRootMarker]);

  return (
    <>
      <primitive
        object={model}
        ref={modelRef}
        onClick={() => {
          if (modelRef.current && !modelDataObject.getIsModelArranged()) {
            handleSelect(modelRef.current, true);
          }
        }}
        onPointerMissed={() => {
          handleUnselect(modelRef.current);
        }}
      />
      {modelRef.current &&
        isSelected &&
        !modelDataObject.getIsModelFinished() && (
          <SelectedElementContextMenu mesh={modelRef.current} />
        )}
      {modelRef.current &&
        isSelected &&
        modelDataObject.getIsModelFinished() && <FinishedModelContextMenu />}
    </>
  );
};

export default ModelMarkers;
