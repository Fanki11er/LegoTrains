import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../../Types/ModelProps";
// @ts-expect-error Model is not a type
import PlateModel_3023 from "../../../assets/3D/Plane_3023/Plane_3023.glb";
import { GLTFResult } from "../../../Types/GLTFResult";
import useElementSelection from "../../../Hooks/useElementSelection";
import { selectedElementMaterial } from "../../../Materials/SelectedElementMaterial";

const Plate_3023 = (props: ModelProps) => {
  const { isSelected, handleSelectElement, handleUnselectElement } =
    useElementSelection();
  const { nodes, materials } = useGLTF(PlateModel_3023) as GLTFResult;
  return (
    <mesh
      onClick={(e) => {
        handleSelectElement(e);
      }}
      onPointerMissed={() => {
        handleUnselectElement();
      }}
      {...props}
      castShadow
      receiveShadow
      geometry={nodes["3023_Plate001"].geometry}
      material={
        isSelected ? selectedElementMaterial : nodes["3023_Plate001"].material
      }
      userData={{ partNumber: "3023", name: "3023_Plate.001", M3: {} }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Connector001.geometry}
        material={materials.Slot_Material}
        position={[0, 4.067, 0]}
        userData={{
          isConnected: false,
          isConnector: true,
          forPartNumber: "4178",
          Position: 0,
          Type: 1,
          name: "Connector.001",
          M3: {},
        }}
      />
    </mesh>
  );
};

export default Plate_3023;
