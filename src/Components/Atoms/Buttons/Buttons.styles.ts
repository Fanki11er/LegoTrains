import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.transparent};
  transition: all 0.5s;
  font-weight: 700;
`;

export const LogoutButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.transparentPurple};
  width: fit-content;
  padding: 0.6rem 3rem;
  font-size: ${({ theme }) => theme.fontSizes.S};
  color: ${({ theme }) => theme.colors.white};
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
