import React from "react";
import * as S from "../../styled/ReportWriting/Modal/SubmitSuccessStyle";
import { Close } from "../../../assets";

const SubmitSuccess = ({ setView, setOpa, view, opa }) => {
  const onClick = () => {
    setView("hidden");
    setOpa("0");
  };

  return (
    <S.Main visibility={view}>
      <S.ModalMain opacity={opa}>
        <S.ModalSort>
          <S.CloseBtn onClick={onClick}>
            <span>
              <img src={Close} alt="Close" />
            </span>
          </S.CloseBtn>
          <S.ModalHeader>
            <span>보고서가 </span>
            <span>제출되었습니다.</span>
          </S.ModalHeader>
          <S.ModalMainText>
            <span>
              작성한 보고서의 승인 여부는 선생님의 확인 후 이메일로 알람이
              갑니다. 만약{" "}
            </span>
            <p></p>
            <span>
              보고서를 승인 받지 못했다면 수정이 가능합니다. (소개글 및 파일
              덮어씌우기 가능)
            </span>
          </S.ModalMainText>
        </S.ModalSort>
      </S.ModalMain>
    </S.Main>
  );
};

export default SubmitSuccess;
