import { useGLTF } from "@react-three/drei";
import { MarkersInfo } from "../../../Classes/Model";
import { useEffect } from "react";

type Props = {
  sceneMarkersInfo: MarkersInfo;
  position: [number, number, number];
};

const SceneMarkers = ({ sceneMarkersInfo, position }: Props) => {
  const { scene: sceneMarkers } = useGLTF(sceneMarkersInfo.markersPath);

  useEffect(() => {
    return () => {
      useGLTF.clear(sceneMarkersInfo.markersPath);
    };
  }, [sceneMarkersInfo, sceneMarkers]);

  return (
    <>
      <primitive object={sceneMarkers} position={position} />
    </>
  );
};

export default SceneMarkers;
