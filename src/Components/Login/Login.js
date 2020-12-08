import React, { useState } from "react";
import * as S from "../styled/Login/style";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory("");
  //회원정보
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //로그인 처리
  const loginCilckHeadler = async () => {
    try {
      const { data } = await axios.post("https://api.dsm-pear.hs.kr/auth", {
        id,
        password,
      });
      localStorage.setItem("token", data.token);
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
              value={id}
              onChange={(e) => setId(e.target.value)}
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
