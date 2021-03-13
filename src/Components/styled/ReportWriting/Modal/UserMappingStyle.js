import styled from "styled-components";

export const Result = styled.div`
  height: 14%;
  margin: 8px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BorderResult = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #ffffff;
  border-radius: 7px;
  background-color: #ffffff;

  div {
    width: 100%;
    font-size: 13px;
    font-family: BBTreeGL;
  }
`;

export const BolderCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 12px;
  }

  &:hover {
    cursor: pointer;
  }

  & > span {
    width: 95%;
  }

  & > div {
    width: 5%;
    display: flex;
    justify-content: flex-end;
  }
`;
