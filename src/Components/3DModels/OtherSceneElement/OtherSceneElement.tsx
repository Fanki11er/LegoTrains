import { useGLTF } from "@react-three/drei";
import { useDeferredValue, useEffect, useMemo } from "react";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { useThree } from "@react-three/fiber";

type Props = {
  elementPath: string;
  markerId: string;
  elementDescription?: string;
};

const OtherSceneElement = ({ elementPath, markerId }: Props) => {
  const element = useDeferredValue(elementPath);

  const { scene } = useThree();

  const { scene: model } = useGLTF(element);

  const elementModel = useMemo(() => {
    return model.children[0];
  }, [model]);

  useEffect(() => {
    const rootMaker = scene.getObjectByName("SceneRootMarker");
    const destinationMarker = rootMaker?.children.find((marker) => {
      return marker.userData.forModelId === markerId;
    });

    if (rootMaker && destinationMarker && elementModel) {
      elementModel.position.copy(destinationMarker.position);
      elementModel.quaternion.copy(destinationMarker.quaternion);
      rootMaker.add(elementModel);
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
