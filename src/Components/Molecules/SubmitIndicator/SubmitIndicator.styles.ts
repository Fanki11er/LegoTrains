import styled from "styled-components";
type Props = {
  $size?: number;
};

export const SubmitIndicatorImg = styled.img<Props>`
  width: ${({ $size }) => ($size ? `${$size}px` : "70px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "70px")};
  animation-name: rotating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
