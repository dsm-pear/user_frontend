import React from "react";
import * as S from "../styled/ViewReport/style";
import { Link } from "react-router-dom";

const Project = (props) => {
  const createdAt = props.date.split("T");
  const reportId = props.reportId;

  const color =
    props.team === "CIRCLES"
      ? "#5955d8"
      : props.team === "TEAM"
      ? "#6192f3"
      : "#27d5b1";

  return (
    <>
      <Link className="link" to={`/view-report/${reportId}`} >
        <S.Project color={color}>
          <span className="project_team">[{props.team}]</span>
          <p className="project_title">{props.title}</p>
          <span className="project_date">{createdAt[0]}</span>
        </S.Project>
      </Link>
    </>
  );
};

export default Project;
