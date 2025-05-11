import styled from "styled-components";
import { show } from "../../../Theme/helpers";
import { BaseButton } from "../../Atoms/Buttons/Buttons.styles";

export const ResetSetModalWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  z-index: 10;
  animation: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ResetSetModalContent = styled.section`
  width: 430px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 2rem 2rem;
`;

export const ResetSetModalWarningIcon = styled.img`
  width: 62px;
  height: 60px;
`;

export const ResetSetModalWarningText = styled.span`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.5;
  font-weight: 700;
`;

export const ResetSetModalButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ResetSetModalResetButton = styled(BaseButton)`
  width: 145px;
  height: 45px;
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.darkGray};
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

export const ResetSetModalCloseButton = styled(BaseButton)`
  width: 145px;
  height: 45px;
  color: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.darkGray};
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
