import React from "react";
import * as S from "../../styled/ViewReport/style";

const CategoryName = (props) => {
  const { SwName, frist, second, third, fourth } = props;

  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <ul>
          <li>{frist}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{fourth}</li>
        </ul>
      </S.ReportKindOf>
    </S.Category>
  );
};

export default CategoryName;
