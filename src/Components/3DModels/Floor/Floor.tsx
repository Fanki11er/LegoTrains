import { customMaterials } from "../../../Materials/customMaterials";

const Floor = () => {
  return (
    <mesh
      name={"Floor"}
      material={customMaterials.blueFloorMaterial}
      position={[0, 0, -500]}
      scale={[2000, 2000, 1]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry />
    </mesh>
  );
};

export default Floor;
