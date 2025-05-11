import styled from "styled-components";
import { show } from "../../../Theme/helpers";

export const OkStatus = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.S};
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
