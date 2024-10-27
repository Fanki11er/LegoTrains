import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnonymousAccountWarningWrapper = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
  column-gap: 2rem;
  border-radius: 1rem;
  padding: 0.4rem 0.4rem 0.4rem 1rem;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const UpgradeAccountLink = styled(Link)`
  display: flex;
  width: fit-content;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.S};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.6rem 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
