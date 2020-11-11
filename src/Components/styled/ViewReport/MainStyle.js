import styled from "styled-components";
import { MainScrollBackground_1 } from "../../../assets/index";

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
  border-radius: 3px;
  background-color: #f9f9f9;
  margin: 15px 0;
  box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.16);
  p,
  a {
  }
`;

const MainText = styled(title)`
  height: 200px;
  max-height: 200px;
`;

const Link = styled(title)``;

const Comment = styled.div`
  width: 90%;
  max-height: 25%;
  border: solid 1px #e4eef2;
  height: 25%;
`;

const Search = styled.input`
  width: 25%;
  height: 20px;
  outline: none;
  border: none;
  border-radius: 20px;
background-color: #e4effe;
padding: 5px 20px;
margin: 20px;

`;

const MainCom = styled.div`
  width: 95%;
  height: 70%;
  border: 1px solid red;
  margin: 15px 20px 10px 20px;
`;

const CommentBox = styled.div``;

const info = styled.div``;

const date = styled.div``;


export {
  Main,
  MainBox,
  Header,
  Contents,
  title,
  MainText,
  Link,
  Comment,
  Search,
  MainCom,
  CommentBox,
  info,
  date,
};
