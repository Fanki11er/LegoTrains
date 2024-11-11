import { useGLTF } from "@react-three/drei";
import { MarkersInfo } from "../../../Classes/Model";
import { useEffect } from "react";

type Props = {
  sceneMarkersInfo: MarkersInfo;
  position: [number, number, number];
};

const SceneMarkers = (props: Props) => {
  const { sceneMarkersInfo, position } = props;
  const { scene } = useGLTF(sceneMarkersInfo.markersPath);

  useEffect(() => {
    return () => {
      useGLTF.clear(sceneMarkersInfo.markersPath);
    };
  }, [sceneMarkersInfo]);
  return <primitive object={scene} position={position} />;
};

export default SceneMarkers;
