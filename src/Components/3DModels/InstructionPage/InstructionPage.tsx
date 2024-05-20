import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Mesh, MeshStandardMaterial } from "three";
// @ts-expect-error Not a type
import instructionPage from "../../../assets/3D/InstructionPage/InstructionPage.glb";
import { InstructionPageTextures } from "../../../Types/InstructionPageTextures";
import { setTextureOptions } from "../../../Utilities/utilities";

type Props = {
  pageTextures: InstructionPageTextures;
  index: number;
};

const InstructionPage = (props: Props) => {
  const { pageTextures, index } = props;

  const { scene } = useGLTF(instructionPage);
  const [frontPageTexture, backPageTexture] = useTexture([
    pageTextures.frontPageTexturePath,
    pageTextures.backPageTexturePath,
  ]);
  const pageRef = useRef<Mesh>(null);
  const pageClosedYPosition = (1 - index) * 0.3;
  //const pageOpenedYPosition = index * 0.3;

  const model = useMemo(() => {
    const model = scene.children[0].clone() as Mesh;
    model.position.set(model.position.x, pageClosedYPosition, model.position.z);

    const frontPage = model.getObjectByName("PageFront") as Mesh | undefined;
    const backPage = model.getObjectByName("PageBack") as Mesh | undefined;

    setTextureOptions(frontPageTexture);
    setTextureOptions(backPageTexture);

    if (frontPage) {
      frontPage.material = new MeshStandardMaterial({
        map: frontPageTexture,
        transparent: true,
      });
    }
    if (backPage) {
      backPage.material = new MeshStandardMaterial({
        map: backPageTexture,
        polygonOffset: true,
        transparent: true,
      });
    }
    return model;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  return (
    <primitive
      object={model}
      ref={pageRef}
      onClick={(e: Event) => {
        e.stopPropagation();
      }}
    />
  );
};

export default InstructionPage;
//Todo Try to animate using spring
