import React, { useState } from "react";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Login/style";

const Input = ({
  placeholder,
  button,
  type,
  setData,
  Data,
  background,
  post, //이메일
  check, //인증번호 확인
}) => {
  //버튼 색 변경
  const [bcolor, setBcolor] = useState("#e1e1e1");

  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const handler = (e) => {
    setBcolor("#5955d8");
    //회원가입 창에서 인풋 입력값 보내줌
    setData(e.target.value);
  };

  const cilckEmailButtonHeandler = async (e) => {
    //console.log(check.target.value);

    setBcolor("#5955d8");
    if (button === "인증번호 발신") {
      if (!emailRule.test(Data)) {
        alert("올바른 이메일을 입력해주세요");
      } else {
        alert("이메일이 발신 되었습니다.");

        //인증번호 발송 하기 위해 이메일 보내기
        try {
          await request("get", `/email/auth?email=${post}`, "", {});
        } catch (e) {
          console.error(e);
        }
      }
    } else if (button === "인증번호 확인") {
      //인증번호 확인 값 보내기
      try {
        await request("put", "/email/auth", "", {
          email: post,
          number: check,
        });
        alert("인증번호가 확인 되었습니다.");
      } catch (e) {
        console.error(e);
        alert("인증번호를 다시 확인해주세요");
      }
    }
    //인증번호
    else if (check.value.length >= 4) {
      setBcolor("#5955d8");
    }
  };

  return (
    <S.CoverInput background={background}>
      <input type={type} onChange={handler} placeholder={placeholder}></input>
      {button && (
        <S.Button
          post={post}
          number={check}
          onClick={(e) => cilckEmailButtonHeandler(e)}
          background={bcolor}
          className="Number"
        >
          {button}
        </S.Button>
      )}
    </S.CoverInput>
  );
};

export default Input;
