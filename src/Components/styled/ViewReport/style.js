import styled from "styled-components";
import { MainBackground } from "../../../assets";

const Main = styled.div`
  height: 100vh;
  background-image: url(${MainBackground});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.div`
display: flex;
flex-direction: row;

  width: 1500px;
  height: 680px;

  .coverCategory{
    width: 280px;
    margin-right: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 80px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to bottom, #5955d8, #716dec);

  span {
    font-size: 23px;
    color: white;
    font-family: BBTreeGB;
  }
`;

const Categorybar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  width: 280px;
  height: 580px;
  border: solid 1px #e4eef2;
  background-color: white;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Category = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 30%;

  cursor: pointer;
  & > span {
    font-size: 20px;
    font-family: BBTreeGb;
    font-weight: 400;
  }
`;

const ReportKindOf = styled.div`
  margin: 10px 0 0 20px;
  display: flex;
  flex-direction: column;
  width: auto;

  span {
    margin: 5px;
    font-size: 15px;
    font-family: BBTreeGb;
  }
  span:hover {
    color: #5a5edc;
  }
`;

const MainProject = styled.div`
  width : 100%;
  height : 100%;
  border: solid 1px #e4eef2;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;

`;

export { Main, Cover, Box, Categorybar, Category, ReportKindOf, MainProject };
