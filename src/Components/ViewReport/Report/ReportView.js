import React from "react";
import { FileURL } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = (props) => {
  const fileId = props.fileId;
  const fileDownloadHandler = () => {
    window.open(FileURL + `/report/${fileId}`);
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
        {props.git === "" ? (
          <div style={{ color: "gray" }}>깃허브 링크가 없습니다. </div>
        ) : (
          <a href={props.git}>프로젝트 깃허브 구경하기</a>
        )}
      </S.Linkimg>
      <S.Linkimg>
        <div className="img"></div>
        {props.file === null ? (
          <div style={{ color: "gray", marginLeft: "5px" }}>
            파일이 존재하지 않습니다.
          </div>
        ) : (
          <>
            <p>{props.file}</p>
            <div className="downimg" onClick={fileDownloadHandler}>
              다운로드
            </div>
          </>
        )}
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
