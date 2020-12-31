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
  setPost, //이메일 발송
}) => {
  //버튼 색 변경
  const [bcolor, setBcolor] = useState("#e1e1e1");

  const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const handler = (e) => {
    /* 이메일 정규화되면 버튼 색 바뀜 */
    if (e.target.value.length >= 8 && emailRule.test(Data)) {
      setBcolor("#5955d8");
    } else {
      setBcolor("#e1e1e1");
    }
    //회원가입 창에서 인풋 입력값 보내줌
    setData(e.target.value);
  };
  const cilckEmailButtonHeandler = async () => {
    if (button === "인증번호 발신") {
      if (!emailRule.test(Data)) {
        alert("올바른 이메일을 입력해주세요");
      } else {
        alert("이메일이 발신 되었습니다.");
        //인증번호 발송 하기 위해 이메일 보내기
        try {
          const data = await request("get", "/email/auth", "", {});
          setPost(post);
        } catch (e) {
          console.error(e);
        }
        console.log("확인");
      }
    } else if (button === "인증번호 확인") {
      //인증번호 확인 값 보내기
      try {
        const { data } = await request("put", "/email/auth", "", {
          number: check,
          email: post,
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
      console.log(124);
    }
  };

  return (
    <S.CoverInput background={background}>
      <input type={type} onChange={handler} placeholder={placeholder}></input>
      {button && (
        <S.Button
          post={post}
          number={check}
          onClick={cilckEmailButtonHeandler}
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
