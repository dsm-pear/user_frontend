import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportHeader = (props) => {
  const color =
    props.team === "CIRCLES"
      ? "#5955d8"
      : props.team === "TEAM"
      ? "#6192f3"
      : "#27d5b1";
  /* 헤더  */
  const createdAt = props.date.split("T");

  return (
    <S.Header>
      <S.Name color={color}>
        {/* 개인/팀/동아리 표시 각각 이름에 따라 색 변함 */}
        <span>[{props.team}]</span>
        {/* 학년 */}
        <Link to="/view-report">{props.grade}</Link> >{/* 개발과 / 개발 이름 */}
        <Link to="/view-report/report-web">{props.subject}</Link> >
        {/* 보고서 제목 */}
        <span>{props.title}</span>
      </S.Name>
      <S.Year>
        <span>게시일</span>
        <span>{createdAt[0]}</span>
      </S.Year>
    </S.Header>
  );
};

export default ReportHeader;
