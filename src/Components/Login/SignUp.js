import React, { useState } from "react";
import * as S from "../styled/Login/style";
import Input from "./InputCom";

function SignUp() {
  const [button, setButton] = useState("#e1e1e1");
  const [bcolor, setBcolor] = useState("#777777");
  const handler = (e) => {
    if (e.target.value !== "") {
      setButton("#5955d8");
      setBcolor("#ffffff");
    } else {
      setButton("#e1e1e");
    }
  };

  return (
    <form>
      <S.SignMain>
        <div className="h1Name">
          <h1>SIGN UP</h1>
        </div>
        <div className="InputCover">
          <S.CoverInput>
            <Input onChange={handler} placeholder="이름을 입력해주세요" />
          </S.CoverInput>

          <S.CoverInput>
            <Input
              onChange={handler}
              type="text"
              button="인증번호 발신"
              placeholder="학교 이메일을 입력해주세요"
            />
          </S.CoverInput>
          <S.CoverInput>
            <Input
              onChange={handler}
              type="password"
              button="인증번호 확인"
              placeholder="인증번호를 입력해주세요"
            />
          </S.CoverInput>
          <S.CoverInput>
            <Input
              onChange={handler}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </S.CoverInput>

          <S.CoverInput>
            <Input
              onChange={handler}
              type="password"
              placeholder="비밀번호를 확인해주세요"
            />
          </S.CoverInput>
          <S.SignUpButton style={{ background: bcolor }}>
            회원가입
          </S.SignUpButton>
        </div>
      </S.SignMain>
    </form>
  );
}

export default SignUp;
