import { useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect /*useRef*/ } from "react";
import {
  AnimationClip,
  Color,
  //DirectionalLight,
  Object3D,
  Object3DEventMap,
} from "three";

type Props = {
  scene: Object3D<Object3DEventMap>;
  animations: AnimationClip[];
  model: Object3D<Object3DEventMap>;
  camera?: Object3D<Object3DEventMap>;
};
const LandingPageAnimation = ({ scene, animations, model, camera }: Props) => {
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  // const frontLightRef = useRef<DirectionalLight>(null);
  // const sideLightRef = useRef<DirectionalLight>(null);
  // const cameraLightRef = useRef<DirectionalLight>(null);
  // const topLightRef = useRef<DirectionalLight>(null);

  useEffect(() => {
    for (const actionKey in actions) {
      const action = actions[actionKey];
      if (action) {
        action.play();
        action.paused = true;
      }
    }
  }, [actions, model]);

  useFrame(() => {
    for (const actionKey in actions) {
      const action = actions[actionKey];
      if (action) {
        const scrollOffset = scroll.offset;
        const actionDuration = action.getClip().duration;
        action.time = scrollOffset * actionDuration;
      }
    }
  });

  return (
    <>
      <directionalLight
        position={[-200, 20, -50]}
        intensity={5}
        //ref={frontLightRef}
      />
      <directionalLight
        position={[100, 20, 200]}
        intensity={5}
        //ref={sideLightRef}
      />

      <directionalLight
        position={camera?.position.toArray() || [100, 100, 100]}
        rotation={camera?.rotation}
        intensity={2}
        //ref={cameraLightRef}
      />

      <directionalLight
        position={[0, 180, 0]}
        rotation={[0, 0, 0]}
        intensity={3}
        color={new Color("#FBA400")}
        //ref={topLightRef}
      />

      {scene && <primitive object={scene} position={[0, -185, 0]} />}
    </>
  );
};

export default LandingPageAnimation;
