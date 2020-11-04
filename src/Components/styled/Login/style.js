import styled from "styled-components";

const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Loginbg = styled.div`
  width: 430px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  color: black;
  font-family: "BBTreeGB";
`;

const Logininput = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  & input {
    width: 242px;
    padding: 0 15px;
    height: 42px;
    border-radius: 21px;
    background-color: #e3f0ff;
    border: none;
    outline: none;
    margin: 10px;

    &::placeholder {
      color: #5955d8;
      font-size: 15px;
      margin: 10px;
      font-family: "BBTreeGB";
    }
  }
  & > button {
    width: 272px;
    height: 43px;
    border-radius: 4px;
    background-color: #5955d8;
    border: none;
    outline: none;
    color: white;
    font-family: "BBTreeGB";
    font-size: 18px;
  }

  & p {
    margin: 15px;
    font-family: "BBTreeGB";
    font-size: 15px;
    color: #5955d8;
    border-bottom: 1px solid #5955d8;
  }
`;

const SignUpMain = styled.div``;

const SignUpName = styled.div``;

const Input = styled.input``;

export { LoginBody, Loginbg, Title, Logininput, SignUpMain, SignUpName, Input };
