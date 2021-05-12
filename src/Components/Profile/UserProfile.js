import React, { useEffect, useState } from "react";
import { request /* useRefresh */ } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import Profile from "./Profile";
import Header from "../Main/Header";
import MainProject from "../../Components/Profile/MainProject";
import { BoxLoading } from "react-loadingg";

function UserProfile({ match }) {
  //내 프로젝트 리트
  const [myReportListResponses, setMyReportListResponses] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  //const refreshHandler = useRefresh();
  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //유저 프로필 API

    const getProfile = async () => {
      try {
        const data = await request(
          "get",
          `/profile?user-email=${match.params.userEmail}`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setUserProfile(data.data);
      } catch (e) {
        console.error(e);
      }
      setLoding(false);
      setError(null);
    };
    //유저 프로젝트 API
    const getProject = async () => {
      try {
        const data = await request(
          "get",
          `/profile/report?user-email=${match.params.userEmail}&size=&page=`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setMyReportListResponses(data.data.profileReportResponses);
        setTotalElements(data.data.totalElements);
      } catch (e) {
        console.error(e);
      }
      setLoding(false);
      setError(null);
    };

    getProfile();
    getProject();
  }, [match.params.userEmail]);

  if (loding) return <div>로딩중</div>;
  if (error) return <div>에러입니다</div>;
  if (!userProfile) return <BoxLoading />;

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
                selfIntro={userProfile.selfIntro}
                gitHub={userProfile.gitHub}
              />
            }
            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
              {totalElements === 0 ? (
                <div className="not-report">보고서가 없습니다.</div>
              ) : (
                <>
                  <S.PreProject>
                    {myReportListResponses.map(
                      (myReportListResponses, index) => (
                        <MainProject
                          key={index}
                          reportId={myReportListResponses.reportId}
                          type={myReportListResponses.type}
                          title={myReportListResponses.title}
                          date={myReportListResponses.createdAt.split("T")[0]}
                        />
                      )
                    )}
                  </S.PreProject>
                </>
              )}
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
