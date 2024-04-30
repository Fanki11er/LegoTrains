import { customMaterials } from "../../../Materials/customMaterials";

const Floor = () => {
  return (
    <mesh
      name={"Floor"}
      material={customMaterials.blueFloorMaterial}
      position={[0, -0.05, 0]}
      scale={[1000, 1000, 1000]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry />
    </mesh>
  );
};

export default Floor;
