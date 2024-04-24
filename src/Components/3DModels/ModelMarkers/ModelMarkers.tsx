import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

type Props = {
  modelPath: string;
};

const ModelMarkers = (props: Props) => {
  const { modelPath } = props;
  const { scene } = useGLTF(modelPath);
  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const t = new Box3().setFromObject(ref.current);
      const s = new Vector3();
      t.getSize(s);
      console.log(t, "BOX");
      console.log(s, "SIZE");
    }
  });

  return <primitive object={model} ref={ref} />;
};

export default ModelMarkers;
