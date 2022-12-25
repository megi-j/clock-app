import styled from "styled-components";

interface HiddenProps {
  clicked: boolean;
}
export const Hidden = styled.div<HiddenProps>`
  width: 100%;
  height: 400px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.3871px);
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  padding-top: 74px;
  padding-bottom: 74px;
`;
