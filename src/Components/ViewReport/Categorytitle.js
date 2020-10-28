import React from "react";
import * as S from "../styled/ViewReport/style";

const Categorytilte = (props) => {
  const { SwName, frist, second, third, fourth } = props;
  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <span>{frist}</span>
        <span>{second}</span>
        <span>{third}</span>
        <span>{fourth}</span>
      </S.ReportKindOf>
    </S.Category>
  );
};

export default Categorytilte;
