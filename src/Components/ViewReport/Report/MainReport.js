import React, { useEffect, useState } from "react";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import ReportHeader from "./ReportHeader";
import ReportView from "./ReportView";
import ReportComment from "./ReportComment";
import ReportLanguage from "./ReportLanguage";
import Header from "../../Main/Header";
import ReportTeam from "./ReportTeam";
import { BoxLoading } from "react-loadingg";

function MainReport({ match }) {
  const [reportData, setReportData] = useState("");
  const [comments, setComments] = useState([]);
  const [members, setMembers] = useState([]);
  const [isMemberEmail, setIsMemberEmail] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

  //토큰 검사
  const refreshHandler = useRefresh();

  const report = async () => {
    try {
      const { data } = await request(
        "get",
        `/report/${match.params.reportId}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      setReportData(data);
      setComments(data.comments);
      setMembers(data.member);
      setIsMemberEmail(
        data.member.map((user, index) => ({
          id: index + 1,
          user,
        }))
      );
      setLanguages(data.languages);
      console.log(data);
    } catch (e) {
      switch (e.response.status) {
        case 400:
          alert("보고서 불러오기를 실패했습니다.");
          break;
        case 401:
          refreshHandler().then(() => {
            report();
          });
          break;
        case 403:
          alert("로그인을 해주세요");
          break;
        default:
          break;
      }
    }
    setLoding(false);
    setError(null);
  };

  useEffect(() => {
    report();
  }, []);

  if (loding) return <div>로딩중</div>;
  if (error) return <div>에러입니다</div>;
  if (!reportData) return <BoxLoading />;

  return (
    <S.Main>
      <Header></Header>
      <S.MainBox>
        <ReportHeader
          team={reportData.type}
          grade={reportData.grade}
          subject={reportData.field}
          title={reportData.title}
          date={reportData.createdAt}
        />
        <ReportView
          title={reportData.title}
          text={reportData.description}
          git={reportData.github}
          file={reportData.fileName}
          reportId={match.params.reportId}
          languages={languages}
          team={reportData.type}
          access={reportData.access}
          field={reportData.field}
          grade={reportData.grade}
          isSubmitted={reportData.isSubmitted}
          teamName={reportData.teamName}
          isMemberEmail={isMemberEmail}
          fileId={reportData.fileId}
          isMine={reportData.isMine}
        />
        {reportData.type === "SOLE" ? null : (
          <ReportTeam teamName={reportData.teamName} members={members} />
        )}

        <ReportLanguage languages={languages} />
        <ReportComment
          reportId={match.params.reportId}
          commentId={comments.commentId}
          comments={comments}
          comment={reportData.comment}
        />
      </S.MainBox>
    </S.Main>
  );
}

export default MainReport;
