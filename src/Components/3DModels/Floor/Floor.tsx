import useMaterials from "../../../Hooks/useMaterials";

const Floor = () => {
  const { materialsData } = useMaterials();
  return (
    <mesh
      name={"Floor"}
      material={materialsData.blueFloorMaterial}
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
