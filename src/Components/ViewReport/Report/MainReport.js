import React, { useEffect, useState } from "react";
import { request } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import ReportHeader from "./ReportHeader";
import ReportView from "./ReportView";
import ReportComment from "./ReportComment";
import ReportLanguage from "./ReportLanguage";
import Header from "../../Main/Header";
import ReportTeam from "./ReportTeam";

function MainReport({ match }) {
  const [reportData, setReportData] = useState(null);
  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

  const getReportView = async () => {
    try {
      loding(true);
      const data = await request(
        "get",
        `/report/${match.params.reportid}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        0
      );

      setReportData(data.data);
      console.log(reportData);
    } catch (e) {
      console.log(e);
    }
    setLoding(false);
    setError(null);
  };

  useEffect(() => {
    getReportView();
  }, []);

  if (loding) return <div>로딩중</div>;
  if (error) return <div>에러입니다</div>;
  if (!reportData) return <div>서버좀 줘라</div>;

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
          git="{reportData.github}"
          file={reportData.fileName}
        />
        <ReportTeam />
        <ReportLanguage languages={reportData.languages} />
        <ReportComment
          name={reportData.userName}
          content={reportData.content}
          commentId={reportData.commentId}
        />
      </S.MainBox>
    </S.Main>
  );
}

export default MainReport;
