//프로필 컴포넌트
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  /* const [inputs, setInputs] = useState({
    name: "",
    email: "",
    produce: "",
  });

  const { name, email, produce } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    setInputs({
      name: "",
      email: email,
      produce: produce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInputs({
      name: name,
      email: email,
      produce: produce,
    });
  }; */

  const setName = (e) => {
    const name = e.target.value;
    console.log(name);
  };

  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <input
          className="input"
          type="text"
          placeholder={props.name}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => setName()}
        />

        <input
          type="text"
          className="input"
          placeholder={props.email}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => setName()}
        />
        <input
          className="input introduce"
          type="text"
          placeholde={props.produce}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => setName()}
        />
      </S.ProPhoto>
    </S.Profile>
  );
};

export default Profile;
