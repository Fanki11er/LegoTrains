import styled from "styled-components";

export const UserDashboardTopNavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 2rem;
`;

export const UserDashboardTopNavigationElementContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: start;
  gap: 2rem;
  padding: 0 1rem;
`;

export const UserDashboardTopNavigationUserInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
