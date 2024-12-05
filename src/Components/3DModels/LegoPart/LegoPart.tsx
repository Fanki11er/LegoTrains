import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { ThreeEvent } from "@react-three/fiber";
import { PartUserData } from "../../../Types/PartUserData";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import useSelectModel from "../../../Hooks/useSelectModel";
import Nest from "../Nest/Nest";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu/SelectedElementContextMenu";
import {
  convertToEuler,
  convertToVector3,
  moveElementToFloorLevel,
} from "../../../Utilities/utilities";
import { LegoBlock } from "../../../Types/LegoBlock";
import { PartPersistenceData } from "../../../Classes/PersistenceModule";
import useMaterials from "../../../Hooks/useMaterials";

type PartProps = {
  partInfo: LegoBlock;
  persistenceData: PartPersistenceData | undefined;
};

const LegoPart = (props: PartProps) => {
  const { partInfo, persistenceData } = props;
  const partPath = useDeferredValue(partInfo.partPath);
  const { scene } = useGLTF(partPath);
  const { handleGetMarkersForSelectedPart, handleGetRootModelMarkerByName } =
    useTrainInstruction();
  const [markersList, setMarkersList] = useState<Object3D<Object3DEventMap>[]>(
    []
  );

  const { materialsData } = useMaterials();

  const model = useMemo(() => {
    const model = scene.children[0].clone() as Mesh;
    if (partInfo.materialId) {
      model.material = materialsData[partInfo.materialId];
    }
    return model;
  }, [scene, partInfo.materialId, materialsData]);

  const modelRef = useRef<Mesh>(null!);

  useEffect(() => {
    if (modelRef.current) {
      if (!persistenceData) {
        modelRef.current.position.setX(partInfo.partStartPosition.x);
        modelRef.current.position.setZ(partInfo.partStartPosition.z);

        if (!partInfo.noAutomaticMoveToGroundLevel) {
          moveElementToFloorLevel(modelRef.current);
        }

        modelRef.current.userData = {
          partId: partInfo.partId,
          partType: partInfo.partType,
          isConnected: false,
        } as PartUserData;
      } else {
        const rootMarker = handleGetRootModelMarkerByName(
          persistenceData.userData.modelId!
        );

        modelRef.current.position.copy(
          convertToVector3(persistenceData.position)
        );
        modelRef.current.rotation.copy(
          convertToEuler(persistenceData.rotation)
        );

        if (rootMarker) {
          rootMarker.add(modelRef.current);
        }
        modelRef.current.userData = persistenceData.userData;
      }

      modelRef.current.name = partInfo.partType;
    }
    return () => {
      //useGLTF.clear(partInfo.partPath);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  const renderNests = (markersList: Object3D<Object3DEventMap>[]) => {
    return markersList.map((marker) => {
      return <Nest key={marker.uuid} marker={marker} mesh={modelRef.current} />;
    });
  };

  return (
    <>
      <primitive
        ref={modelRef}
        object={model}
        onClick={(e: ThreeEvent<Event>) => {
          if (!modelRef.current.userData.isConnected) {
            e.stopPropagation();
          }

          if (modelRef.current && !modelRef.current.userData.isConnected) {
            const list = handleGetMarkersForSelectedPart(
              modelRef.current.userData.partType
            );
            setMarkersList(list);
            handleSelect(modelRef.current, !!list.length);
          }
        }}
        onPointerMissed={() => {
          if (isSelected) {
            setMarkersList([]);
            handleUnselect(modelRef.current);
          }
        }}
      />
      {isSelected && <SelectedElementContextMenu mesh={model} />}
      <group name="NestsForThisPart">
        {modelRef.current && renderNests(markersList)}
      </group>
    </>
  );
};

export default LegoPart;
