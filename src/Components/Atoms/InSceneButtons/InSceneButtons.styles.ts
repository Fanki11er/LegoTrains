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

export const InSceneRotateElementContextMenuButton = styled(InSceneBaseButton)`
  width: 60px;
  height: 30px;
  background-color: green;
`;

export const InSceneElementContextMenuButton = styled(InSceneBaseButton)`
  width: 130px;
  height: 35px;
  background-color: yellow;
`;

export const InSceneFinishModelButton = styled(InSceneBaseButton)`
  width: 130px;
  height: 35px;
  background-color: #22469e;
  border: 2px solid #22469e;

  &:focus,
  &:hover {
    border: 2px solid #fcec20;
  }
`;
