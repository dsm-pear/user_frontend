import React from "react";
//import Close from "../img/close.png";

import * as S from "../styled/Login/style";

function Login() {
  return (
    <>
      <S.LoginBody>
        <S.Loginbg>
          <S.Title>LOG IN</S.Title>
          <S.Logininput>
            <input type="id" placeholder="학교 이메일" />
            <input type="pw" placeholder="비밀번호" />
            <button>로그인</button>
            <p>아직 계정이 없으신가요?</p>
          </S.Logininput>
        </S.Loginbg>
      </S.LoginBody>
    </>
  );
}

export default Login;
