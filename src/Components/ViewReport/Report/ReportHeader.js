import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportHeader = ({ team, grade, subject, title }) => {
  const color =
    team === "동아리" ? "#5955d8" : team === "팀" ? "#6192f3" : "#27d5b1";
  /* 헤더  */
  return (
    <S.Header>
      <S.Name color={color}>
        {/* 개인/팀/동아리 표시 각각 이름에 따라 색 변함 */}
        <span>[{team}]</span>
        {/* 학년 */}
        <a href="/view-report">{grade}</a> >
        {/* 개발과 / 개발 이름 */}
        <a href="/view-report/report-web">{subject}</a> >
        {/* 보고서 제목 */}
        <span>{title}</span>
      </S.Name> 
    </S.Header>
  );
};

export default ReportHeader;
