import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const FooterIconsWrapper = styled.span`
  display: flex;
  flex-flow: wrap row;
  gap: 2rem;
  width: fit-content;
  align-items: center;
`;

export const FooterVersionInfo = styled.span`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: fit-content;
  position: absolute;
  right: 2rem;
  padding: auto 0;
  color: ${({ theme }) => theme.colors.purple};
`;

export const FooterLogoLink = styled.a`
  width: fit-content;
  padding: 0.5rem;
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: 1rem;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const FooterLogo = styled.img`
  height: 50px;
`;
