import styled from "styled-components";

export const UserSetsListWrapper = styled.ul`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  gap: 2rem;
  padding: 3rem;
  justify-content: center;

  @media screen and (max-width: 560px) {
    padding: 2rem 0.5rem;
  }
`;
