import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request, useRefresh } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import * as M from "../styled/ViewReport/style";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";

function UserProfile({ match }) {
  //내 프로젝트 리트
  const [MyReportListResponses, setMyReportListResponses] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
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
            {<Profile
              name={userProfile.userName}
              email={userProfile.userEmail}
              produce={userProfile.selfIntro}
              setProduce={setProduce}
              github={userProfile.gitHub}
              setGithub={setGithub}
            />}
            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
              {MyReportListResponses.map(({ type, title, createdAt }) => (
                <S.PreProject>
                  <Project team={type} title={title} date={createdAt} />
                </S.PreProject>
              ))}
            {/*   <M.Number>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>4</Link>
                <Link>5</Link>
              </M.Number> */}
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
