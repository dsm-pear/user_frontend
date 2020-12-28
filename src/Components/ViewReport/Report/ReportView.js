import React from "react";

import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = (props) => {

  return (
    <S.Contents>
      <S.Title>
        <p>{props.title}</p>
      </S.Title>
      <S.MainText>
        <p>{props.text}</p>
      </S.MainText>
      <S.Linkimg>
        <div className="git"></div>
        <a href={props.git}>프로젝트 깃허브 구경하기</a>
      </S.Linkimg>
      <S.Linkimg>
        <div className="img"></div>
        <p >{props.file}</p>
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
