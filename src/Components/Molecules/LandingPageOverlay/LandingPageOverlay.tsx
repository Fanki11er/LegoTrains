import { useScroll } from "@react-three/drei";
import {
  LandingPageOverlayContentWrapper,
  LandingPageOverlaySection,
  LandingPageOverlaySetsContentContainer,
  LandingPageOverlayWrapper,
  WithGradientContainer,
} from "./LandingPageOverlay.styles";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const LandingPageOverlay = () => {
  const scroll = useScroll();

  const [firstSectionOpacity, setFirstSectionOpacity] = useState(1);
  const [secondSectionOpacity, setSecondSectionOpacity] = useState(1);
  const [setsSectionOpacity, setSetsSectionOpacity] = useState(1);

  useFrame(() => {
    setFirstSectionOpacity(1 - scroll.range(1 / 6, 1 / 10));
    setSecondSectionOpacity(1 - scroll.range(1 / 2, 1 / 10));
    setSetsSectionOpacity(1 - scroll.range(5 / 6, 1 / 15));
  });
  return (
    <LandingPageOverlayWrapper html>
      <LandingPageOverlaySection $opacity={1} />
      <LandingPageOverlaySection $opacity={firstSectionOpacity}>
        <LandingPageOverlayContentWrapper $gridPosition="1/2">
          <WithGradientContainer>
            <h2>Unlock </h2>
            <p>
              the magic of LEGO trains building with this innovative app!
              Immerse yourself in a world where nostalgia meets modern
              technology.
            </p>
          </WithGradientContainer>
        </LandingPageOverlayContentWrapper>
      </LandingPageOverlaySection>
      <LandingPageOverlaySection $opacity={secondSectionOpacity}>
        <LandingPageOverlayContentWrapper $gridPosition="2/2">
          <WithGradientContainer>
            <h2>This app offers:</h2>
            <span>4 Lego trains sets</span>
            <span>27 3D models to build</span>
            <span>Over 1500 pieces to use</span>
            <span>Interactive instructions</span>
          </WithGradientContainer>
        </LandingPageOverlayContentWrapper>
      </LandingPageOverlaySection>

      <LandingPageOverlaySetsContentContainer $opacity={setsSectionOpacity}>
        <LandingPageOverlayContentWrapper>
          <WithGradientContainer>
            <h2>Join </h2>
            <span>
              the adventure today and start building your dream LEGO trains
              collection!
            </span>
            <span>Don't miss out on this unique experience.</span>
          </WithGradientContainer>
        </LandingPageOverlayContentWrapper>
      </LandingPageOverlaySetsContentContainer>
    </LandingPageOverlayWrapper>
  );
};

export default LandingPageOverlay;
