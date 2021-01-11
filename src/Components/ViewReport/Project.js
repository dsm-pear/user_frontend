import React from "react";
import * as S from "../styled/ViewReport/style";
import { useHistory } from "react-router-dom";

const Project = (props) => {
  const history = useHistory();
  const createdAt = props.date.split('T');

  const reportChilckHandler = () => {
    history.push(`/view-report/:reportid`);
  };

  const color =
    props.team === "동아리" ? "#5955d8" : props.team === "팀" ? "#6192f3" : "#27d5b1";

  return (
    <>
      <S.MainPro>
        <S.Project onClick={reportChilckHandler} color={color}>
          <span className="project_team">[{props.team}]</span>
          <p className="project_title">{props.title}</p>
          <span className="project_date">{createdAt[0]}</span>
        </S.Project>
      </S.MainPro>
    </>
  );
};

export default Project;
