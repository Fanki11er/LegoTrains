import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

type ModelBaseProps = {
  position: [number, number, number];
  nestPath: string;
};
const ModelBase = (props: ModelBaseProps) => {
  const { nestPath, position } = props;
  const { nodes } = useGLTF(nestPath);

  const nest = nodes["Scene"].children[0] as Mesh;

  return (
    <mesh name={"ModelBase"} position={position}>
      <mesh
        geometry={nest.geometry}
        material={nest.material}
        userData={nest.userData}
      />
    </mesh>
  );
};

export default ModelBase;
