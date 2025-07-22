import { useGLTF } from "@react-three/drei";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Object3D } from "three";
import useSelectModel from "../../../Hooks/useSelectModel";
import {
  convertToEuler,
  convertToVector3,
  moveElementToFloorLevel,
} from "../../../Utilities/utilities";
import { ModelPersistenceData } from "../../../Classes/PersistenceModule";
import { Model } from "../../../Classes/Model";
import ArrangeModelContextMenu from "../../Organisms/ArrangeModelContextMenu/ArrangeModelContextMenu";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import SelectedModelContextMenu from "../../Molecules/SelectedModelContextmenu/SelectedModelContextmenu";
import useFocusCamera from "../../../Hooks/useFocusCamera";
import { SCENE_OFFSET } from "../../../Constants/sceneOffset";

type Props = {
  modelDataObject: Model;
  persistenceData: ModelPersistenceData | undefined | null;
};

const ModelMarkers = ({ persistenceData, modelDataObject }: Props) => {
  const markersPath = useDeferredValue(modelDataObject.getModelMarkersPath());
  const { scene } = useGLTF(markersPath);
  const { handleGetSetRootMarker } = useTrainInstruction();
  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const modelRef = useRef<Object3D>(null!);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();
  const { handleFocusCamera } = useFocusCamera();

  const handleMoveElementToFloorLevel = useCallback(() => {
    if (
      modelRef &&
      !modelDataObject.getIsModelArranged() &&
      !modelDataObject.getDoNotMoveToTheFloorLevel()
    ) {
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
          const isModelArranged = modelDataObject.getIsModelArranged();
          const isPartialModel = modelDataObject.getIsPartialModel();

          if (modelRef.current && !isModelArranged) {
            handleSelect(modelRef.current, true);
          } else if (modelRef.current && isModelArranged && !isPartialModel) {
            handleFocusCamera(modelRef.current, SCENE_OFFSET);
          } else if (modelRef.current && isModelArranged && isPartialModel) {
            handleSelect(modelRef.current, true);

            //handleFocusCamera(modelRef.current);
          }
        }}
        onPointerMissed={() => {
          handleUnselect(modelRef.current);
        }}
      />

      {modelRef.current &&
        isSelected &&
        !modelDataObject.getIsModelFinished() && (
          <SelectedModelContextMenu mesh={modelRef.current} />
        )}
      {modelRef.current &&
        isSelected &&
        modelDataObject.getIsModelFinished() && <ArrangeModelContextMenu />}
      {modelRef.current &&
        modelDataObject.checkIfPartialModelParentIsCompleted() && (
          <ArrangeModelContextMenu />
        )}
    </>
  );
};

export default ModelMarkers;
