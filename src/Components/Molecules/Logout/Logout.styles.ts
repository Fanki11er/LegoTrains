import styled from "styled-components";
import { show } from "../../../Theme/helpers";

export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LogoutError = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.S};
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
