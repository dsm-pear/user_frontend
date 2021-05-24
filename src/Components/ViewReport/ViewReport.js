import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../styled/ViewReport/style";
import Categorybar from "./Category/Categorybar";
import MainProject from "./MainProject";
import Header from "../Main/Header";
import { request, useRefresh } from "../../utils/axios/axios";

function ViewReport() {
  const [ReportListResponses, setReportListResponses] = useState([]);
  const [type, setType] = useState("");
  const [field, setField] = useState("");

  const location = useLocation();
  const grade = location.state.grade;

  const gradeNumber = grade.split("GRADE")[1];

  //토큰 검사
  const refreshHandler = useRefresh();

  console.log(gradeNumber);

  const getProjectList = async () => {
    try {
      const data = await request(
        "get",
        `/report/filter?size=&page=0&type=${type}&field=${field}&grade=${grade}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      //데이터 출력
      console.log(data);
      setReportListResponses(data.data.reportResponses);
    } catch (e) {
      console.log(e);
      switch (e.response.status) {
        case 400:
          alert("보고서 불러오기를 실패했습니다.");
          break;
        case 401:
          refreshHandler().then(() => {
            getProjectList();
          });
          break;
        case 403:
          alert("로그인을 해주세요");
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    //프로젝트 목록 리스트 얻어오기
    getProjectList();
  }, [type, field, grade]);

  return (
    <S.Main>
      <Header></Header>
      <S.Cover>
        <div className="coverCategory">
          {/* 카테고리 네임에게 전달 */}
          <Categorybar setField={setField} grade={gradeNumber} />
        </div>

        <MainProject
          ReportListResponses={ReportListResponses} //메인프로젝트에게 전달
          setType={setType} //ProHeader에게 전달
        />
      </S.Cover>
    </S.Main>
  );
}

export default ViewReport;
