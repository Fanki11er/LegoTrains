import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { useEffect, useMemo, useRef } from "react";
import { PartInfo } from "../../Types/PartInfo";
import useElementsManipulations from "../../Hooks/useElementsManipulations";

type PartProps = {
  partInfo: PartInfo;
};

const LegoPart = (props: PartProps) => {
  const { partInfo } = props;
  const { nodes } = useGLTF(partInfo.partPath);

  const model = useMemo(() => {
    return nodes["Scene"].clone();
  }, [nodes]);
  const modelRef = useRef<Mesh | null>(null);

  const { handleSelectMesh, handleResetSelectedMesh } =
    useElementsManipulations();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.setX(partInfo.partStartPosition.x);
      modelRef.current.position.setY(15);
      modelRef.current.position.setZ(partInfo.partStartPosition.z);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderModel = (
    model: Object3D<Object3DEventMap>,
    addEvents: boolean = false
  ) => {
    const meshes = model.children as Mesh[];
    return meshes.map((child) => {
      return (
        <mesh
          key={child.uuid}
          ref={modelRef}
          {...child}
          onClick={
            addEvents
              ? (e) => {
                  e.stopPropagation();
                  handleSelectMesh(modelRef.current!);
                }
              : undefined
          }
          onPointerMissed={
            addEvents
              ? () => {
                  handleResetSelectedMesh();
                }
              : undefined
          }
        >
          {renderModel(child)}
        </mesh>
      );
    });
  };
  // useEffect(() => {
  //   model.children.forEach((child) => {
  //     const userData = child.userData;
  //     if (userData.isSlot || userData.isConnector) {
  //       child.visible = false;
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <>{renderModel(model, true)}</>;
};

export default LegoPart;
