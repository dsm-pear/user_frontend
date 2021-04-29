import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as S from "../styled/Profile/style";

const MainProject = (props) => {
  const location = useLocation();
  const history = useHistory();
  

  console.log(props.reportId);

  const reportChilckHandler = () => {
    history.push({
      pathname: `/view-report/${props.reportId}`,
      state: { reportId: props.reportId },
    });
  };

  const color =
    props.type === "CIRCLES"
      ? "#5955d8"
      : props.type === "TEAM"
      ? "#6192f3"
      : "#27d5b1";

  return (
    <S.ProjectCover onClick={reportChilckHandler}>
      <S.MainProject color={color}>
        <span className="project_team">[{props.type}]</span>
        <p className="project_title">{props.title}</p>
        <span className="project_date">{props.date}</span>
        {location.pathname === "/MyProfile" && (
          <span className="project_save">{props.save}</span>
        )}
      </S.MainProject>
    </S.ProjectCover>
  );
};

export default MainProject;
