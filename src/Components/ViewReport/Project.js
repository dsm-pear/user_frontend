import React from "react";
import * as S from "../styled/ViewReport/style";

const Project = (props) => {
  const { team, title, date } = props;

  const color =
    team === "동아리" ? "#5955d8" : team === "팀" ? "#6192f3" : "#27d5b1";

  return (
    <>
      <S.MainPro>
        <S.Project color={color}>
          <span className="project_team">[{team}]</span>
          <p className="project_title">{title}</p>
          <span className="project_date">{date}</span>
        </S.Project>
      </S.MainPro>
    </>
  );
};

export default Project;
