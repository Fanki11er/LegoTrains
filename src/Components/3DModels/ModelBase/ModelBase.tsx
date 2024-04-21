import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

type ModelBaseProps = {
  nestPath: string;
};
const ModelBase = (props: ModelBaseProps) => {
  const { nestPath } = props;
  const { nodes } = useGLTF(nestPath);

  const nest = nodes["Scene"].children[0] as Mesh;

  return (
    <mesh
      name={"ModelBase"}
      position={[0, 0, 0]}
      //rotation={[0, 0, Math.PI / 2]}
    >
      <mesh
        geometry={nest.geometry}
        material={nest.material}
        userData={nest.userData}
      />
    </mesh>
  );
};

export default ModelBase;
