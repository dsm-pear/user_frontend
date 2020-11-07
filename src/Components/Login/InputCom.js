import React, { useState } from "react";
import * as S from "../styled/Login/style";

const Input = ({ placeholder, button, type, setData, Data }) => {
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

  const Chick = (e) => {
    if (Data.post !== "") {
      alert("확인 되었습니다.");
      console.log("강은빈 멍청이");
    }
  };
  return (
    <S.CoverInput>
      <input type={type} onChange={handler} placeholder={placeholder}></input>
      {button ? (
        <S.Button
          onClick={Chick}
          style={{ background: bcolor }}
          className="Number"
        >
          {button}
        </S.Button>
      ) : null}
    </S.CoverInput>
  );
};

export default Input;
