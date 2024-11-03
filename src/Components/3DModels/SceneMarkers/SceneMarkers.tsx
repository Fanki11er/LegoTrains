import { useGLTF } from "@react-three/drei";
import { MarkersInfo } from "../../../Classes/Model";

type Props = {
  sceneMarkersInfo: MarkersInfo;
  position: [number, number, number];
};

const SceneMarkers = (props: Props) => {
  const { sceneMarkersInfo, position } = props;
  const { scene } = useGLTF(sceneMarkersInfo.markersPath);
  return <primitive object={scene} position={position} />;
};

export default SceneMarkers;
