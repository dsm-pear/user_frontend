import React from "react";
import * as S from "../styled/ViewReport/style";
import ReportGrade from "./ReportGrade";
import Categorybar from "./Category/Categorybar";
import MainProject from "./MainProject";
import Header from "../Main/Header";
//import { request } from "../../utils/axios/axios";

function ViewReport() {
  /* const [reportCatagroy, setReportCatagroy] = useState([]);

  const ReportFilter = async () => {
    try {
      const { data } = await request(
        "get",
        `/report/filter?type=&grade=&field=`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      setReportCatagroy(data.reportCatagroy);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    ReportFilter();
  }, []); */

  return (
    <S.Main>
      <Header></Header>
      <S.Cover>
        <div className="coverCategory">
          <ReportGrade grade="1" />
          <Categorybar />
        </div>
        <MainProject />
      </S.Cover>
    </S.Main>
  );
}

export default ViewReport;
