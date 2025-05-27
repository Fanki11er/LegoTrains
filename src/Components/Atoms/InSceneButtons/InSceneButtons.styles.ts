import styled from "styled-components";
import { theme } from "../../../Theme/theme";

export const InSceneBaseButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px ${theme.colors.transparent};
  transition: all 0.5s;
  font-weight: 700;
`;

export const InSceneRotateModelContextMenuButton = styled(InSceneBaseButton)`
  width: 70px;
  height: 35px;
  background-color: ${theme.colors.purpleGray};
  color: ${theme.colors.purple};
  &:hover,
  &:focus {
    background-color: ${theme.colors.green};
    color: ${theme.colors.transparentLightBlack};
  }
`;

export const InSceneArrangeModelButton = styled(InSceneBaseButton)`
  width: 130px;
  height: 35px;
  background-color: ${theme.colors.purpleGray};
  color: ${theme.colors.purple};

  &:focus,
  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.transparentLightBlack};
  }
`;
