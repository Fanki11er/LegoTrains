import { useGLTF } from "@react-three/drei";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3D,
  Object3DEventMap,
} from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { PartInfo } from "../../../Types/PartInfo";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import NestV2 from "../NestV2/NestV2";
import { selectedElementMaterial } from "../../../Materials/SelectedElementMaterial";

type PartProps = {
  partInfo: PartInfo;
};

type OriginalMaterial = {
  material: Material | Material[] | undefined;
};

const LegoPartV2 = (props: PartProps) => {
  const { partInfo } = props;
  const { scene } = useGLTF(partInfo.partPath);
  const { handleGetMarkersForSelectedPart } = useTrainInstruction();
  const [markersList, setMarkersList] = useState<Object3D<Object3DEventMap>[]>(
    []
  );
  const [isSelected, setIsSelected] = useState(false);

  const model = useMemo(() => {
    return scene.children[0].clone() as Mesh;
  }, [scene]);
  const modelRef = useRef<Mesh | null>(null);
  const originalMaterial = useRef<OriginalMaterial>({
    material: undefined,
  });
  console.log(model.material);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.setX(partInfo.partStartPosition.x);
      modelRef.current.position.setY(15);
      modelRef.current.position.setZ(partInfo.partStartPosition.z);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSelected && modelRef.current) {
      originalMaterial.current.material = model.material;
      modelRef.current.material = selectedElementMaterial;
    } else if (
      !isSelected &&
      modelRef.current &&
      originalMaterial.current.material
    ) {
      modelRef.current.material = originalMaterial.current.material;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  const renderNests = (
    markersList: Object3D<Object3DEventMap>[],
    geometry: BufferGeometry<NormalBufferAttributes>
  ) => {
    return markersList.map((marker) => {
      return <NestV2 marker={marker} geometry={geometry} />;
    });
  };

  return (
    <>
      <primitive
        ref={modelRef}
        object={model}
        onClick={() => {
          const list = handleGetMarkersForSelectedPart(
            modelRef.current?.userData.partId
          );
          setMarkersList(list);
          setIsSelected(true);
        }}
        onPointerMissed={() => {
          if (isSelected) {
            setMarkersList([]);
            setIsSelected(false);
          }
        }}
      />
      <group
        name="NestsForThisPart"
        onClick={(e) => {
          console.log(e);
          /*//Todo Add part to model (onclick must be in nest) */
        }}
      >
        {modelRef.current &&
          renderNests(markersList, modelRef.current.geometry)}
      </group>
    </>
  );
};

export default LegoPartV2;
