import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { Group, MeshStandardMaterial, Object3DEventMap } from "three";
// @ts-expect-error Not a type
import instructionPage from "../../../assets/3D/InstructionPage/InstructionPage.glb";
import { InstructionPageTextures } from "../../../Types/InstructionPageTextures";
import { setTextureOptions } from "../../../Utilities/utilities";
import { useSpring, animated } from "@react-spring/three";
import { ThreeEvent } from "@react-three/fiber";

type Props = {
  pageTextures: InstructionPageTextures;
  index: number;
};

const InstructionPage = (props: Props) => {
  const { pageTextures, index } = props;

  const [isPageTurned, setIsPageTurned] = useState(false);
  const [isPageTurning, setIsPageTurning] = useState(false);

  const pageRef = useRef<Group<Object3DEventMap>>(null);

  const { nodes } = useGLTF(instructionPage);

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
    if (!isPageTurning) {
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

    const frontPageMaterial = new MeshStandardMaterial({
      map: frontPageTexture,
    });

    const backPageMaterial = new MeshStandardMaterial({
      map: backPageTexture,
    });

    return {
      frontPageMaterial,
      backPageMaterial,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        castShadow
        receiveShadow
        geometry={nodes.PageFront.geometry.clone()}
        material={pageMaterials.frontPageMaterial}
        position={[72.05, 0.05, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PageBack.geometry.clone()}
        material={pageMaterials.backPageMaterial}
        position={[72.05, -0.05, 0]}
        rotation={[0, 0, Math.PI]}
      />
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
