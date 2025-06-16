import styled from "styled-components";

export const DashboardWarning = styled.div`
  display: flex;
  width: fit-content;
  min-height: 50px;
  align-items: center;
  align-self: center;
  column-gap: 2rem;
  border-radius: 1rem;
  padding: 0.4rem 0.4rem 0.4rem 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.orange};

  @media screen and (max-width: 560px) {
    max-width: 90vw;
  }
`;
