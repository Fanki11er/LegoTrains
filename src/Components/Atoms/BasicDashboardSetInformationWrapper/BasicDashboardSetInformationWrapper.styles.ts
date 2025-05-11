import styled from "styled-components";
import { show } from "../../../Theme/helpers";

export const BasicDashboardSetInformationWrapper = styled.div`
  display: flex;
  width: 370px;
  height: 440px;
  gap: 1rem;
  padding: 2.5rem 1rem 2rem 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: all 0.5s;
  animation-name: ${show};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
