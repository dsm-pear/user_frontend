import styled from "styled-components";

export const HeaderBox = styled.div`
  padding-top: 40px;
  display: fixed;
  z-index: 10;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const HeaderSubBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Mainlogo = styled.div`
  margin-right: 8vw;
  &:focus {
    border: none;
  }
  img {
    cursor: pointer;
  }
`;

export const SeachBar = styled.div`
  width: 399px;
  height: 38px;
  display: flex;
  border: none;
  margin-right: 10vw;
  form {
    display: flex;
    font-family: "Noto Sans KR", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export const SeachBarSelect = styled.div`
  font-size: 13px;
  width: 70px;
  border: none;
  border-radius: 21px 0 0 21px;
  background-color: #e4eef2;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const SeachChoice = styled.div`
  cursor: pointer;
  text-align: center;
  padding-top: 12px;
  img {
    width: 10px;
    margin-right: 3px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const SeachList = styled.div`
  cursor: pointer;
  position: absolute;
  margin-top: 20px;
  z-index: 1000;
  width: 52px;
  height: 47px;
  border-radius: 6px;
  background-color: #e4eef2;
  padding-top: 12px;
  padding-left: 10px;
`;

export const SeachType = styled.div`
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 8px;
  z-index: 100;
  &:hover {
    color: #5955d8;
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
  height: 38px;
  border: none;
  border-radius: 0 21px 21px 0;
  background-color: #e4eef2;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  img {
    width: 20px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const MenuBar = styled.div`
  width: 500px;
`;

export const MenuUl = styled.ul`
  justify-content: space-between;
  display: flex;
  font-size: 20px;
`;

export const MenuList = styled.li`
  list-style: none;
  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
    color: #5955d8;
  }
  a:hover {
    color: #5955d8;
  }
`;

export const MenuSee = styled.div`
  width: 85px;
  height: 100px;
  padding-top: 20px;
  border: solid 1px #e4eef2;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  margin-top: 74.5px;
  margin-left: 4px;
  z-index: 5;
  position: absolute;
  transition: all 0.3s;
`;

export const ReportSee = styled.div`
  font-size: 18px;
  margin-bottom: 14px;
  color: #000000;
  cursor: pointer;
  &:hover {
    font-size: 19px;
    color: #5955d8;
  }
`;
export const Profile = styled.div`
  img {
    margin-left: 20px;
    width: 31px;
  }
`;

export const Mypage = styled.div`
  width: 80px;
  height: 63px;
  padding-top: 18px;
  border: solid 1px #e4eef2;
  background-color: #ffffff;
  text-align: center;
  position: absolute;
  margin-top: 60px;
  margin-left: 5px;
  z-index: 5;
`;

export const Mypro = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
  color: #000000;
  &:hover {
    font-size: 18px;
    color: #5955d8;
  }
`;
