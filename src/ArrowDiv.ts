import styled from "styled-components";

export const ArrowDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #999999;
  }
  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`;
