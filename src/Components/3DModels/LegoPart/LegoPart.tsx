import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { ThreeEvent } from "@react-three/fiber";
import { PartInfo } from "../../../Types/PartInfo";
import { PartUserData } from "../../../Types/PartUserData";
import { useEffect, useMemo, useRef, useState } from "react";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import useSelectModel from "../../../Hooks/useSelectModel";
import Nest from "../Nest/Nest";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";
import { customMaterials } from "../../../Materials/customMaterials";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

type PartProps = {
  partInfo: PartInfo;
};

const LegoPart = (props: PartProps) => {
  const { partInfo } = props;
  const { scene } = useGLTF(partInfo.partPath);
  const { handleGetMarkersForSelectedPart } = useTrainInstruction();
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
      modelRef.current.position.setX(partInfo.partStartPosition.x);
      modelRef.current.position.setZ(partInfo.partStartPosition.z);

      moveElementToFloorLevel(modelRef.current);

      modelRef.current.userData = {
        partId: partInfo.partId,
        isConnected: false,
      } as PartUserData;

      modelRef.current.name = partInfo.partId;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isSelected, originalMaterial, handleSelect, handleUnselect } =
    useSelectModel();

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
        material={
          isSelected
            ? customMaterials.selectedElementMaterial
            : originalMaterial.current[model.uuid]
        }
        onClick={(e: ThreeEvent<Event>) => {
          if (!modelRef.current.userData.isConnected) {
            e.stopPropagation();
          }

          if (modelRef.current && !modelRef.current.userData.isConnected) {
            const list = handleGetMarkersForSelectedPart(
              modelRef.current.userData.partId
            );
            setMarkersList(list);
            handleSelect(modelRef.current);
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
