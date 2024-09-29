import { useGLTF } from "@react-three/drei";
import { MarkersInfo } from "../../../Classes/Model";
import { useMemo } from "react";

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

  return (
    <>
      <primitive object={model} position={position} />
    </>
  );
};

export default SceneMarkers;
