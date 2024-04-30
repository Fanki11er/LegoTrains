import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { PartInfo } from "../../../Types/PartInfo";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import Nest from "../Nest/Nest";
import { selectedElementMaterial } from "../../../Materials/SelectedElementMaterial";
import { PartUserData } from "../../../Types/PartUserData";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";
import useSelectModel from "../../../Hooks/useSelectModel";

type PartProps = {
  partInfo: PartInfo;
};

const LegoPart = (props: PartProps) => {
  const { partInfo } = props;
  const { scene } = useGLTF(partInfo.partPath);
  const {
    handleGetMarkersForSelectedPart,
    handleGetMarkerById,
    handleFinishPartConnection,
  } = useTrainInstruction();
  const [markersList, setMarkersList] = useState<Object3D<Object3DEventMap>[]>(
    []
  );

  const model = useMemo(() => {
    return scene.children[0].clone() as Mesh;
  }, [scene]);

  const modelRef = useRef<Mesh>(null!);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.setX(partInfo.partStartPosition.x);
      modelRef.current.position.setY(15);
      modelRef.current.position.setZ(partInfo.partStartPosition.z);

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
            ? selectedElementMaterial
            : originalMaterial.current[model.uuid]
        }
        onClick={() => {
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
      {isSelected && <SelectedElementContextMenu mesh={modelRef.current} />}
      <group
        name="NestsForThisPart"
        onClick={(e) => {
          e.stopPropagation();
          if (modelRef.current) {
            const nest = e.object;
            const marker = handleGetMarkerById(nest.userData.markerId);

            if (marker && marker.parent) {
              modelRef.current.position.copy(marker.position);
              modelRef.current.quaternion.copy(marker.quaternion);
              marker.parent.add(modelRef.current);
              modelRef.current.userData.isConnected = true;
              handleFinishPartConnection(marker);
            }
          }
        }}
      >
        {modelRef.current && renderNests(markersList)}
      </group>
    </>
  );
};

export default LegoPart;
