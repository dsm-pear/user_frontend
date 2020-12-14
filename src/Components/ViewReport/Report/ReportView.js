import React from "react";

import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = ({ title, text, git, file}) => {

  return (
    <S.Contents>
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.MainText>
        <p>{text}</p>
      </S.MainText>
      <S.Linkimg>
        <div className="git"></div>
        <a href={git}>프로젝트 깃허브 구경하기</a>
      </S.Linkimg>
      <S.Linkimg>
        <div className="img"></div>
        <p>{file}</p>
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
