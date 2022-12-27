import styled from "styled-components";

export const WeekInfo = styled.div`
  width: 40%;
  height: 100%;
  padding-left: 94px;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;
