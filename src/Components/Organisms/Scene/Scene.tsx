import { PropsWithChildren, Suspense } from "react";
import { SceneSection, StyledCanvas } from "./Scene.styles";
import { OrbitControls } from "@react-three/drei";
import Loader from "../../Molecules/Loader/Loader";
import { Perf } from "r3f-perf";

const Scene = ({ children }: PropsWithChildren) => {
  return (
    <SceneSection>
      <StyledCanvas camera={{ near: 1, far: 2500, position: [0, 50, 250] }}>
        <Suspense fallback={<Loader />}>
          <Perf position={"bottom-left"} />

          <directionalLight position={[0, 50, 20]} intensity={5} />
          <ambientLight intensity={0.5} />
          <OrbitControls
            makeDefault
            enableDamping
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.05}
            maxDistance={700}
            minDistance={100}
          />
          {children}
        </Suspense>
      </StyledCanvas>
    </SceneSection>
  );
};

export default Scene;
