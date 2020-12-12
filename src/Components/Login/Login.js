import React, { useState } from "react";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Login/style";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory("");
  //회원정보
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 처리
  const loginCilckHeadler = async () => {
    try {
      const { data } = await request(
        "post",
        "/auth",
        {},
        {
          email,
          password,
        }
      );
      localStorage.setItem("access-token", data["access-token"]);
      localStorage.setItem("refresh-token", data["refresh-token"]);
      localStorage.setItem("refresh-exp", data["refresh-exp"]);
      history.push("/");
    } catch (e) {
      alert("정보를 다시 확인해주세요");
      console.log(e);
    }
  };

  return (
    <>
      <S.LoginBody>
        <S.Loginbg>
          <S.Title>LOGIN</S.Title>
          <S.Logininput>
            <input
              type="text"
              placeholder="학교 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginCilckHeadler}>로그인</button>
            <Link to="/signup">아직 계정이 없으신가요?</Link>
          </S.Logininput>
        </S.Loginbg>
      </S.LoginBody>
    </>
  );
}

export default Login;
