import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const SceneSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
`;
