import React, { useState } from "react";
import * as S from "../styled/Login/style";

const Input = ({ placeholder, button, type, setData, Data, background }) => {
  //버튼 색 변경
  const [bcolor, setBcolor] = useState("#e1e1e1");
  const handler = (e) => {
    if (e.target.value !== "") {
      setBcolor("#5955d8");
    } else {
      setBcolor("#e1e1e1");
    }
    //회원가입 창에서 인풋 입력값 보내줌
    setData(e.target.value);
  };
  /* 버튼 클릭시  */
  const buttonclick = (e) => {
    if (button === "인증번호 발신") {
      const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식
      if (!emailRule.test(Data)) {
        console.log("이메일이 규칙과 다릅니다.");
        alert("올바른 이메일을 입력해주세요");
      }
      else{
        alert("이메일이 발신 되었습니다.");
      }
    }
    else if( button === "인증번호 확인"){
      console.log("인증 확인");
    }
  };
  return (
    <S.CoverInput background={background}>
      <input type={type} onChange={handler} placeholder={placeholder} ></input>
      {button && (
        <S.Button onClick={buttonclick} background={bcolor} className="Number">
          {button}
        </S.Button>
      )}
    </S.CoverInput>
  );
};

export default Input;
