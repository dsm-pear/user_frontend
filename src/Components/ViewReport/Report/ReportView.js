import React, { useState } from "react";
import { FileURL } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = (props) => {
  const fileDownloadHandler = () => {
    window.open(FileURL + `/report/20`);
  };

  return (
    <S.Contents>
      {/* 보고서 수정 삭제   */}
      <S.Modify>
        <button>수정</button>
        <button>삭제</button>
      </S.Modify>
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
        <p>{props.file}</p>
        <div className="downimg" onClick={fileDownloadHandler}>
          다운로드
        </div>
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
