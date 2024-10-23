import styled from "styled-components";
import { show } from "../../../Theme/helpers";

export const FormError = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.lightRed};
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.S};
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
