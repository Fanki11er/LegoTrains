const Floor = () => {
  return (
    <mesh
      position={[0, -0.05, 0]}
      scale={[1000, 1000, 1000]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry />
      <meshStandardMaterial color={"#444444"} />
    </mesh>
  );
};

export default Floor;
