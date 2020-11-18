import styled from "styled-components";
import { MainScrollBackground_1 } from "../../../assets/index";
import { StudentProfile, Comment, Link } from "../../../assets/index";

const Main = styled.body`
  height: 182vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${MainScrollBackground_1});
  /* background-size: 100vw 100vh; */
  background-repeat: no-repeat;
`;

const MainBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 68%;
  height: 80%;
  border: solid 1px #e4eef2;
  background-color: white;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
`;

/* 헤더 바탕 */
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8%;
  border-bottom: solid 1px #e4eef2;
`;
/* 헤더 제목 */
export const Name = styled.div`
  margin: 0 20px;
  width: 80%;
  font-family: BBTreeGl;
  font-size: 20px;
  font-weight: 500;
  span {
    margin: 0 10px;
    font-weight: 500;
    text-decoration: none;
    color: black;
  }
  /* team 별로 색 다르게 */
  span:nth-child(1) {
    color: ${({ color }) => color};
  }
`;

const Contents = styled.div`
  margin: 50px;
  width: 90%;
  height: auto;
`;

const title = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  margin: 15px 0;
  border: 1px solid var(--color-border-primary);
  p {
    padding: 15px 10px 10px 20px;
  }
`;

const MainText = styled(title)`
  height: 200px;
  max-height: 200px;
`;

const LinkFile = styled(title)    `
  display: flex;
  flex-direction: row;
  align-items: center;
  .git {
    margin: 10px;
    width: 25px;
    height: 25px;
    background-size: 25px;
    background-image: url(${github});
  }
  .img {
    width: 30px;
    height: 30px;
    background-image: url(${Link});
    background-size: 30px;
  }

  a,
  p {
    padding: 10px;
  }
  a {
    color: #5955d8;
    text-decoration: none;
  }
`;

const CommentMain = styled.div`
  width: 90%;
  max-height: 35%;
  border: solid 1px #e4eef2;
  height: 30%;
`;

const Add = styled.div`
  width: 25%;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #e4effe;
  padding: 3px 20px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* 댓글 달기 아이콘 */
  > div {
    margin: 3px;
    width: 27px;
    height: 25px;
    background-image: url(${Comment});
    background-size: 25px;
    outline: none;
  }
`;

const Search = styled.input`
  width: 95%;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: transparent;
`;

const MainCom = styled.div`
  width: 90%;
  height: 80%;
  margin: 10px 20px 10px 90px;
  overflow: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    /* 스크롤바의 width */
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    /* 스크롤바의 전체 */
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #81bcff, #56d4e2);
    border-radius: 10px;
    /* 스크롤바 색 */
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  max-width: 90%;
  height: auto;
  border: none;
  border-radius: 20px;
  background-color: #e4effe;
  margin: 15px 0;
  cursor: pointer;

  > div {
    margin: 7px;
    width: 37px;
    height: 35px;
    background-image: url(${StudentProfile});
    background-size: 35px;
    border: none;
    outline: none;
  }

  span {
    margin: 3px 10px;
    font-family: BBTreeGl;
  }
  .Name {
    text-align: center;
    font-weight: bold;
    width: 5%;
  }
  .Email {
    text-align: center;
    font-weight: bold;
    width: 20%;
  }
  .Comment {
    width: 68%;
  }
`;
const CommentBox = styled.div``;

const Date = styled.div``;

const CoverLang = styled.div`
  cursor: pointer;
  width: 90%;
  height: 10%;
  border: solid 1px #e4eef2;
  margin-bottom: 50px;

  > h2 {
    margin: 10px;
    font-size: 20px;
    font-family: BBTreeGl;
  }
`;

const TableCover = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin: 30px;
`;
const Language = styled.div`
  cursor: pointer;
  > span {
    margin: 8px;
    width: 5%;
    padding: 5px;
    border: solid 1px #e4eef2;
    border-radius: 10px;
  }
  > span:hover {
    background-color: #9d9de9;
    transition: all 0.8s;
  }
`;

const Year = styled.div`
  width: 20%;
  span {
    margin: 0 20px;
    font-family: BBTreeGl;
  }
`;

export {
  Main,
  MainBox,
  Header,
  Contents,
  title,
  MainText,
  LinkFile,
  CommentMain,
  Search,
  MainCom,
  CommentBox,
  Info,
  Date,
  Add,
  TableCover,
  CoverLang,
  Language,
  Year,
};
