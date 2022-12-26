import styled from "styled-components";

export const CurrentTimeZone = styled.div`
  width: 50%;
  height: 100%;

  padding-left: 165px;

  @media (max-width: 768px) {
    padding-left: 64px;
    border: none;
  }
  @media (max-width: 375px) {
    border: 2px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;
