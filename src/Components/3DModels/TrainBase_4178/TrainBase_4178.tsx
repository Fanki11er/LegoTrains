import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../../Types/ModelProps";
// @ts-expect-error Model is not a type
import TrainBaseModel from "../../../assets/3D/TrainBase_4178/Train_base_4178.glb";
import { Ref, forwardRef } from "react";
import { MeshRef } from "../../../Types/MeshRef";
import useElementsData from "../../../Hooks/useElementsData";

const TrainBase_4178 = forwardRef((props: ModelProps, refs: Ref<MeshRef>) => {
  const { nodes, materials } = useGLTF(TrainBaseModel);
  const { elementsData } = useElementsData();

  return (
    <mesh
      {...props}
      ref={refs}
      castShadow
      receiveShadow
      geometry={nodes.Train_base_4178.geometry}
      material={nodes.Train_base_4178.material}
      userData={{ Part_number: "4178", name: "Train_base_4178", M3: {} }}
      onClick={(e) => {
        elementsData.setSelectedObject(e.eventObject);
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NestSlot001.geometry}
        material={materials.Slot_Material}
        position={[-48.009, 4.11, -19.992]}
        scale={[0.19, 1, 0.38]}
        userData={{
          isSlot: true,
          isEmpty: true,
          forPartNumber: "3023",
          Type: 0,
          Position: 1,
          name: "NestSlot.001",
          M3: {},
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NestSlot002.geometry}
        material={materials.Slot_Material}
        position={[-48.009, 4.11, 20.003]}
        scale={[0.19, 1, 0.38]}
        userData={{
          isSlot: true,
          isEmpty: true,
          forPartNumber: "3023",
          Type: 0,
          Position: 1,
          name: "NestSlot.002",
          M3: {},
        }}
      />
    </mesh>
  );
});

export default TrainBase_4178;
