import React, { useEffect, useState } from "react";
import { request, useRefresh } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";
import MainProject from "../../Components/Profile/MainProject";

function UserProfile({ match }) {
  //내 프로젝트 리트
  const [myReportListResponses, setMyReportListResponses] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const refreshHandler = useRefresh();

  //유저 프로필 API
  const getProfile = async () => {
    try {
      const data = await request(
        "get",
        `/profile?user-email=201201keb@dsm.hs.kr`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      setUserProfile(data.data);
    } catch (e) {
      console.error(e);
    }
  };
  //유저 프로젝트 API
  const getProject = async () => {
    try {
      const data = await request(
        "get",
        `/profile/report?user-email=201201keb@dsm.hs.kr&size=6&page=0`,
        "",
        ""
      );
      setMyReportListResponses(data.data.profileReportResponses);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
    getProject();
  }, []);

  return (
    <>
      <S.Main>
        <Header></Header>
        <S.MainProfile>
          <S.Cover>
            {
              <Profile
                name={userProfile.userName}
                email={userProfile.userEmail}
                produce={userProfile.selfIntro}
                github={userProfile.gitHub}
              />
            }
            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
              <S.PreProject>
                {myReportListResponses.map((myReportListResponses, index) => (
                  <MainProject
                    key={index}
                    reportId={myReportListResponses.reportId}
                    type={myReportListResponses.type}
                    title={myReportListResponses.title}
                    date={myReportListResponses.createdAt.split("T")[0]}
                  />
                ))}
              </S.PreProject>
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
