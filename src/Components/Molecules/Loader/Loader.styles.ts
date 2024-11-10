import styled from "styled-components";
import { theme } from "../../../Theme/theme";
type Props = {
  $progress: number;
};

export const LoaderWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 500px;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  transform: translateX(-50%);
`;

export const LoaderIndicator = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  position: relative;
  border: 2px solid ${theme.colors.purple};
  border-radius: 1rem;
`;

export const LoaderProgressBar = styled.div<Props>`
  display: flex;
  width: 100%;
  transform-origin: 0 50%;
  transform: scaleX(${({ $progress }) => $progress * 0.01});
  background-color: ${theme.colors.purple};
  border-radius: 1rem;
`;

export const LoaderIndicatorText = styled.span`
  width: fit-content;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;
