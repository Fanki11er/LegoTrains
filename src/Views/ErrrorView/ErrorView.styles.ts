import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorViewWrapper = styled.div`
  grid-template-columns: 1fr;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: 1fr 80px 80px;
  align-items: center;
  justify-items: center;
`;

export const ReturnLink = styled(Link)`
  width: fit-content;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.purpleGray};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    opacity: 1;
  }
`;
