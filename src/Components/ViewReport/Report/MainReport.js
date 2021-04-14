import React, { useEffect, useState } from "react";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import ReportHeader from "./ReportHeader";
import ReportView from "./ReportView";
import ReportComment from "./ReportComment";
import ReportLanguage from "./ReportLanguage";
import Header from "../../Main/Header";
import ReportTeam from "./ReportTeam";

function MainReport(props) {
  const [reportData, setReportData] = useState("");
  const [comments, setComments] = useState([]);
  const [members, setMembers] = useState([]);
  const [languages, setLanguages] = useState("");
  const [loding, setLoding] = useState(null);
  const [error, setError] = useState(null);

  //토큰 검사
  const refreshHandler = useRefresh();

  const report = async () => {
    try {
      //loding(true);
      const { data } = await request(
        "get",
        `/report/77`,
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

  useEffect(() => {
    report();
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
          fileId={reportData.fileId}
        />
        <ReportTeam teamName={reportData.teamName} members={members} />
        <ReportLanguage languages={languages} />
        <ReportComment reportId={props.reportId} comments={comments} />
      </S.MainBox>
    </S.Main>
  );
}

export default MainReport;
