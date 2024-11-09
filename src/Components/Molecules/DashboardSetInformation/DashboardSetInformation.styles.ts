import styled from "styled-components";
import { BasicDashboardSetInformationWrapper } from "../../Atoms/BasicDashboardSetInformationWrapper/BasicDashboardSetInformationWrapper.styles";
import { DefaultTheme } from "styled-components/dist/types";
import { Link } from "react-router-dom";
import { DashboardSetStatus } from "../../../Types/DashboardSetStatus";

type Props = {
  $status: DashboardSetStatus;
};

const setColorForStatus = (status: DashboardSetStatus, theme: DefaultTheme) => {
  switch (status) {
    case "started": {
      return theme.colors.purpleGray;
    }
    case "completed": {
      return theme.colors.greenGray;
    }
    default: {
      return theme.colors.darkGray;
    }
  }
};
// prettier-ignore
export const DashboardSetInformationWrapper = styled(BasicDashboardSetInformationWrapper)<Props>`
  font-weight: 700;
  background-color: ${({ theme, $status }) => setColorForStatus($status, theme) };
  color: ${({ theme }) => theme.colors.purple};
  position: relative;
    
`;

export const DashboardSetInformationImage = styled.img`
  width: 280px;
  height: 190px;
`;

export const OpenSetLink = styled(Link)`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.transparent};
  transition: all 0.5s;
  font-weight: 700;
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
