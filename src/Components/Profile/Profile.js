//프로필 컴포넌트
import React, { useEffect, useState } from "react";
import * as S from "../styled/Profile/style";
import axois from "axios";

const Profile = ({ text,  }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [github, setGithub] = useState("");
  const [introduce, setIntroduce] = useState("");

  const userProfileHandler = async () => {
    try {
      const { data } = await axois.get(
        "https://api.dsm-pear.hs.kr/user/profile",
        {
          userName,
          userEmail,
          git_hub: "https://gibhub.com./syxxn",
          self_intro: introduce,
        }
      );

      setUserName(data.userName)
    } catch {}
  };

  useEffect(() => {
    userProfileHandler();
  },[]);

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
        <a href={github} onChange={(e) => setGithub(e.target.value)}>
          깃허브
        </a>
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
