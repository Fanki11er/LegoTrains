import { Suspense } from "react";
import { SceneSection } from "./Components/Atoms/AppWrapper/SceneSection.styles";
import { StyledCanvas } from "./Components/Atoms/StyledCanvas/StyledCanvas";
import Loader from "./Components/Molecules/Loader/Loader";
import SteamLocomotive_7722 from "./Components/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import { OrbitControls } from "@react-three/drei";
import useElementsData from "./Hooks/useElementsData";

function App() {
  const { elementsData } = useElementsData();
  return (
    <SceneSection>
      <StyledCanvas
        shadows
        camera={{ near: 0.1, far: 1000, position: [0, 50, 250] }}
        onPointerMissed={() => {
          elementsData.resetSelectedObject();
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableDamping
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <SteamLocomotive_7722 />
        </Suspense>
      </StyledCanvas>
    </SceneSection>
  );
}

export default App;
