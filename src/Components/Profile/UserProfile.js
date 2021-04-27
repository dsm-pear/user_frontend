import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request, useRefresh } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import * as M from "../styled/ViewReport/style";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";
import MainProject from "../../Components/Profile/MainProject";

function UserProfile({ match }) {
  //내 프로젝트 리트
  const [myReportListResponses, setMyReportListResponses] = useState([]);
  const [userProfile, setUserProfile] = useState("");
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
        switch(e.data.status){
          case 400:
            alert("프로필 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(()=>{
              getProfile();
            })
            break;
          default:
            break;
        }
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
