import React, { useState } from "react";
import * as S from "../styled/Login/style";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory("");
  //회원정보
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 처리
  const loginCilckHeadler = async () => {
    try {
      const { data } = await axios.post("http://20.55.121.118:8000/auth", {
        email,
        password,
      });
      localStorage.setItem("access_token", data["access_token"]);
      localStorage.setItem("refresh-token", data["refresh-token"]);
      localStorage.setItem("refresh-exp", data["refresh-exp"]);
      history.push("/");
    } catch (error) {
      alert("정보를 다시 확인해주세요");
    }
  };

  return (
    <>
      <S.LoginBody>
        <S.Loginbg>
          <S.Title>LOGIN</S.Title>
          <S.Logininput>
            <input
              type="id"
              placeholder="학교 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="pw"
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
