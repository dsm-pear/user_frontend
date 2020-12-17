//프로필 컴포넌트
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../styled/Profile/style";

const Profile = ({
  text,
  name,
  email,
  produce,
  github,
  setGithub,
}) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
 // const [github, setGithub] = useState(github);
  const [introduce, setIntroduce] = useState(produce);

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
          disabled={text === "저장" ? false : true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input"
          type="email"
          placeholder={userEmail}
          disabled={text === "저장" ? false : true}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </S.ProPhoto>
      <S.Git>
        <Link to={github} onChange={(e) => setGithub(e.target.value)}>
          깃허브
        </Link>
      </S.Git>
      <S.Produce>
        <inupt
          type="produce"
          placeholder={introduce}
          disabled={text === "저장" ? false : true}
          onChange={(e) => setIntroduce(e.target.value)}
        />
      </S.Produce>
    </S.Profile>
  );
};

export default Profile;
