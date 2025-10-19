import { useGLTF, useTexture } from "@react-three/drei";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import {
  Box3,
  Group,
  MeshStandardMaterial,
  Object3D,
  Object3DEventMap,
  Vector3,
} from "three";

import instructionPagePath from "../../../assets/Blocks/InstructionPage/InstructionPage.glb";
import { InstructionPageTextures } from "../../../Types/InstructionPageTextures";
import { setTextureOptions } from "../../../Utilities/utilities";
import { useSpring, animated } from "@react-spring/three";
import { ThreeEvent } from "@react-three/fiber";
import InstructionPageTurnHandle from "../InstructionPageTurnHandle/InstructionPageTurnHandle";
import useMaterials from "../../../Hooks/useMaterials";

type Props = {
  pageTextures: InstructionPageTextures;
  index: number;
  setIndexUp: (index: number) => void;
  setIndexDown: (index: number) => void;
  onTopPagesIndexes: number[];
};

const InstructionPage = ({
  pageTextures,
  index,
  setIndexUp,
  setIndexDown,
  onTopPagesIndexes,
}: Props) => {
  const [isPageTurned, setIsPageTurned] = useState(false);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [pointedPage, setPointedPage] =
    useState<Object3D<Object3DEventMap> | null>(null);

  const pageRef = useRef<Group<Object3DEventMap>>(null);

  const { materialsData } = useMaterials();

  const instructionPage = useDeferredValue(instructionPagePath);
  const { nodes } = useGLTF(instructionPage);

  const { max, min, pageSize } = useMemo(() => {
    const box = new Box3();
    const pageSize = new Vector3();
    box.setFromObject(nodes.PageFront);
    box.getSize(pageSize);
    box.max.x;
    return {
      max: box.max,
      min: box.min,
      pageSize,
    };
  }, [nodes]);

  const { x: pageStartXPosition, z: pageStartZPosition } =
    nodes.PageParent.position;

  const [frontPageTexture, backPageTexture] = useTexture([
    pageTextures.frontPageTexturePath,
    pageTextures.backPageTexturePath,
  ]);

  const pageClosedYPosition = (1 - index) * 0.1;
  const pageOpenedYPosition = index * 0.1;

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    position: [pageStartXPosition, pageClosedYPosition, pageStartZPosition],
    flip: 0,
    onRest: () => setIsPageTurning(false),
    config: {
      mass: 0.5,
      tension: 4,
      friction: 4,
    },
  }));

  const handleTurnThePage = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (
      !isPageTurning &&
      onTopPagesIndexes.includes(index) &&
      e.object.name === "TurnPageHandle"
    ) {
      if (!isPageTurned) {
        setIndexUp(index);
      } else {
        setIndexDown(index);
      }

      setIsPageTurning(true);
      setIsPageTurned((prevState) => !prevState);
      api.start({
        rotation: isPageTurned ? [0, 0, 0] : [0, 0, Math.PI],
        position: isPageTurned
          ? [pageStartXPosition, pageClosedYPosition, pageStartZPosition]
          : [pageStartXPosition, pageOpenedYPosition, pageStartZPosition],
        flip: isPageTurned ? 0 : 100,
      });
    }
  };

  const pageMaterials = useMemo(() => {
    setTextureOptions(frontPageTexture);
    setTextureOptions(backPageTexture);

    const frontPageMaterial =
      materialsData.instructionPageMaterial.clone() as MeshStandardMaterial;
    frontPageMaterial.map = frontPageTexture;

    const backPageMaterial =
      materialsData.instructionPageMaterial.clone() as MeshStandardMaterial;
    backPageMaterial.map = backPageTexture;

    return {
      frontPageMaterial,
      backPageMaterial,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      useGLTF.clear(instructionPage);
    };
  }, [instructionPage]);

  const handlePointerPageEnter = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (onTopPagesIndexes.includes(index)) {
      setPointedPage(e.object);
    }
  };

  const handlePointerPageLeave = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setPointedPage(null);
  };

  return (
    <animated.group
      ref={pageRef}
      // @ts-expect-error unnecessary types juggling
      position={springs.position}
      // @ts-expect-error unnecessary types juggling
      rotation={springs.rotation}
      onClick={(e) => {
        handleTurnThePage(e);
      }}
    >
      <mesh
        name={"Page"}
        castShadow
        receiveShadow
        // @ts-expect-error unnecessary types juggling
        geometry={nodes.PageFront.geometry}
        material={pageMaterials.frontPageMaterial}
        position={[72.05, 0.05, 0]}
        onPointerEnter={handlePointerPageEnter}
        onPointerLeave={handlePointerPageLeave}
      >
        <InstructionPageTurnHandle
          width={8}
          height={pageSize.z}
          positionX={max.x}
          frontPage
          visible={!!pointedPage}
        />
      </mesh>
      <mesh
        name={"Page"}
        castShadow
        receiveShadow
        // @ts-expect-error unnecessary types juggling
        geometry={nodes.PageBack.geometry}
        material={pageMaterials.backPageMaterial}
        position={[72.05, -0.05, 0]}
        rotation={[0, 0, Math.PI]}
        onPointerEnter={handlePointerPageEnter}
        onPointerLeave={handlePointerPageLeave}
      >
        <InstructionPageTurnHandle
          width={8}
          height={pageSize.z}
          positionX={min.x}
          visible={!!pointedPage}
        />
      </mesh>
    </animated.group>
  );
};

export default InstructionPage;
//Todo Try to animate flipping page

/*pageMaterials.frontPageMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uFlip = { value: 0 };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
    #include <common>
    uniform float uFlip;
    `
    );

    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>
    
     
      transformed.y += pow2(transformed.x * 0.1) * uFlip;
     
       
      `
    );
  };

  pageMaterials.backPageMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uFlip = { value: 0 };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
    #include <common>
    uniform float uFlip;
    `
    );

    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>
    
     
      transformed.y += pow2(transformed.x * 0.1) * uFlip;
     
       
      `
    );
  }; */
