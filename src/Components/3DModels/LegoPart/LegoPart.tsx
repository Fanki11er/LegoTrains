import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { ThreeEvent } from "@react-three/fiber";
import { PartUserData } from "../../../Types/PartUserData";
import { useEffect, useMemo, useRef, useState } from "react";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import useSelectModel from "../../../Hooks/useSelectModel";
import Nest from "../Nest/Nest";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";
import { customMaterials } from "../../../Materials/customMaterials";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { LegoBlock } from "../../../Types/LegoBlock";
import { PartPersistanceData } from "../../../Classes/PersistanceModule";

type PartProps = {
  partInfo: LegoBlock;
  persistanceData: PartPersistanceData | undefined;
};

const LegoPart = (props: PartProps) => {
  const { partInfo, persistanceData } = props;
  const { scene } = useGLTF(partInfo.partPath);
  const { handleGetMarkersForSelectedPart, handleGetRootModelMarkerByName } =
    useTrainInstruction();
  const [markersList, setMarkersList] = useState<Object3D<Object3DEventMap>[]>(
    []
  );

  const model = useMemo(() => {
    const model = scene.children[0].clone() as Mesh;
    if (partInfo.materialId) {
      model.material = customMaterials[partInfo.materialId];
    }
    return model;
  }, [scene, partInfo.materialId]);

  const modelRef = useRef<Mesh>(null!);

  useEffect(() => {
    if (modelRef.current) {
      if (!persistanceData) {
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
          persistanceData.userData.modelId!
        );

        modelRef.current.position.copy(persistanceData.position);
        modelRef.current.rotation.copy(persistanceData.rotation);
        //modelRef.current.matrix.copy(persistanceData.matrix);
        //modelRef.current.matrixWorld.copy(persistanceData.matrixWorld);
        modelRef.current.userData = persistanceData.userData;

        if (rootMarker) {
          rootMarker.add(modelRef.current);
        }
      }

      modelRef.current.name = partInfo.partType;
    }
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
