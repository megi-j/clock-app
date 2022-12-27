import styled from "styled-components";

export const CurrentTimeZone = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 165px;

  @media (max-width: 768px) {
    padding-left: 64px;
    border: none;
  }
  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-bottom: 16px;
  }
`;
