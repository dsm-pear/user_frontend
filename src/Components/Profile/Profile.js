//프로필 컴포넌트
import React from "react";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  /* const onClick = () => {
    window.location.href = `${props.github}`;
  }; */

  let str,
    test = document.getElementById("test");
  if (test !== null) {
    str = test.de;
  } else {
    str = null;
  }

  console.log(str);

  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <div className="input">{props.name}</div>
        {<div className="input">{props.email}</div>}

        <input
          type="text"
          className="link-input"
          placeholder="깃허브 링크를 입력해주세요"
          defaultValue={props.gitHub}
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => props.setGithub(e.target.value)}
        />

        <textarea
          id="test"
          className="input introduce"
          type="text"
          placeholder="자기소개를 작성해주세요"
          disabled={props.text === "저장" ? false : true}
          defaultValue={props.selfIntro}
          onChange={(e) => props.setProduce(e.target.value)}
        />
      </S.ProPhoto>
    </S.Profile>
  );
};

export default Profile;
