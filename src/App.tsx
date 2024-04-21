import { Suspense } from "react";
import { SceneSection } from "./Components/Atoms/AppWrapper/SceneSection.styles";
import { StyledCanvas } from "./Components/Atoms/StyledCanvas/StyledCanvas";
import Loader from "./Components/Molecules/Loader/Loader";
import SteamLocomotive_7722 from "./Components/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import { OrbitControls } from "@react-three/drei";
import SelectedElementContextMenu from "./Components/Organisms/SelectedElementContextMenu";
import ElementsManipulationsProvider from "./Providers/ElementsManipulationProvider";

function App() {
  console.log("RefreshApp");
  return (
    <SceneSection>
      <StyledCanvas
        shadows
        camera={{ near: 0.1, far: 1000, position: [0, 50, 250] }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableDamping
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />

          <directionalLight position={[0, 15, 5]} intensity={3} />
          <ElementsManipulationsProvider>
            <SelectedElementContextMenu />
            <SteamLocomotive_7722 />
          </ElementsManipulationsProvider>
        </Suspense>
      </StyledCanvas>
    </SceneSection>
  );
}

export default App;
