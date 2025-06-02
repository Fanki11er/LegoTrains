"use client";

import styled from "styled-components";
import { BaseButton } from "../../Atoms/Buttons/Buttons.styles";

export const CookiesInfoDialog = styled.dialog`
  overflow: visible;
  position: fixed;
  width: 80%;
  margin-bottom: 30px;
  max-width: 800px;
  min-height: 220px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  justify-self: center;
  align-self: flex-end;
  align-content: center;
  border-radius: 50px;
  z-index: 100;
  padding: 55px;
  opacity: 0;
  animation-name: show;
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.transparentBlack};
    opacity: 0;
    animation-name: show;
    animation-duration: 1.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes show {
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 560px) {
    max-width: 360px;
    width: 95%;
    padding: 35px 20px;
    border-radius: 45px;
  }
`;

export const CookiesInfoContent = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 25px;
  row-gap: 25px;
`;

export const CookieTextWrapper = styled.section`
  width: 100%;
  font-weight: bold;
`;

export const CookiesParagraph = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.purple};
  margin: 5px 0;
  line-height: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const AcceptAllButton = styled(BaseButton)`
  width: fit-content;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.purpleGray};
  color: ${({ theme }) => theme.colors.green};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 560px) {
    padding: 0.5rem;
  }
`;

export const AcceptSelectedButton = styled(BaseButton)`
  width: fit-content;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.purpleGray};
  color: ${({ theme }) => theme.colors.purple};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 560px) {
    padding: 0.5rem;
  }
`;

export const RejectAllButton = styled(BaseButton)`
  width: fit-content;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.purpleGray};
  color: ${({ theme }) => theme.colors.orange};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 560px) {
    padding: 0.5rem;
  }
`;

export const CookieImage = styled.img`
  width: 150px;
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    width: 110px;
  }
`;

export const ConsentsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 50px;

  @media screen and (max-width: 768px) {
    column-gap: 25px;
  }

  /* @media screen and (max-width: 560px) {
    margin-top: 20px;
  } */
`;
