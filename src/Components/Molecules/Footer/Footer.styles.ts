import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 0 1rem;
  align-self: flex-end;

  @media screen and (max-width: 680px) {
    height: 65px;
  }
`;

export const FooterIconsWrapper = styled.span`
  display: flex;
  flex-flow: wrap row;
  gap: 2rem;
  width: fit-content;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 680px) {
    gap: 0.5rem;
  }
`;

export const FooterVersionInfo = styled.span`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.purple};

  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
  }
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

  @media screen and (max-width: 680px) {
    height: 40px;
  }
`;
