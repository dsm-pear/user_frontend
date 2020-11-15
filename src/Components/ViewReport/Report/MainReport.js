import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import ReportHeader from "./ReportHeader";
import ReportView from "./ReportView";
import ReportComment from "./ReportComment";
import ReportLanguage from "./ReportLanguage";

function MainReport() {
  return (
    <S.Main>
      <S.MainBox>
        <ReportHeader
          team="동아리"
          grade="1학년"
          subject="웹 개발 보고서"
          title="이 페이지는 보고서 보기 페이지 입니다."
        />
        <ReportView
          title="이 페이지는 보고서 보기 페이지 입니다."
          text="안녕하세요 1학년 3반 강은빈 입니다. 저는 프론트엔드 개발자를 희망하고 있습니다. "
          git="https://github.com/silverbeen"
          file="보고서 pdf"
        />
        <ReportLanguage />
        <ReportComment />
      </S.MainBox>
    </S.Main>
  );
}

export default MainReport;
