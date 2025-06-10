import styled from "styled-components";

export const UserDashboardTopNavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 2rem;
  align-self: flex-start;

  @media screen and (max-width: 860px) {
    padding: 1rem;
  }
`;

export const UserDashboardTopNavigationElementContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    justify-content: flex-start;
  }
`;

export const UserDashboardTopNavigationUserInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    margin-top: auto;
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    justify-self: flex-end;
    margin-top: auto;
  }
`;
