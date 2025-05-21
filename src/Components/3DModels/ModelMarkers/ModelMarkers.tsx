import { useGLTF } from "@react-three/drei";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Object3D } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu/SelectedElementContextMenu";
import useSelectModel from "../../../Hooks/useSelectModel";
import {
  convertToEuler,
  convertToVector3,
  moveElementToFloorLevel,
} from "../../../Utilities/utilities";
import { ModelPersistenceData } from "../../../Classes/PersistenceModule";
import { Model } from "../../../Classes/Model";
import FinishedModelContextMenu from "../../Organisms/FinishedModelContextMenu/FinishedModelContextMenu";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";

type Props = {
  modelDataObject: Model;
  persistenceData: ModelPersistenceData | undefined | null;
};

const ModelMarkers = (props: Props) => {
  const { persistenceData, modelDataObject } = props;
  const markersPath = useDeferredValue(modelDataObject.getModelMarkersPath());
  const { scene } = useGLTF(markersPath);
  const { handleGetSetRootMarker } = useTrainInstruction();

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const modelRef = useRef<Object3D>(null!);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const handleMoveElementToFloorLevel = useCallback(() => {
    if (modelRef && !modelDataObject.getIsModelArranged()) {
      moveElementToFloorLevel(modelRef.current);
    }
  }, [modelDataObject, modelRef]);

  useEffect(() => {
    if (model) {
      model.name = modelDataObject.getRootModelMarkerId();
      model.addEventListener("childadded", handleMoveElementToFloorLevel);
      model.addEventListener("childremoved", handleMoveElementToFloorLevel);
    }

    return () => {
      model &&
        model.removeEventListener("childadded", handleMoveElementToFloorLevel);
      model &&
        model.removeEventListener(
          "childremoved",
          handleMoveElementToFloorLevel
        );
      useGLTF.clear(modelDataObject.getModelMarkersPath());
    };
  }, [modelDataObject, handleMoveElementToFloorLevel, model]);

  useEffect(() => {
    if (model && persistenceData) {
      const setRootMarker = handleGetSetRootMarker();
      if (setRootMarker) {
        model.position.copy(
          convertToVector3(persistenceData.markersData.position)
        );
        model.rotation.copy(
          convertToEuler(persistenceData.markersData.rotation)
        );
        if (persistenceData.isModelArranged) {
          setRootMarker.add(model);
        }
      }
    }
  }, [model, persistenceData, handleGetSetRootMarker]);

  useEffect(() => {
    if (modelRef.current) {
      moveElementToFloorLevel(modelRef.current);
    }
  }, [modelRef]);

  useEffect(() => {
    modelDataObject.addArraignmentFunctionsToMarkers(model);
  }, [model, modelDataObject]);

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
