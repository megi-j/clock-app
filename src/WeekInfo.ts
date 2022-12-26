import styled from "styled-components";

export const WeekInfo = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 375px) {
    border: 2px solid yellow;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
