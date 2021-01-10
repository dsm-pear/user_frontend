//내가 보는 내 프로필 수정 하기 누르기
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";
import * as M from "../styled/ViewReport/style";
import Header from "../Main/Header";
import Project from "./Project";
import Profile from "./Profile";

function MyProfile({ props }) {
  const [text, setText] = useState("수정");
  const [profileReportListResponses, setProfileReportListResponses] = useState(
    []
  );

  const [profileData, setProfileData] = useState(null);

  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  //프로필 수정 API
  const ChangeProfile = async ({ github, produce }) => {
    if (text === "수정") {
      setText("저장");
    } else {
      try {
        const { data } = await request(
          "put",
          "/user/profile/",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          {
            git_hub: github,
            self_intro: produce,
          }
        );
      } catch (e) {
        console.error(e);
      }
      setText("수정");
      alert("프로필이 변경되었습니다.");
    }
  };

  //내 프로필 가져오기
  const getProfile = async () => {
    try {
      const { data } = await request(
        "get",
        "/user/profile",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      setProfileData(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  //내 프로젝트 가져오기
  const getMyProject = async () => {
    try {
      const { data } = await request(
        "get",
        "/user/profile/report?size=6&page=0",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setProfileReportListResponses(data.ProfileReportListResponses);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMyProject();
  });

  return (
    <S.Main>
      <Header></Header>
      <S.MainProfile>
        {/* 좌측 프로필 */}
        <S.Cover>
          <Profile
            name={profileData.name}
            email={profileData.email}
            produce={profileData.produce}
            setProduce={profileData.setProduce}
            github={profileData.github}
            setGithub={profileData.setGithub}
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              {profileReportListResponses.map(({ team, title, date }) => (
                <Project
                  team={profileReportListResponses.team}
                  title={profileReportListResponses.title}
                  date={profileReportListResponses.date}x
                />
              ))}
              {/* 밑에 더보기 / 숫자 */}
              <M.Number>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>4</Link>
                <Link>5</Link>
              </M.Number>
            </S.PreProject>
          </S.Project>
        </S.Cover>
        <S.Modify onClick={ChangeProfile}>{text}</S.Modify>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
