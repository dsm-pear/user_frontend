import React, { useState } from "react";
import * as S from "../styled/Login/style";

const Input = ({ placeholder, button, type }) => {
  const [number, setNumber] = useState("");
  const [bcolor, setBcolor] = useState("#e1e1e1");
  const handler = (e) => {
    if (e.target.value !== "") {
      setBcolor("#5955d8");
    } else {
      setBcolor("#e1e1e1");
    }
    setNumber(e.target.value);
  };
  return (
    <S.CoverInput>
      <input
        type={type}
        value={number}
        onChange={handler}
        placeholder={placeholder}
      ></input>
      {button ? (
        <S.Button style={{ background: bcolor }} className="Number">
          {button}
        </S.Button>
      ) : null}
    </S.CoverInput>
  );
};

export default Input;
