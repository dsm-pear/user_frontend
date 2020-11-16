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
          title="보고서 관리 페이지"
        />
        <ReportView
          title="보고서 관리 페이지"
          text="안녕하세요 아보켓 입니다. 저희는 보고서 관리 페이지를 제작하게 되어 본교 학생들이 직접 개발하고 만든 보고서들을 보관하는 시스템으로 만들게 되었습니다. 깃허브 주소로 들어가게 되면 어떤식으로 진행 되었는지 나와있으니 보고서 관리 페이지 PEAR 많이 이용해주시길 바랍니다. "
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
