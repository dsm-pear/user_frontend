import React, { useEffect, useState } from "react";
import { request, useRefresh } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";

function UserProfile({ match }) {
  //내 프로젝트 리트
  const [MyReportListResponses, setMyReportListResponses] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const [github, setGithub] = useState("");
  const [produce, setProduce] = useState("");
  const refreshHandler = useRefresh();

  useEffect(() => {
    //유저 프로필 API
    const getProfile = async () => {
      try {
        const data = await request(
          "get",
          `/profile?user-email=dummyemail@dsm.hs.kr`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setUserProfile(data.userProfile);
      } catch (e) {
        console.error(e);
      }
    };
    //유저 프로젝트 API
    const getProject = async () => {
      try {
        const data = await request(
          "get",
          `/profile/report?user-email=dummyemail@dsm.hs.kr&size=6&page=0`,
          "",
          ""
        );

        setMyReportListResponses(data.data.profileReportResponses);
      } catch (e) {
        console.error(e);
      }
    };
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
                setProduce={setProduce}
                github={userProfile.gitHub}
                setGithub={setGithub}
              />
            }
            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
              {MyReportListResponses.map(({ type, title, createdAt }) => (
                <S.PreProject>
                  <Project team={type} title={title} date={createdAt} />
                </S.PreProject>
              ))}
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
