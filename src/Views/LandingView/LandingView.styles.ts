import styled from "styled-components";
import { theme } from "../../Theme/theme";

export const SceneSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black};
  position: relative;
  overflow: hidden;
`;

export const LandingPageHeader = styled.img`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  //width: 300px;
  //z-index: 10;
`;
