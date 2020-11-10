import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportHeader = ({ team, grade, subject, title }) => {
  return (
    <S.Header>
      <S.Name>
        <span>{team}</span>
        <span>{grade}</span>
        <span>{subject}</span>
        <span>{title}</span>
      </S.Name>
    </S.Header>
  );
};
export default ReportHeader;
