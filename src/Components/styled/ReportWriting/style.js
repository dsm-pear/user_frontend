import styled from "styled-components";
import { MainBackground } from "../../../assets";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  min-width: 1045px;
  min-height: 650px;
  background-image: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;
  overflow-x: none;
  &::-webkit-scrollbar {
    width: 10px;
    /* 스크롤바의 width */
  }
  * {
    box-sizing: border-box;
  }
`;

export const BorderBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #4d4d4d;
  width: 68%;
  min-width: 950px;
  max-width: 68%;
  height: 780px;
  min-height: 780px;
  max-height: 100%;
  margin: 15rem 0 3rem;
  padding: 2rem 2.5rem 0;
`;

export const InlineBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const ReportHeader = styled.div`
  width: 100%;
  height: 10%;
`;

export const ReportLogo = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  span {
    width: 30%;
    padding: 0 0.6rem;
  }
  img {
    width: 10rem;
  }
`;

export const SelectBoxs = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const PaddingBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Select = styled.div`
  position: relative;
  width: 90px;
  border: 1px solid #4d4d4d;
  background: #ffffff;
  padding: 0.2rem 0.3rem;
  font-family: BBTreeGL;
  margin-left: 1.5rem;

  span {
    font-size: 13px;
  }
  img {
    width: 8px;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover > div ~ div {
    visibility: visible;
    height: ${({ height }) => (height ? height : "74")}px;
  }
  & > div ~ div {
    visibility: hidden;
    height: 0px;
  }
`;

export const ViewList = styled.div`
  position: absolute;
  min-width: 90px;
  transition: all 0.3s;
  background-color: #ffffff;
  border: 1px solid #4d4d4d;
  border-top: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  text-align: left;
  cursor: pointer;
  z-index: 1;
<<<<<<< HEAD
  margin: 4px 10px 0 0;
=======
  margin: 4.5px 10px 0 0;
>>>>>>> Modal
  left: -1px;
  overflow: hidden;
`;

export const SelctFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: default;
  }
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

export const ReportBody = styled.div`
  width: 100%;
  height: 90%;
<<<<<<< HEAD
  margin-top: 0.5rem;
=======
`;

export const ReportMain = styled.div`
  &:hover {
    cursor: default;
  }

export const ReportTitle = styled.div`
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    outline: none;
    padding: 0.8rem 0.8rem;
    font-family: BBTreeGL;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
  }
`;

export const UseLang = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
  padding: 0.8rem 0.8rem;

  input {
    width: 100%;
    border: 1px solid #f8f8f8;
    background: #f8f8f8;
    outline: none;
    font-family: BBTreeGL;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
  }
`;

export const colors = [
  "navajowhite",
  "lavender",
  "mistyrose",
  "lightgreen",
  "lavenderblush",
  "honeydew",
  "oldlace",
  "ivory",
];

export const Tag = styled.div`
  border: 1px solid;
  white-space: nowrap;
  color: darkslategray;
  background-color: ${({ index }) => colors[index % colors.length]};
  border: 1px solid ${({ index }) => colors[index % colors.length]};
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  font-family: BBTreeGL;
  font-size: 14px;
  margin-right: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ReprotWriteBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;

  textarea {
    resize: none;
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    outline: none;
    padding: 0.8rem 0.8rem;
    font-family: BBTreeGL;
    font-size: 14px;
    text-align: left;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    width: 100%;
    height: 100%;
  }
  span > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    padding: 0.4rem 0.4rem;
  }
  div > img {
    width: 20px;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  div > input {
    width: 100%;
    border: none;
    outline: none;
    background: #f8f8f8;
    margin-left: 0.4rem;
    font-family: BBTreeGL;
    font-size: 13px;
  }
`;

export const AttachFile = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const inAttachFile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.4rem 0.4rem;
  background: #f8f8f8;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  img {
    width: 20px;
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    font-size: 13px;
    font-family: BBTreeGL;
    color: gray;
  }

  span {
    font-size: 13px;
    font-family: BBTreeGL;
    color: gray;
  }
`;

export const SubmitBox = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem 0 3rem;
`;

export const MakeTeam = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 73%;
  height: 145px;

  span {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

export const MtFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;

  &:hover {
    cursor: default;
  }
`;

export const MtBtn = styled.div`
  text-align: center;
  width: 5.7rem;
  height: 24px;
  margin-top: 6rem;
  border: 1px solid #6192f3;
  border-radius: 18px;
  outline: none;
  background: #6192f3;
  transition: 0.3s;
  padding: 0.3rem 1rem;
  color: white;
  font-family: BBTreeGL;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background: #719cf0;
    transition: 0.3s;
  }
`;

export const SaveSubBtn = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 27%;
  display: flex;
  justify-content: flex-end;
>>>>>>> Modal
`;
