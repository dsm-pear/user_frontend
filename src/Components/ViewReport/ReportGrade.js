import React from "react";
import * as S from "../styled/ViewReport/style";

const  ReportGrade = ({grade}) => {

  return (
    <S.Box>
      <span>{grade}학년 보고서 보기</span>
    </S.Box>
  );
}

export default ReportGrade;
