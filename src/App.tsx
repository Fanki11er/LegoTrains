import { Suspense } from "react";
import { SceneSection } from "./Components/Atoms/AppWrapper/SceneSection.styles";
import { StyledCanvas } from "./Components/Atoms/StyledCanvas/StyledCanvas";
import Loader from "./Components/Molecules/Loader/Loader";
import SteamLocomotive_7722 from "./Components/3DModels/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import { OrbitControls } from "@react-three/drei";
import TrainInstructionProvider from "./Providers/TrainInstructionProvider";
import { set7722Instruction } from "./ModelInstructions/SteamLocomotive7722/steamLocomotive7722";
import Floor from "./Components/3DModels/Floor/Floor";

function App() {
  //Todo Fix scene colors and light
  return (
    <SceneSection>
      <StyledCanvas
        shadows
        camera={{ near: 1, far: 1000, position: [0, 50, 250] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 50, 5]} intensity={7} />
          <ambientLight intensity={0.5} />
          <OrbitControls
            enableDamping
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.05}
            maxDistance={500}
          />
          <TrainInstructionProvider instruction={set7722Instruction}>
            <Floor />
            <SteamLocomotive_7722 />
          </TrainInstructionProvider>
        </Suspense>
      </StyledCanvas>
    </SceneSection>
  );
}

export default App;
