import { useEffect } from "react";
import useMaterials from "../../../Hooks/useMaterials";
import { useSpring, animated } from "@react-spring/three";
import { theme } from "../../../Theme/theme";
import useDetectMobile from "../../../Hooks/useDetectMobile";
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
  const isMobile = useDetectMobile();

  const [fade, api] = useSpring(() => ({
    opacity: isMobile ? 0.8 : 0,
    config: {
      duration: 300,
    },
  }));

  const [hover, hoverApi] = useSpring(() => ({
    color: isMobile ? theme.colors.green : theme.colors.nestBlue,
    config: {
      duration: 300,
    },
  }));

  useEffect(() => {
    if (visible) {
      if (!isMobile) {
        api.start({
          opacity: 0.8,
        });
      }
    } else {
      if (!isMobile) {
        api.start({
          opacity: 0,
        });
      }
    }
  }, [visible, api, isMobile]);

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
        if (!isMobile) {
          hoverApi.start({
            color: theme.colors.green,
          });
        }
      }}
      onPointerLeave={() => {
        if (!isMobile) {
          hoverApi.start({
            color: theme.colors.nestBlue,
          });
        }
      }}
    >
      <planeGeometry />
    </animated.mesh>
  );
};

export default InstructionPageTurnHandle;
