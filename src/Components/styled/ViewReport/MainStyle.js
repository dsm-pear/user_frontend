import styled from "styled-components";
import { MainScrollBackground_1 } from "../../../assets/index";
import { StudentProfile, Comment, Link, github } from "../../../assets/index";

const Main = styled.body`
  height: 182vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${MainScrollBackground_1});
  /* background-size: 100vw 100vh; */
  background-repeat: no-repeat;
`;

const MainBox = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 68%;
  height: 1363px;
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
  cursor: pointer;
  margin: 0px 4%;
  width: 64%;
  font-family: BBTreeGB;
  font-size: 20px;
  font-weight: 500;
  span,
  a {
    margin: 0 10px;
    font-weight: 500;
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #56d4e2;
    transition: all 0.5s;
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

const Title = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: #fafbfc;
  margin: 15px 0;
  border: 1px solid var(--color-border-primary);
  p {
    padding: 15px 10px 10px 20px;
  }
`;

const MainText = styled(Title)`
  height: 200px;
  max-height: 200px;
  line-height: 25px;
`;

const Linkimg = styled(Title)`
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
    margin: 10px;
    width: 20px;
    height: 20px;
    background-size: 20px;
    background-image: url(${Link});
  }
  .downimg {
    padding: 5px;
    margin: 10px 20px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #80808054;
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
  max-height: 25%;
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
  height: 70%;
  margin: 20px;
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
    width: 35px;
    height: 35px;
    background-image: url(${StudentProfile});
    background-size: 35px;
    border: none;
    outline: none;
  }
  a,
  span {
    color: black;
    text-decoration: none;
    margin: 3px 10px;
    font-family: BBTreeGl;
    line-height: 25px;
  }
  a:hover {
    color: #5955d8;
    transition: all 0.5s;
  }

  .Name {
    text-align: center;
    font-weight: bold;
    width: 60px;
  }
  .Email {
    text-align: center;
    font-weight: bold;
    width: 20%;
  }
  .Comment {
    width: 55%;
  }

  .deleteButton {
    outline: none;
    border: none;
    padding: 5px;
    margin: 10px 20px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #80808054;
  }
`;
const CommentBox = styled.div``;

const Date = styled.div``;

const CoverLang = styled.div`
  cursor: pointer;
  width: 90%;
  height: 10%;
  border: solid 1px #e4eef2;
  margin-bottom: 37px;
  overflow: auto;

  > h2 {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const TableCover = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: auto;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Language = styled.div`
  cursor: pointer;
  margin: 10px;
  > span {
    margin: 8px;
    width: 5%;
    padding: 5px;
    border: solid 1px #e4eef2;
    border-radius: 10px;
  }
  > span:hover {
    background-color: #e4effe;
    transition: all 0.8s;
  }
`;
const Member = styled(Language)``;

const Year = styled.div`
  width: 25%;
  span {
    margin: 0 20px;
    font-family: BBTreeGl;
  }
`;

const Teambox = styled(CoverLang)`
  height: 7%;
`;

const Modify = styled.div`
  width: 100%;

  button {
    padding: 5px;
    margin: 10px 20px;
    background-color: blue;
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    box-shadow: 1px 1px 5px #80808054;
  }
`;

export {
  Main,
  MainBox,
  Header,
  Contents,
  Title,
  MainText,
  Linkimg,
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
  Member,
  Teambox,
  Modify,
};
