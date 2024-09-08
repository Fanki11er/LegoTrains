import { useCallback, useRef, useState } from "react";
import { OriginalMaterial } from "../Types/OriginalMaterial";
import { Mesh, Object3D } from "three";
import { customMaterials } from "../Materials/customMaterials";

const useSelectModel = () => {
  const [isSelected, setIsSelected] = useState(false);

  const originalMaterial = useRef<OriginalMaterial>({});

  const handleSelect = useCallback(
    (modelRef: Mesh | Object3D, isNeeded: boolean) => {
      setIsSelected((prevState) => {
        if (prevState === false && modelRef) {
          const newMaterial = isNeeded
            ? customMaterials.selectedElementMaterial
            : customMaterials.selectedElementMaterialOrange;

          modelRef.traverse((child) => {
            if (child instanceof Mesh) {
              originalMaterial.current[child.uuid] = child.material;
              child.material = newMaterial;
            }
          });
          return true;
        }
        return prevState;
      });
    },
    []
  );

  const handleUnselect = (modelRef: Mesh | Object3D) => {
    if (modelRef) {
      modelRef.traverse((child) => {
        const material = originalMaterial.current[child.uuid];
        if (child instanceof Mesh && material) {
          child.material = material;
        }
      });
      setIsSelected(false);
    }
  };

  return {
    originalMaterial,
    isSelected,
    handleSelect,
    handleUnselect,
  };
};

export default useSelectModel;
