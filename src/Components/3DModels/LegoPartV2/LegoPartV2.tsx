import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useEffect, useMemo, useRef } from "react";
import { PartInfo } from "../../../Types/PartInfo";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";

type PartProps = {
  partInfo: PartInfo;
};

const LegoPartV2 = (props: PartProps) => {
  const { partInfo } = props;
  const { scene } = useGLTF(partInfo.partPath);
  const { handleGetMarkersForSelectedPart } = useTrainInstruction();

  const model = useMemo(() => {
    return scene.children[0].clone();
  }, [scene]);
  const modelRef = useRef<Mesh | null>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.setX(partInfo.partStartPosition.x);
      modelRef.current.position.setY(15);
      modelRef.current.position.setZ(partInfo.partStartPosition.z);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <primitive
        ref={modelRef}
        object={model}
        onClick={() => {
          const list = handleGetMarkersForSelectedPart(
            modelRef.current?.userData.partId
          );
          console.log(list);

          //Todo SetState with nests :)
        }}
      />
      <group name="NestsForThisPart"></group>
    </>
  );
};

export default LegoPartV2;
