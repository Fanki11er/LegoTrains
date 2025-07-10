import styled from "styled-components";

export const ErrorFallbackWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100dvh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const ErrorFallbackImage = styled.img`
  height: 25vh;
  max-height: 200px;
`;

export const ErrorFallbackText = styled.span`
  color: rgba(254, 138, 24, 1);
  font-size: 2rem;
`;
