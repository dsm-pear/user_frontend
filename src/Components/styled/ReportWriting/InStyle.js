import styled from "styled-components";

export const SelctFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTable = styled.div`
  font-family: BBTreeGL;
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 12px;
  color: #000000;
  cursor: pointer;
  padding: 0.2rem 4px;
  margin: 0.3rem 0.3rem;

  &:hover {
    transition: 0.2s;
    color: #5955d8;
  }
`;

export const InList = styled.div`
  font-family: BBTreeGL;
  font-size: 12px;
  font-weight: normal;
  color: #000000;
  cursor: pointer;
  margin: 0 0 5px 12px;

  &:hover {
    transition: 0.2s;
    color: #5955d8;
  }
`;

export const MTbtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    text-align: center;
    width: 5.5rem;
    height: 24px;
    border: 1px solid #6192f3;
    border-radius: 18px;
    outline: none;
    background: #6192f3;
    padding: 0.3rem 1rem;
    color: white;
    font-family: BBTreeGL;
    font-size: 13px;

    &:hover {
      cursor: pointer;
    }
  }
  button:hover {
    cursor: pointer;
  }
`;

export const TeamName = styled.div`
  width: ${({ width }) => width};
  transition: all 0.6s;
  background: #f8f8f8;
  outline: none;
  border: 1px solid #f8f8f8;
  border-radius: 21px;
  padding: 0.3rem 1rem;

  span > input {
    background: #f8f8f8;
    outline: none;
    border: 1px solid #f8f8f8;
    text-align: left;
    font-size: 13px;
    font-family: BBTreeGL;
  }
`;

export const SaveBtn = styled.div`
  margin-right: 1rem;

  div {
    text-align: center;
    width: 5.5rem;
    border: 1px solid #6192f3;
    border-radius: 18px;
    outline: none;
    background: #6192f3;
    padding: 0.3rem 1rem;
    color: white;
    font-family: BBTreeGL;
    font-size: 13px;
  }
  div:hover {
    cursor: pointer;
  }
`;

export const SubBtn = styled.div`
  margin-left: 1rem;

  div {
    text-align: center;
    width: 5.5rem;
    border: 1px solid #6192f3;
    border-radius: 18px;
    outline: none;
    background: #6192f3;
    padding: 0.3rem 1rem;
    color: white;
    font-family: BBTreeGL;
    font-size: 13px;
  }
  div:hover {
    cursor: pointer;
  }
`;
