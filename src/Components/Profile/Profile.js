//프로필 컴포넌트
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  const [userName, setUserName] = useState(props.name);
  const [userEmail, setUserEmail] = useState(props.email);
  const [introduce, setIntroduce] = useState(props.produce);

  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <input
          className="input"
          type="name"
          placeholder={userName}
          disabled="false"
          //disabled={props.text === "저장" ? false : true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input"
          type="email"
          placeholder={userEmail}
          disabled="false"
          //disabled={props.text === "저장" ? false : true}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input  x
          className="input introduce"
          type="text"
          placeholde={introduce}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => setIntroduce(e.target.value)}
        />
      </S.ProPhoto>
      <S.Git>
        <Link to={props.github} onChange={(e) => props.setGithub(e.target.value)}>
          {userName} 님의 GITHUB 구경하기
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

