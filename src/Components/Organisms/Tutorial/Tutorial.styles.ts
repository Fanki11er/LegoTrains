import styled from "styled-components";
import { theme } from "../../../Theme/theme";

export const TutorialWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: 500px;
  min-height: 250px;
  width: fit-content;
  height: fit-content;
  background-color: ${theme.colors.transparentLightBlack};
  border-radius: 15px;
  z-index: 15;
  margin: 0;
  padding: 25px 25px 25px 50px;
  color: ${theme.colors.green};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TutorialMinifigImage = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-60%);
`;

export const TutorialTextIcon = styled.img`
  height: 20px;
  transform: translateY(25%);
  margin: 0 2px;
`;

export const TutorialButtonsWrapper = styled.div`
  display: flex;
  column-gap: 25px;
  justify-content: center;
`;

export const HideTutorialButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${theme.colors.transparent};
  border: 2px solid ${theme.colors.transparent};
  padding: 5px 8px;
  z-index: 20;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colors.transparentPurple};
    border: 2px solid ${theme.colors.orange};
  }
`;

export const HideTutorialIcon = styled.img`
  width: 25px;
`;

export const ShowTutorialIcon = styled.img`
  width: 25px;
`;

export const ShowTutorialButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${theme.colors.transparent};
  border: 2px solid ${theme.colors.transparent};
  padding: 5px 10px 3px 10px;
  z-index: 20;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colors.transparentPurple};
    border: 2px solid ${theme.colors.orange};
  }
`;
