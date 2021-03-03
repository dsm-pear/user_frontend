import React, { useEffect, useState } from "react";
import * as S from "../styled/ViewReport/style";
import Categorybar from "./Category/Categorybar";
import MainProject from "./MainProject";
import Header from "../Main/Header";
import { request } from "../../utils/axios/axios";

function ViewReport() {
  const [ReportListResponses, setReportListResponses] = useState([]);
  const [type, setType] = useState("");
  const [field, setField] = useState("");

  useEffect(() => {
    //프로젝트 목록 리스트 얻어오기
    const getProjectList = async () => {
      try {
        const data = await request(
          "get",
          `/report/filter?size=6&page=0&type=${type}&field=${field}&grade=GRADE1`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        //데이터 출력
        console.log(data);
        setReportListResponses(data.data.reportResponses);
      } catch (e) {
        console.error(e);
      }
    };

    getProjectList();

    console.log(type);
    console.log(field);
  }, [type, field]);

  return (
    <S.Main>
      <Header></Header>
      <S.Cover>
        <div className="coverCategory">
          {/* 카테고리 네임에게 전달 */}
          <Categorybar setField={setField} grade="1" />
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
