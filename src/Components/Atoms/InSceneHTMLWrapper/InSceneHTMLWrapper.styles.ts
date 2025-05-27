import styled from "styled-components";
import { HtmlPosition } from "../../../Types/generalTypes";

type Props = {
  $position?: HtmlPosition;
};

export const StyledInSceneHTMLWrapper = styled.div<Props>`
  width: fit-content;
  position: absolute;
  ${({ $position }) =>
    $position?.positionLeft ? `left: ${$position.positionLeft}px;` : ""};
  ${({ $position }) =>
    $position?.positionRight ? `right: ${$position.positionRight}px;` : ""};
  ${({ $position }) =>
    $position?.positionTop ? `top: ${$position.positionTop}px;` : ""};
  ${({ $position }) =>
    $position?.positionBottom ? `bottom: ${$position.positionBottom}px;` : ""};
  ${({ $position }) =>
    !$position?.positionBottom &&
    !$position?.positionTop &&
    !$position?.positionLeft &&
    !$position?.positionRight
      ? `transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  `
      : ``}
`;
