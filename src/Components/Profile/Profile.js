//프로필 컴포넌트
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  const [inputs, setInputs] = useState({
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

    /*  try {
      await request(
        
      );
    } catch (e) {
      console.log(e);
    }
 */

    setInputs({
      name: name,
      email: email,
      produce: produce,
    });
  };

  return (
    <S.Profile>
      <S.ProPhoto onSubmit={handleSubmit}>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <input
          onChange={onChange}
          name="name"
          value={name}
          className="input"
          type="name"
          placeholder={props.name}
       
          disabled={props.text === "저장" ? false : true}
          //onChange={(e) => props.setUserName(e.target.value)}
        />
        <input
          onChange={onChange}
          name="email"
          value={email}
          className="input"
          type="email"
          placeholder={props.email}
          
          disabled={props.text === "저장" ? false : true}
          //onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          onChange={onChange}
          name="produce"
          value={produce}
          className="input introduce"
          type="text"
          placeholde={props.produce}
          disabled={props.text === "저장" ? false : true}
          //onChange={(e) => setIntroduce(e.target.value)}
        />
      </S.ProPhoto>
      <S.Git>
        <Link
          to={props.github}
          onChange={(e) => props.setGithub(e.target.value)}
        >
          {props.userName} 님의 GITHUB 구경하기
        </Link>
      </S.Git>
      {/*       <S.Produce>
        <inupt
          type="produce"
          placeholder={introduce}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => setIntroduce(e.target.value)}
        />
      </S.Produce> */}
    </S.Profile>
  );
};

export default Profile;
