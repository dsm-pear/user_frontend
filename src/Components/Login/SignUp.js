import React from "react";
import * as S from "../styled/Login/style";

function SignUp() {
  return (
    <S.SignUpMain>
      <S.SignUpName>
        <h1>SING UP</h1>
      </S.SignUpName>
      <S.Input>
        <label>
          <input placeholder="이름을 입력해주세요" />
        </label>
      </S.Input>
    </S.SignUpMain>
  );
}

export default SignUp;
