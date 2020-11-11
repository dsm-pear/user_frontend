import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "../styled/Profile/style";

const MainProject = (props) => {
  const location = useLocation();
  const { team, title, date, save } = props;

  const color =
    team === "동아리" ? "#5955d8" : team === "팀" ? "#6192f3" : "#27d5b1";

  return (
    <div>
      <S.MainProject color={color}>
        <span className="project_team">[{team}]</span>
        <p className="project_title">{title}</p>
        <span className="project_date">{date}</span>
        {location.pathname === "/MyProfile" && (
          <span className="project_save">{save}</span>
        )}
      </S.MainProject>
    </div>
  );
};

export default MainProject;
