import { StyledCanvas } from "../../Components/Organisms/Scene/Scene.styles";
import { ScrollControls, useGLTF } from "@react-three/drei";
import LandingPageAnimation from "../../Components/3DModels/LandingPageAnimation/LandingPageAnimation";
import {
  LandingPageButtonsSection,
  LandingPageHeader,
  SceneSection,
} from "./LandingView.styles";
import animated7722SteamLocomotiveModel from "../../assets/AnimatedScene/Animated7722SteamLocomotiveModel.glb";
import landingPageHeaderSrc from "../../assets/svg/LandingPageHeader.svg";
import LandingPageOverlay from "../../Components/Molecules/LandingPageOverlay/LandingPageOverlay";
import { StyledSubmitButton } from "../../Components/Molecules/Form/FormikForm.styles";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routerPaths";

const LandingView = () => {
  const model = useGLTF(animated7722SteamLocomotiveModel);
  const navigate = useNavigate();
  const camera = model.scene.getObjectByName("Camera");

  return (
    <SceneSection>
      <LandingPageButtonsSection>
        <StyledSubmitButton onClick={() => navigate(paths.loginPath)}>
          Login
        </StyledSubmitButton>
        <StyledSubmitButton
          onClick={() => navigate(paths.accountRegistrationPath)}
        >
          Register
        </StyledSubmitButton>
      </LandingPageButtonsSection>
      <LandingPageHeader src={landingPageHeaderSrc} />
      <StyledCanvas
        camera={{
          near: 1,
          far: 1000,
          position: camera?.position.toArray() || [0, 0, 0],
        }}
      >
        <ScrollControls pages={4}>
          <LandingPageOverlay />
          <LandingPageAnimation
            scene={model.scene}
            animations={model.animations}
            model={model.scene.children[0]}
            camera={camera}
          />
        </ScrollControls>
      </StyledCanvas>
    </SceneSection>
  );
};

export default LandingView;
