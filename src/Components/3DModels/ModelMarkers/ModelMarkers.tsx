import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { Box3, Mesh, Object3D, Vector3 } from "three";
import SelectedElementContextMenu from "../../Organisms/SelectedElementContextMenu";
import { selectedElementMaterial } from "../../../Materials/SelectedElementMaterial";
import { OriginalMaterial } from "../../../Types/OriginalMaterial";

type Props = {
  modelPath: string;
};

const ModelMarkers = (props: Props) => {
  const { modelPath } = props;
  const { scene } = useGLTF(modelPath);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const model = useMemo(() => {
    return scene.children[0];
  }, [scene]);

  const ref = useRef<Object3D>(null);
  const originalMaterials = useRef<OriginalMaterial>({});

  useEffect(() => {
    //Todo Figure if element is not on the floor
    if (ref.current) {
      ref.current.addEventListener("childadded", () => {
        const box = new Box3().setFromObject(ref.current!);
        const size = new Vector3();
        box.getSize(size);
        //console.log(box, "BOX");
        //console.log(size, "SIZE");
      });
    }
  }, []);

  return (
    <>
      <primitive
        object={model}
        ref={ref}
        wireframe={true}
        onClick={() => {
          setIsSelected((prevState) => {
            if (prevState === false && ref.current) {
              ref.current?.traverse((child) => {
                if (child instanceof Mesh) {
                  originalMaterials.current[child.uuid] = child.material;
                  child.material = selectedElementMaterial;
                }
              });
              return true;
            }
            return prevState;
          });
        }}
        onPointerMissed={() => {
          if (isSelected && ref.current) {
            ref.current.traverse((child) => {
              const material = originalMaterials.current[child.uuid];
              if (child instanceof Mesh && material) {
                child.material = material;
              }
            });
            setIsSelected(false);
          }
        }}
      />
      {isSelected && ref.current && (
        <SelectedElementContextMenu mesh={ref.current} />
      )}
    </>
  );
};

export default ModelMarkers;
