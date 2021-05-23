//프로필 컴포넌트
import React from "react";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  /* const onClick = () => {
    window.location.href = `${props.github}`;
  }; */

  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <div className="input">{props.name}</div>
        {<div className="input">{props.email}</div>}

        <input
          /* onClick={() =>
            props.text === "수정" ? onClick() : console.log(props.text)
          } */
          type="text"
          className="link-input"
          placeholder={
            props.gitHub === "" ? "깃허브 링크를 입력해주세요" : props.gitHub
          }
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => {
            e.target.value === null
              ? props.setGithub(props.gitHub)
              : props.setGithub(e.target.value);
          }}
        />

        <textarea
          className="input introduce"
          type="text"
          placeholder={
            props.selfIntro === "" ? "자기소개를 써주세요" : props.selfIntro
          }
          disabled={props.text === "저장" ? false : true}
          onChange={(e) => {
            console.log(e.target.value)
            e.target.value === null
              ? props.setProduce(props.selfIntro)
              : props.setProduce(e.target.value);
          }}
        />
      </S.ProPhoto>
    </S.Profile>
  );
};

export default Profile;
