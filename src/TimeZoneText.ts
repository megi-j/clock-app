import styled from "styled-components";

export const TimeZoneText = styled.p`
  font-size: 15px;
  color: #303030;
  font-weight: 400;
  letter-spacing: 3px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
    letter-spacing: 2px;
  }
`;
