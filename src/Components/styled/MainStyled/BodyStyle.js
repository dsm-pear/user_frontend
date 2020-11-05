import styled from "styled-components";

export const HeaderBox = styled.div`
  margin-top: 51.5px;
  display: flex;
  margin-left: 177px;
  margin-right: 222px;
`;

export const HeaderSubBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Mainlogo = styled.div`
  margin-right: 208px;
  &:focus {
    border: none;
  }
`;

export const SeachBar = styled.div`
  width: 399px;
  height: 38px;
  display: flex;
  border: none;
  margin-right: 320px;
`;

export const SeachBarSelect = styled.select`
  font-size: 13px;
  width: 70px;
  border: none;
  border-radius: 21px 0 0 21px;
  background-color: #e4eef2;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const SeachBarInput = styled.input`
  width: 269px;
  border: none;
  background-color: #e4eef2;
  &:focus {
    outline: none;
  }
`;

export const SeachBarButton = styled.button`
  width: 60px;
  border: none;
  border-radius: 0 21px 21px 0;
  background-color: #e4eef2;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const MenuBar = styled.div`
  width: 475px;
`;

export const MenuUl = styled.ul`
  justify-content: space-between;
  display: flex;
`;

export const MenuList = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    color: #5955d8;
  }
`;
