//내가 보는 내 프로필 수정 하기 누르기
import React, { useState, useEffect } from "react";
import { request /*  useRefresh */ } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";
import Header from "../Main/Header";
import Project from "./Project";
import Profile from "./Profile";
import { BoxLoading } from "react-loadingg";

function MyProfile() {
  const [text, setText] = useState("수정");
  // const refreshHandler = useRefresh();

  const [profileReport, setProfileReport] = useState([]);
  const [profileData, setProfileData] = useState("");
  const [totalElements, setTotalElements] = useState("");
  const [reportId, setReportId] = useState("");
  const [gitHub, setGithub] = useState("");
  const [produce, setProduce] = useState("");

  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

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
            github: gitHub,
            intro: produce,
          }
        );
      } catch (e) {
        console.error(e);
      }
      setLoding(false);
      setError(null);
      setText("수정");
      alert("프로필이 변경되었습니다.");
    }
  };

  useEffect(() => {
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
      setLoding(false);
      setError(null);
    };

    if (loding) return <div>로딩중</div>;
    if (error) return <div>에러입니다</div>;
    if (!profileData && !profileReport) return <BoxLoading />;

    const getMyProject = async () => {
      try {
        const { data } = await request(
          "get",
          "/user/profile/report?size=&page=0",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setProfileReport(data.myPageReportResponses);
        setReportId(data.myPageReportResponses.reportId);
        setTotalElements(data.totalElements);
      } catch (e) {
        console.error(e);
      }
    };

    getProfile();
    getMyProject();
  }, [reportId]);

  return (
    <S.Main>
      <Header></Header>
      <S.MainProfile>
        {/* 좌측 프로필 */}
        <S.Cover>
          <Profile
            name={profileData.userName}
            setGithub={setGithub}
            setProduce={setProduce}
            gitHub={profileData.gitHub}
            selfIntro={profileData.selfIntro}
            email={profileData.userEmail}
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            {totalElements === 0 ? (
              <div className="not-report">보고서가 없습니다.</div>
            ) : (
              <>
                <S.PreProject>
                  {profileReport.map((myPageReportResponses, index) => (
                    <Project
                      key={index}
                      type={myPageReportResponses.type}
                      title={myPageReportResponses.title}
                      date={myPageReportResponses.createdAt.split("T")[0]}
                      //임시저장되었나 확인
                      isSubmitted={myPageReportResponses.isSubmitted}
                      //승인
                      isAccepted={myPageReportResponses.isAccepted}
                      //승인거부
                      isRejected={myPageReportResponses.isRejected}
                      reportId={myPageReportResponses.reportId}
                    />
                  ))}

                  {/* 밑에 더보기 / 숫자 */}
                </S.PreProject>
              </>
            )}
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
