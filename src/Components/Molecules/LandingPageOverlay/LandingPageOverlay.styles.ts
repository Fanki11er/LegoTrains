import { Scroll } from "@react-three/drei";
import styled from "styled-components";
import { theme } from "../../../Theme/theme";

type ContentWrapperProps = {
  $gridPosition?: string;
  $positionBottom?: boolean;
};

type OpacityProps = {
  $opacity: number;
};

export const LandingPageOverlayWrapper = styled(Scroll)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0 2rem;
`;

export const LandingPageOverlaySection = styled.section<OpacityProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => props.$opacity};
  justify-items: center;
`;

export const LandingPageOverlayContentWrapper = styled.div<ContentWrapperProps>`
  width: 300px;
  height: 220px;
  padding: 1rem;
  border-radius: 1rem;
  border: 3px solid transparent;
  background-image:
    linear-gradient(${theme.colors.lightBlack}, ${theme.colors.lightBlack}),
    linear-gradient(
      ${theme.colors.gradientYellow},
      ${theme.colors.gradientOrange}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  grid-column: ${(props) =>
    props.$gridPosition ? props.$gridPosition : "1/1"};
  font-weight: bold;
  line-height: 1.5;
`;

export const LandingPageOverlaySetsContentContainer = styled.section<OpacityProps>`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 1rem;
  opacity: ${(props) => props.$opacity};
`;

export const WithGradientContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    ${theme.colors.gradientYellow},
    ${theme.colors.gradientOrange}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
