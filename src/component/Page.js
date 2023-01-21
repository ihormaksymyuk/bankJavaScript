import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(191, 195, 34, 1) 0%,
    rgba(45, 220, 253, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
