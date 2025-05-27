import { PropsWithChildren, Suspense } from "react";
import { SceneSection, StyledCanvas } from "./Scene.styles";
import { OrbitControls } from "@react-three/drei";
import Loader from "../../Molecules/Loader/Loader";
import { Perf } from "r3f-perf";

const Scene = ({ children }: PropsWithChildren) => {
  //Todo Fix scene colors and light
  return (
    <SceneSection>
      <StyledCanvas
        shadows
        camera={{ near: 1, far: 2000, position: [0, 50, 250] }}
      >
        <Suspense fallback={<Loader />}>
          <Perf position={"bottom-left"} />

          <directionalLight position={[0, 50, 5]} intensity={6} />
          <ambientLight intensity={1} />
          <OrbitControls
            makeDefault
            enableDamping
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.05}
            maxDistance={500}
          />
          {children}
        </Suspense>
      </StyledCanvas>
    </SceneSection>
  );
};

export default Scene;
