import styled from "styled-components";
import { BasicDashboardSetInformationWrapper } from "../../Atoms/BasicDashboardSetInformationWrapper/BasicDashboardSetInformationWrapper.styles";

type Props = {
  $isCompleted: boolean;
};
// prettier-ignore
export const DashboardSetInformationWrapper = styled(BasicDashboardSetInformationWrapper)<Props>`
  font-weight: 700;
  background-color: ${({ theme, $isCompleted }) =>
    $isCompleted ? theme.colors.greenGray : theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.purple};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purpleGray};
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const DashboardSetInformationImage = styled.img`
  width: 280px;
  height: 190px;
`;
