import { useThree } from "@react-three/fiber";
import { useCallback } from "react";
import { Object3D, Object3DEventMap, Vector3 } from "three";
import { saveErrorLog } from "../firebase/writeToDbFunctions";

const useFocusCamera = () => {
  const { camera, get } = useThree();
  const controls = get().controls;

  const handleFocusCamera = useCallback(
    (
      mesh: Object3D<Object3DEventMap> | undefined,
      offset: Vector3 = new Vector3(0, 0, 0)
    ) => {
      if (!mesh) {
        const errorMessage = "Mesh is required to focus the camera.";
        console.error(errorMessage);
        saveErrorLog(errorMessage);
        throw new Error(errorMessage);
      }

      const { x, y, z } = mesh.position;
      camera.position.set(x + offset.x, y + 80 + offset.y, z + 200 + offset.z);
      //@ts-expect-error because of the type of controls
      controls?.target.set(x + offset.x, y + offset.y, z + offset.z);
    },
    [camera, controls]
  );

  return { handleFocusCamera };
};

export default useFocusCamera;
