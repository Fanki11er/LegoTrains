import styled from "styled-components";
type Props = {
  $show: boolean;
  $status: string | undefined;
};

export const InSceneProceedStatus = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 150px;
  position: absolute;
  padding: 2rem;
  background-color: ${({ theme, $status }) =>
    $status === "error" ? theme.colors.red : theme.colors.green};
  border-radius: 1rem;
  top: 30px;
  left: 50%;
  transform-origin: 50% 50%;
  margin: 0 auto;
  transition: all 0.8s;
  transform: translateX(-50%)
    ${({ $show }) =>
      $show ? "scaleX(1) translateY(0)" : "scaleX(0.5) translateY(-150%)"};
`;
