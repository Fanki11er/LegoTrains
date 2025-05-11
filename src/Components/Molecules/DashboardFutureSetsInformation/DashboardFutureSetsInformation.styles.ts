import styled from "styled-components";
import { BasicDashboardSetInformationWrapper } from "../../Atoms/BasicDashboardSetInformationWrapper/BasicDashboardSetInformationWrapper.styles";

export const DashboardFutureSetsInformationWrapper = styled(
  BasicDashboardSetInformationWrapper
)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const DashboardFutureSetInformationImage = styled.img`
  width: 280px;
  height: 190px;
  filter: grayscale();
`;

export const DashboardFutureSetInformationSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;
