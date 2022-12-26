import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 60%;
  height: 100%;
  background: none;
  color: #000;
  opacity: 0.5;
  letter-spacing: 5px;
  text-transform: uppercase;
  border: none;
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 375px) {
    font-size: 12px;
    letter-spacing: 3.75px;
  }
`;
