import styled from "styled-components";
export const SubmitIndicatorImg = styled.img`
  width: 70px;
  height: 70px;
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
