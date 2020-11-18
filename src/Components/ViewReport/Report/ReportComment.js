import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from './Comments';

const ReportComment = ({ }) => {
  return (
    <S.Comment>
      <S.Search></S.Search>
      <S.MainCom>
        <Comments>
          
        </Comments>
      </S.MainCom>
    </S.Comment>
  );
};

export default ReportComment;
