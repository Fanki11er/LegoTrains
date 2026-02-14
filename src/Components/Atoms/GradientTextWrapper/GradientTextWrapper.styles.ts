import styled from "styled-components";

export const GradientTextWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(
    ${({ theme }) => theme.colors.gradientYellow},
    ${({ theme }) => theme.colors.gradientOrange}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
