import React, { useState } from "react";
import { FileURL } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = (props) => {

  /*   useEffect(() => {
    //파일 상태
    const FileApi = async () => {
      try {
        const data = await fileRequest(
          "get",
          `/report/files/${props.match.params.reportid}`,
          {},
          ""
        );
        console.log(data);
        setFileId(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    FileApi();
  }); */

  const fileDownloadHandler = () => {
    window.open(FileURL + `/report/${props.fileId}`);
  };

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
        <p>{props.file}</p>
        <div className="downimg" onClick={fileDownloadHandler}>
          다운로드
        </div>
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
