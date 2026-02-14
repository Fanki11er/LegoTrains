import styled from "styled-components";

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  justify-self: flex-start;
  border-radius: 50%;
  border: 3px solid transparent;
  transition: all 1s;
  &:hover,
  &:focus {
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.gradientYellow},
        ${({ theme }) => theme.colors.gradientOrange}
      )
      border-box;
    border: 3px solid transparent;
  }
`;
