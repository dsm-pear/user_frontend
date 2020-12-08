//프로필 컴포넌트
import React from "react";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  const { name, email, produce, github, setProduce, setGithub, text } = props;

  const githunInputChangeHandler = (event) => {
    setGithub(event.target.value);
  };

  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <input
          type="name"
          placeholder={name}
          disabled={text === "저장" ? false : true}
        />
        <input
          type="email"
          placeholder={email}
          disabled={text === "저장" ? false : true}
        />
      </S.ProPhoto>
      <S.Produce>
        <a href={github}>깃허브</a>
        <inupt
          type="produce"
          placeholder={produce}
          disabled={text === "저장" ? false : true}
          onChange={githunInputChangeHandler}
        />
      </S.Produce>
    </S.Profile>
  );
};

export default Profile;
