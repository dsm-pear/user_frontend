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
    margin: 10px;
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

  & a {
    margin: 20px;
    font-family: "BBTreeGB";
    font-size: 15px;
    color: #5955d8;
    border-bottom: 1px solid #5955d8;
  }
`;
const SignUpButton = styled.div`
  margin: 30px 10px;
  width: 500px;
  border-radius: 20px;
  background-color: ${({ background }) => background};
  & {
    padding: 15px 0;
    text-align: center;
    font-family: BBTreeGB;
    font-size: 23px;
    color: ${({ color }) => color};
  }
`;

const SignMain = styled.div`
  width: 600px;
  height: 60%;
  .InputCover {
    margin-top: 40px;
  }
  .h1Name {
    margin: 10px;
    width: 27%;
    border-bottom: solid 3px #5955d8;
    & h1 {
      font-family: BBTreeGB;
      font-size: 40px;
    }
  }
`;

const CoverInput = styled.label`
  margin: 10px;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  height: 50px;
  background-color: ${({ background = "#e3f0ff" }) => background};
  & input {
    cursor: pointer;
    padding-left: 10px;
    width: 350px;
    font-size: 15px;
    font-weight: 500;
    font-family: BBTreeGL;
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 20px;
  }
`;

const Button = styled.div`
  cursor: pointer;
  text-align: center;
  color: white;
  margin: 0 10px;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 300;
  font-family: BBTreeGl;
  width: 110px;
  border-radius: 13px;
  background-color: ${({ background }) => background };
`;

export {
  LoginBody,
  Loginbg,
  Title,
  Logininput,
  SignMain,
  SignUpButton,
  Button,
  CoverInput,
};
