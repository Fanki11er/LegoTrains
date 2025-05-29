import useMaterials from "../../../Hooks/useMaterials";

const Floor = () => {
  const { materialsData } = useMaterials();
  return (
    <mesh
      name={"Floor"}
      material={materialsData.blueFloorMaterial}
      position={[0, -1, -500]}
      scale={[2000, 3000, 2]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <boxGeometry />
    </mesh>
  );
};

export default Floor;
