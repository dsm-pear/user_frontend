import React, { useEffect, useState /* useState */ } from "react";
import * as S from "../styled/Login/style";
import InputCom from "./InputCom";

function SignUp() {
  const [button, setButton] = useState("#e1e1e1");
  const [bcolor, setBcolor] = useState("#777777");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [check, setCheck] = useState("");
  const [password, setPassword] = useState("");
  const [pwconfirm, setPwconfirm] = useState("");
  const [input, setInput] = useState("#e3f0ff");

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
  //비밀번호 재 확인
  const submit = (e) => {
    if (password.length <= 8 && password.length <= 13) {
      alert("비밀번호를 8자 이상 13자 이하로 입력해주세요");
      if (password !== pwconfirm) {
        console.log("달라요");
        setInput("#ffeded");
        alert("비밀번호를 다시 확인해주세요");
      }
    }
  };
  //이름이 입력 될때마다 찍기
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <S.Main>
      <form onChange={compare}>
        <S.SignMain>
          <div className="h1Name">
            <h1>SIGN UP</h1>
          </div>
          <div className="InputCover">
            <S.CoverInput>
              <InputCom placeholder="이름을 입력해주세요" setData={setName} />
            </S.CoverInput>

            <S.CoverInput>
              <InputCom
                type="text"
                button="인증번호 발신"
                placeholder="학교 이메일을 입력해주세요"
                setData={setPost}
                Data={post}
              />
            </S.CoverInput>
            <S.CoverInput>
              <InputCom
                type="password"
                button="인증번호 확인"
                placeholder="인증번호를 입력해주세요"
                setData={setCheck}
                Data={check}
              ></InputCom>
            </S.CoverInput>
            <S.CoverInput>
              <InputCom
                type="password"
                placeholder="비밀번호를 입력해주세요"
                name="password"
                setData={setPassword}
                confirm={password}
              />
            </S.CoverInput>

            <S.CoverInput>
              <InputCom
                style={{ background: input }}
                type="password"
                placeholder="비밀번호를 확인해주세요"
                setData={setPwconfirm}
              />
            </S.CoverInput>
            <S.SignUpButton
              onClick={submit}
              style={{ background: button, color: bcolor }}
            >
              회원가입
            </S.SignUpButton>
          </div>
        </S.SignMain>
      </form>
    </S.Main>
  );
}

export default SignUp;
