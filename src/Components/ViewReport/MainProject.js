import React, { useEffect, useState } from "react";
import { request } from "../../utils/axios/axios";
import { Link } from "react-router-dom";
import * as S from "../styled/ViewReport/style";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";

function MainProject() {
  const [ReportListResponses, setReportListResponses] = useState([]);

  const getProjectList = async () => {
    try {
      const { data } = await request(
        "get",
        "/list?size=6&page=1",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setReportListResponses(data.ReportListResponses);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <>
      <S.MainProject>
        <ProjectHeader />
        <S.MainCover>
          {ReportListResponses.map(({ id, team, title, data }) => (
            <Project id={id} team={team} title={title} date={data} />
          ))}
        </S.MainCover>
        <S.Number>
          <Link>1</Link>
          <Link>2</Link>
          <Link>3</Link>
          <Link>4</Link>
          <Link>5</Link>
        </S.Number>
      </S.MainProject>
    </>
  );
}

export default MainProject;
