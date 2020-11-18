import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = ({ title, text, gitLink, fileLink }) => {
  return (
    <S.Contents>
      <S.title>
        <p>{title}</p>
      </S.title>
      <S.MainText>
        <p>{text}</p>
      </S.MainText>
      <S.Link>
        <a href={gitLink}>보고서 깃허브 보기</a>
      </S.Link>
      <S.Link>
        <p>{fileLink}</p>
      </S.Link>
    </S.Contents>
  );
};

export default ReportView;
