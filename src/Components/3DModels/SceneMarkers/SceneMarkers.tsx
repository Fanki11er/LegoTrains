import { useGLTF } from "@react-three/drei";
import { MarkersInfo } from "../../../Classes/Model";
import { useEffect, useMemo, useRef } from "react";
import { Object3D } from "three";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

type Props = {
  sceneMarkersInfo: MarkersInfo;
  position: [number, number, number];
};

const SceneMarkers = (props: Props) => {
  const { sceneMarkersInfo, position } = props;
  const { scene } = useGLTF(sceneMarkersInfo.markersPath);

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const modelRef = useRef<Object3D>(null!);

  // const { isSelected, handleSelect, handleUnselect } = useSelectModel();

  useEffect(() => {
    const model = modelRef.current;
    model.name = sceneMarkersInfo.rootMarkerId;
    moveElementToFloorLevel(modelRef.current);

    //   if (model) {
    //     model.addEventListener("childadded", handleMoveElementToFloorLevel);
    //     model.addEventListener("childremoved", handleMoveElementToFloorLevel);
    //   }

    //   return () => {
    //     model.removeEventListener("childadded", handleMoveElementToFloorLevel);
    //     model.removeEventListener("childremoved", handleMoveElementToFloorLevel);
    //   };
  }, [sceneMarkersInfo]);

  // useEffect(() => {
  //   if (model && persistanceData) {
  //     model.position.copy(persistanceData.position);
  //     model.rotation.copy(persistanceData.rotation);
  //     // model.matrix.copy(persistanceData.matrix);
  //     // model.matrixWorld.copy(persistanceData.matrixWorld);
  //   }
  // }, [model, persistanceData]);

  return (
    <>
      <primitive object={model} ref={modelRef} position={position} />
    </>
  );
};

export default SceneMarkers;
