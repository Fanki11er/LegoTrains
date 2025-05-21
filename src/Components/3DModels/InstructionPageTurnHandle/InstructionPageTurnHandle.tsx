import { useEffect } from "react";
import useMaterials from "../../../Hooks/useMaterials";
import { useSpring, animated } from "@react-spring/three";
type Props = {
  height: number;
  width: number;
  positionX: number;
  frontPage?: boolean;
  visible?: boolean;
};

const InstructionPageTurnHandle = ({
  width,
  height,
  positionX,
  frontPage,
  visible,
}: Props) => {
  const { materialsData } = useMaterials();

  const [fade, api] = useSpring(() => ({
    opacity: 0,
    config: {
      mass: 0.5,
      tension: 20,
      friction: 4,
    },
  }));

  const [hover, hoverApi] = useSpring(() => ({
    color: "blue",
    config: {
      mass: 0.5,
      tension: 20,
      friction: 4,
    },
  }));

  useEffect(() => {
    if (visible) {
      api.start({
        opacity: 0.5,
      });
    } else {
      api.start({
        opacity: 0,
      });
    }
  }, [visible, api]);

  return (
    <animated.mesh
      name={"TurnPageHandle"}
      material={materialsData.nestMaterial.clone()}
      material-color={hover.color}
      material-opacity={fade.opacity}
      position={[
        frontPage ? positionX - width * 0.5 : positionX + width * 0.5,
        1,
        0,
      ]}
      scale={[width, height, 0.2]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      onPointerEnter={() => {
        hoverApi.start({
          color: "darkgreen",
        });
      }}
      onPointerLeave={() => {
        hoverApi.start({
          color: "blue",
        });
      }}
    >
      <planeGeometry />
    </animated.mesh>
  );
};

export default InstructionPageTurnHandle;
