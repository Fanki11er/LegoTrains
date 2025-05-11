import { useGLTF } from "@react-three/drei";
import { useDeferredValue, useMemo } from "react";

import { Mesh, Object3D } from "three";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

type Props = {
  trackPath: string;
  marker: Object3D;
  parent: Object3D;
};

const Track = ({ trackPath, marker, parent }: Props) => {
  const track = useDeferredValue(trackPath);

  const { scene } = useGLTF(track);

  const model = useMemo(() => {
    const element = scene.children[0].clone() as Mesh;
    element.position.copy(marker.position);
    element.rotation.copy(marker.rotation);
    parent.remove(marker);
    parent.add(element);
    moveElementToFloorLevel(element);
    return element;
  }, [scene, marker, parent]);

  return <>{model && <primitive object={model} />}</>;
};

export default Track;
