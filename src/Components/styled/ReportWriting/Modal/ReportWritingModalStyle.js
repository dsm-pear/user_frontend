import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  visibility: ${({ visibility }) => visibility};
  top: 0;
  right: 0;

  &:hover {
    cursor: default;
  }

  * {
    box-sizing: border-box;
  }
`;

export const LeftModalMain = styled.div`
  transition: all 0.8s;
  height: ${({ height }) => height};
  opacity: ${({ opas }) => opas};
  box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
  width: 350px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const LeftModalSort = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
  &:hover {
    cursor: default;
  }
`;

export const LeftCloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  &:hover {
    cursor: default;
  }

  span > img {
    width: 13px;
  }
  span > img:hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.div`
  border: 2px solid #e4eef2;
  border-radius: 20px;
  background-color: #ffffff;
  margin: 0.5rem 1rem;

  &:hover {
    cursor: default;
  }
`;

export const LeftSearchResult = styled.div`
  height: 72%;
  max-height: 72%;
  margin: 1.5rem 1rem 0;
  border: 1px solid #e4eef2;
  border-radius: 7px;
  background-color: #e4eef2;
  overflow-y: scroll;

  &:hover {
    cursor: default;
  }

  &::-webkit-scrollbar {
    width: 20px;
    /* 스크롤바의 width */
  }

  &::-webkit-scrollbar-thumb {
    background: #5955d8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 7.5px solid transparent;
    /* 스크롤바 색 */
  }

  &::-webkit-scrollbar-track {
    background-color: #e4eef2;
    margin: 0.4rem;
    border-radius: 10px;
    /* 스크롤바의 전체 */
  }
`;

export const TeamState = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1rem;
  padding: 0 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BorderInput = styled.div`
  width: 100%;

  form > span {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  span > input {
    width: 90%;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 15px;
    font-family: BBTreeGL;
    cursor: text;
  }
  span > img {
    width: 14px;
  }
`;

export const BorderState = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: BBTreeGL;
  font-weight: 600;
  img {
    margin-left: 1rem;
  }
`;

export const RightModalMain = styled.div`
  z-index: 5;
  width: 350px;
  height: 450px;
  border: 1px solid #ffffff;
  border-left: 2px solid #e4eef2;
  border-radius: 5px;
  background-color: #ffffff;
  visibility: ${({ visibility }) => visibility};

  &:hover {
    cursor: default;
  }
`;

export const RightModalSort = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;

  &:hover {
    cursor: default;
  }
`;

export const RightCloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: default;
  }
  span > img {
    width: 13px;
  }
  span > img:hover {
    cursor: pointer;
  }
`;

export const RightSearchResult = styled.div`
  height: 72%;
  max-height: 72%;
  margin: 3rem 1rem;
  padding: 0.5rem 0rem;

  overflow-y: scroll;

  &:hover {
    cursor: default;
  }

  &::-webkit-scrollbar {
    width: 20px;
    /* 스크롤바의 width */
  }

  &::-webkit-scrollbar-thumb {
    background: #5955d8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 7.5px solid transparent;
    /* 스크롤바 색 */
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    margin: 0.4rem;
    border-radius: 10px;
    /* 스크롤바의 전체 */
  }
`;

export const ClickMember = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 1rem 0;
  height: 72%;
  max-height: 72%;
  padding: 1rem 0;
`;

export const MemberBox = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  border: 2px solid #5955d8;
  border-radius: 7px;
  background-color: #e1efff;

  div {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: BBTreeGL;
  }

  div > span {
    margin-right: 0.6rem;
  }

  div > input {
    margin-left: 0.6rem;
  }
`;
