import styled from "styled-components";
import { show } from "../../../Theme/helpers";

export const BasicDashboardSetInformationWrapper = styled.div`
  display: flex;
  width: 350px;
  height: 380px;
  gap: 1rem;
  padding: 2rem 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: all 0.5s;
  animation-name: ${show};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
