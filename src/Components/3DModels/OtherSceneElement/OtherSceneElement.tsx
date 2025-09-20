import { useGLTF } from "@react-three/drei";
import { useDeferredValue, useEffect, useMemo } from "react";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { useThree } from "@react-three/fiber";
import useMaterials from "../../../Hooks/useMaterials";
import { MaterialsTypes } from "../../../Providers/MaterialsProvider";
import { Mesh } from "three";

type Props = {
  elementPath: string;
  markerId: string;
  elementDescription?: string;
  materialId?: MaterialsTypes;
};

const OtherSceneElement = ({ elementPath, markerId, materialId }: Props) => {
  const element = useDeferredValue(elementPath);

  const { scene } = useThree();

  const { scene: model } = useGLTF(element);

  const { materialsData } = useMaterials();

  const elementModel = useMemo(() => {
    const elementModel = model.children[0] as Mesh;
    if (materialId) {
      elementModel.material = materialsData[materialId];
    }
    return elementModel;
  }, [model, materialId, materialsData]);

  useEffect(() => {
    const rootMaker = scene.getObjectByName("SceneRootMarker");
    const destinationMarker = rootMaker?.children.find((marker) => {
      return marker.userData.forModelId === markerId;
    });

    if (rootMaker && destinationMarker && elementModel) {
      elementModel.position.copy(destinationMarker.position);
      elementModel.quaternion.copy(destinationMarker.quaternion);

      rootMaker.add(elementModel);

      elementModel.userData.isConnected = destinationMarker.name;

      moveElementToFloorLevel(elementModel);
    }
  }, [scene, elementModel, elementPath, markerId]);

  useEffect(() => {
    return () => {
      useGLTF.clear(element);
    };
  }, [element]);

  return <>{elementModel && <primitive object={elementModel} />}</>;
};

export default OtherSceneElement;
