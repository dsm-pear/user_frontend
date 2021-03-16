//프로젝트 리스트 컴포넌트
import React from "react";
import { useLocation } from "react-router";
import * as S from "../styled/Profile/style";

const Project = (props) => {
  const location = useLocation();

  const color =
    props.team === "동아리"
      ? "#5955d8"
      : props.team === "팀"
      ? "#6192f3"
      : "#27d5b1";

  return (
    <S.ProjectCover>
      <S.MainProject color={color}>
        <span className="project_team">[{props.team}]</span>
        <p className="project_title">{props.title}</p>
        <span className="project_date">{props.date}</span>
        {location.pathname === "/MyProfile" && (
          <span className="project_save">{props.save}</span>
        )}
      </S.MainProject>
    </S.ProjectCover>
  );
};

export default Project;
