//내가 보는 내 프로필 수정 하기 누르기
import React, { useState, useEffect } from "react";
import { request, useRefresh } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";
import Header from "../Main/Header";
import Project from "./Project";
import Profile from "./Profile";

function MyProfile(props) {
  const [text, setText] = useState("수정");
  const refreshHandler = useRefresh();

  const [profileReport, setProfileReport] = useState([]);
  const [profileData, setProfileData] = useState("");

  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  //프로필 수정 API
  const ChangeProfile = async () => {
    if (text === "수정") {
      setText("저장");
    } else {
      try {
        await request(
          "put",
          "/user/profile",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          {
            git_hub: props.github,
            self_intro: props.introduce,
          }
        );
      } catch (e) {
        console.error(e);
      }
      setText("수정");
      alert("프로필이 변경되었습니다.");
    }
  };

  const getProfile = async () => {
    try {
      const { data } = await request(
        "get",
        "/user/profile",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setProfileData(data);
    } catch (e) {
      //토큰 만료
      console.error(e);
    }
  };

  const getMyProject = async () => {
    try {
      const { data } = await request(
        "get",
        "/user/profile/report?size=6&page=0",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setProfileReport(data.myPageReportResponses);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
    getMyProject();
  }, []);
  return (
    <S.Main>
      <Header></Header>
      <S.MainProfile>
        {/* 좌측 프로필 */}
        <S.Cover>
          <Profile
            name={profileData.userName}
            email={profileData.userEmail}
            produce={profileData.self_intro}
            //setProduce={profileData.setProduce}
            github={profileData.git_hub}
            //setGithub={setGithub}
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              {profileReport.map((myPageReportResponses, index) => (
                <Project
                  key={index}
                  team={myPageReportResponses.team}
                  title={myPageReportResponses.title}
                  date={myPageReportResponses.createdAt.split("T")[0]}
                />
              ))}

              {/* 밑에 더보기 / 숫자 */}
            </S.PreProject>
          </S.Project>
        </S.Cover>
        <S.Modify type="submit" onClick={ChangeProfile}>
          {text}
        </S.Modify>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
