import styled from "styled-components";
import { MainBackground } from "../../../assets";

const Main = styled.div`
  height: 100vh;
  background-image: url(${MainBackground});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;

`;

const Cover = styled.div`
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  width: 77%;
  height: 73%;
  .coverCategory {
    width: 20%;
    margin-right: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to bottom, #5955d8, #716dec);
  cursor: pointer;

  span {
    font-size: 23px;
    color: white;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const Categorybar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  width: 100%;
  height: 86%;
  border: solid 1px #e4eef2;
  background-color: white;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  &:nth-child(2) {
    margin-top: 30px;
  }

  cursor: pointer;
  & > span {
    margin: 15px 0 0 30px;
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 800;
  }
`;

const ReportKindOf = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > ul > a {
    color: black;
    font-weight: 300px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 10px 0 10px 50px;
    width: 85%;
    font-size: 15px;
    font-family: "Noto Sans KR", sans-serif;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    &.active {
      color: white;

      background-image: linear-gradient(to bottom, #5955d8, #716dec);
    }
  }

  a:hover {
    color: #5a5edc;
  }
`;

const MainProject = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px #e4eef2;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;

const ProjectHeader = styled.nav`
  width: 100%;
  height: 11%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #e4eef2;
  .nav {
    margin: 0 20px;
    & label {
      & div {
        text-align: center;
        cursor: pointer;
        margin: 0 10px;
        padding-top: 5px;
        outline: none;
        border: none;
        width: 63px;
        height: 22px;
        display: inline-block;
        border-radius: 14px;
        font-family: "Noto Sans KR", sans-serif;
        background: #efefef;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      }
      & input {
        display: none;
      }
    }
  }
`;
const MainPro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 960px;
  height: 49px;
  margin: 10px;
  border: 1.6px solid ${(props) => props.color};
  border-radius: 6px;
  background-color: #ffffff;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  .project_team {
    width: 10%;
    color: ${({ color }) => color};
  }
  .project_title {
    width: 60%;
    margin: 0 10px;
  }
  .project_date {
    width: 15%;
  }
  .project_save {
    width: 15%;
  }

  > * {
    &:nth-child(1) {
      width: 10%;
    }
    &:nth-child(2) {
      width: 60%;
      margin: 0 10px;
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 15%;
    }
  }
`;

const MainCover = styled.div`
  margin: 40px;
`;

export {
  Main,
  Cover,
  Box,
  Categorybar,
  Category,
  ReportKindOf,
  MainProject,
  ProjectHeader,
  MainPro,
  Project,
  MainCover,
};
