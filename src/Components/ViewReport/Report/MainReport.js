import React, { useEffect, useState } from "react";
import { request /* useRefresh  */ } from "../../../utils/axios/axios";
import { useLocation } from "react-router-dom";
import * as S from "../../styled/ViewReport/MainStyle";
import ReportHeader from "./ReportHeader";
import ReportView from "./ReportView";
import ReportComment from "./ReportComment";
import ReportLanguage from "./ReportLanguage";
import Header from "../../Main/Header";
import ReportTeam from "./ReportTeam";
import { BoxLoading } from "react-loadingg";

function MainReport() {
  const [reportData, setReportData] = useState("");
  const [comments, setComments] = useState([]);
  const [members, setMembers] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

  //토큰 검사
  //const refreshHandler = useRefresh();

  const location = useLocation();
  const reportId = location.state.reportId;

  useEffect(() => {
    const report = async () => {
      try {
        const { data } = await request(
          "get",
          `/report/${reportId}`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          0
        );
        setReportData(data);
        setComments(data.comments);
        setMembers(data.member);
        setLanguages(data.languages);
      } catch (e) {
        console.error(e);
      }
      setLoding(false);
      setError(null);
    };

    report();
  }, [reportId]);

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
          languages={languages}
          team={reportData.type}
          access={reportData.access}
          field={reportData.field}
          grade={reportData.grade}
          isSubmitted={reportData.isSubmitted}
          git={reportData.github}
          teamName={reportData.teamName}
          members={members}
          fileId={reportData.fileId}
        />
        {reportData.type === "SOLE" ? null : (
          <ReportTeam teamName={reportData.teamName} members={members} />
        )}

        <ReportLanguage languages={languages} />
        <ReportComment
          reportId={reportId}
          commentId={comments.commentId}
          comments={comments}
        />
      </S.MainBox>
    </S.Main>
  );
}

export default MainReport;
