//내가 보는 내 프로필 수정 하기 누르기
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request, useRefresh } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";
import * as M from "../styled/ViewReport/style";
import Header from "../Main/Header";
import Project from "./Project";
import Profile from "./Profile";

function MyProfile(props) {
  const [text, setText] = useState("수정");
  const [profileReportListResponses, setProfileReportListResponses] = useState([]);    
  const [profileData, setProfileData] = useState([]);
  const refreshHandler = useRefresh();

  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  //프로필 수정 API
  const ChangeProfile = async () => {
    if (text === "수정") {
      setText("저장");
    } else {
      try {
        const { data } = await request(
          "put",
          "/user/profile/",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          {
            git_hub: props.github,
            self_intro: props.introduce,
          }
        );
      } catch (e) {
        console.error(e);
        switch (e.data.status) {
          case 400:
            alert("프로필 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
             ChangeProfile();
            });
            break;
          default:
            break;
        }
      }
      setText("수정");
      alert("프로필이 변경되었습니다.");
    }
  };

  useEffect(() => {
    //프로필 API
    const getProfile = async () => {
      try {
        const { data } = await request(
          "get",
          "/user/profile",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
          );
          
          setProfileData(data.profileData);
        } catch (e) {
        //토큰 만료
        console.error(e);
        switch(e.response.status){
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

    getProfile();
    
    //내 프로젝트 가져오기
    const getMyProject = async () => {
      try {
        const { data } = await request(
          "get",
          "/user/profile/report?size=6&page=0",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );

        setProfileReportListResponses(data.MyReportListResponses.ProfileReportListResponses);
      } catch (e) {
        console.error(e);
        switch (e.data.status) {
          case 400:
            alert("프로젝트 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
              getMyProject();
            });
            break;
          default:
            break;
        }
      }
    };
    getMyProject();

  });

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
            setProduce={profileData.setProduce}
            github={profileData.git_hub}
            //setGithub={setGithub}
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              {profileReportListResponses.map(() => (
                <Project
                  team={profileReportListResponses.team}
                  title={profileReportListResponses.title}
                  date={profileReportListResponses.createdAt}
                />
              ))}
              {/* 밑에 더보기 / 숫자 */}
              {/* <M.Number>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>4</Link>
                <Link>5</Link>
              </M.Number> */}
            </S.PreProject>
          </S.Project>
        </S.Cover>
        <S.Modify onClick={ChangeProfile}>{text}</S.Modify>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
