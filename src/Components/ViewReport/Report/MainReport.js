import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import { createGlobalStyle } from "styled-components";
import { MainScrollBackground } from "../../../assets/index";
import ReportHeader from "./ReportHeader";

function MainReport() {
  const Globlastyle = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${MainScrollBackground});
    //background-size: 100vw 100vh;
    background-repeat: no-repeat;
  }`;

  return (
    <>
      <Globlastyle />
      <S.MainBox>
        <ReportHeader
          team="개인"
          grade="1학년"
          title="이 페이지는 보고서 보기 페이지 입니다."
        />
      </S.MainBox>
    </>
  );
}

export default MainReport;
