import React, { useState } from "react";
import { request } from "../../utils/axios/axios";
import { useHistory } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import * as S from "../styled/Login/style";
import InputCom from "./InputCom";

const GlobalStyle = createGlobalStyle`
  body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function SignUp({ Data }) {
  const history = useHistory();
  //모든 창이 입력 되면 버튼색 바뀐
  const [button, setButton] = useState("#e1e1e1");
  const [bcolor, setBcolor] = useState("#777777");
  /* 이름, 이메일, 이메일 확인, 비밀번호, 비밀번호 확인 */
  const [name, setName] = useState(null);
  const [post, setPost] = useState(null);
  //인증번호 확인
  const [check, setCheck] = useState(null);
  const [password, setPassword] = useState(null);
  const [pwconfirm, setPwconfirm] = useState(null);
  //비밀번호 재 확인 색 변경
  const [pwInput, setPwInput] = useState("#e3f0ff");
  const [conInput, setConInput] = useState("#e3f0ff");

  const postSignup = async () => {
    try {
      const { data } = await request(
        "post",
        "/account",
        {},
        {
          name,
          email: post,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      history.push("/login");
    } catch (e) {
      alert("이메일을 다시 확인해주세요");
      console.log(e);
    }
  };

  //회원가입 API 연동
  const buttonCilckHandler = async () => {
    //비밀번호 확인
    if (password.length < 8 || password.length >= 14) {
      alert("비밀번호를 8자 이상 16자 이하로 입력해주세요");
      setPwInput("#ffeded");
      setConInput("#e3f0ff");

      /* 비밀번호의 값이 없으면 초기화 */
      if (password === null) {
        setPwInput("#e3f0ff");
      }
    } else if (password.length >= 8 && password.length <= 14) {

      if (password !== pwconfirm) {
        /* 회원가입 조건중 비밀번호 확인 틀림 */
        console.log("달라요");
        setConInput("#ffeded");
        setPwInput("#e3f0ff");
        alert("비밀번호를 다시 확인해주세요");
        if (pwconfirm === "") {
          setConInput("#e3f0ff");
        }
      } 
      else if (password.length >= 8 && password.length <= 14) {
        /* 회원가입 조건 모두 만족 */
        postSignup();
  
        if (password === pwconfirm) {
          
          alert("회원가입에 성공하셨습니다.");
          history.push("/");
        }
      }
    } 
  };
  //버튼 색 바뀌게 비교
  const compare = (e) => {
    //만약 이름이 널이면~
    if (
      name !== "" &&
      post !== "" &&
      check !== "" &&
      password !== "" &&
      pwconfirm !== ""
    ) {
      console.log("check");
      setButton("#5955d8");
      setBcolor("#ffffff");
    }
  };

  const inputs = [
    {
      type: "text",
      placeholder: "이름을 입력해주세요.",
      setData: setName,
      data: null,
      button: null,
      value: "name",
    },
    {
      type: "text",
      placeholder: "학교 이메일을 입력해주세요",
      setData: setPost,
      data: post,
      button: "인증번호 발신",
      disabled: false,
    },
    {
      type: "text",
      placeholder: "인증번호를 입력해주세요",
      setData: setCheck,
      data: check,
      button: "인증번호 확인",
    },
    {
      type: "text",
      placeholder: "비밀번호를 입력해주세요",
      setData: setPassword,
      data: null,
      button: null,
      background: pwInput,
      disabled: true,
    },
    {
      type: "password",
      placeholder: "비밀번호를 확인해주세요",
      setData: setPwconfirm,
      data: null,
      button: null,
      background: conInput,
    },
  ];

  return (
    <>
      <GlobalStyle />
      <form onChange={compare}>
        <S.SignMain>
          <div className="h1Name">
            <h1>SIGNUP</h1>
          </div>
          <div className="InputCover">
            {inputs.map(
              (
                {
                  type,
                  button,
                  background,
                  data,
                  placeholder,
                  setData,
                  disabled,
                },
                i
              ) => (
                <InputCom
                  key={i}
                  type={type}
                  placeholder={placeholder}
                  setData={setData}
                  Data={data}
                  button={button}
                  background={background}
                  disabled={disabled}
                />
              )
            )}
            <S.SignUpButton
              onClick={buttonCilckHandler}
              background={button}
              color={bcolor}
            >
              회원가입
            </S.SignUpButton>
          </div>
        </S.SignMain>
      </form>
    </>
  );
}

export default SignUp;
