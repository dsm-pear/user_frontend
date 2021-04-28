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
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #81bcff, #56d4e2);
    border-radius: 10px;
    &:hover {
      background: linear-gradient(135deg, #9dc9fa, #77dce6);
    }
  }

  &:hover {
    cursor: default;
  }

  * {
    box-sizing: border-box;
  }
`;

export const BorderBox = styled.div`
  background-color: white;
  border: 1px solid #e4eef2;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 16%);
  width: 68%;
  min-width: 950px;
  max-width: 68%;
  height: 870px;
  min-height: 870px;
  max-height: 100%;
  margin: 15rem 0 3rem;
  padding: 2rem 2.5rem 0;

  &:hover {
    cursor: default;
  }
`;

export const InlineBox = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: default;
  }
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
    &:hover {
      cursor: default;
    }
  }
  img {
    width: 10rem;
    &:hover {
      cursor: default;
    }
    -webkit-user-drag: none;
  }
  &:hover {
    cursor: default;
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

  &.hover {
    cursor: default;
  }
`;

export const PaddingBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.5rem;

  &.hover {
    cursor: default;
  }
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
    cursor: default;
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
  margin: 4px 10px 0 0;
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
  margin-top: 0.5rem;
`;
