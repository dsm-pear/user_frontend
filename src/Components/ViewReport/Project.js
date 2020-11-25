import React from "react";
import * as S from "../styled/ViewReport/style";
import { useHistory } from "react-router-dom";

const Project = (props) => {
  const { team, title, date } = props;
  const history = useHistory();

  const reportChilckHandler = () => {
    history.push("/view-report/main-report");
  };

  const color =
    team === "동아리" ? "#5955d8" : team === "팀" ? "#6192f3" : "#27d5b1";

  return (
    <>
      <S.MainPro>
        <S.Project onClick={reportChilckHandler} color={color}>
          <span className="project_team">[{team}]</span>
          <p className="project_title">{title}</p>
          <span className="project_date">{date}</span>
        </S.Project>
      </S.MainPro>
    </>
  );
};

export default Project;
