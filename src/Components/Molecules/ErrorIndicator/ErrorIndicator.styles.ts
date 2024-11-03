import styled from "styled-components";

export const ErrorIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
`;

export const ErrorIndicatorImage = styled.img`
  width: 300px;
`;

export const ErrorIndicatorText = styled.span`
  display: flex;
  width: fit-content;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.red};
`;
