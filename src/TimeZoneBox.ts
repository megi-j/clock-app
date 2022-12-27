import styled from "styled-components";

export const TimeZoneBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(48, 48, 48, 0.25);
  @media (max-width: 768px) {
    border: none;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
// border-right: 1px solid rgba(48, 48, 48, 0.25);
