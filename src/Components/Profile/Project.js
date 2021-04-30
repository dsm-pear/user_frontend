//프로젝트 리스트 컴포넌트
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import * as S from "../styled/Profile/style";

const Project = (props) => {
  const [border, setBorder] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [background, setBackground] = useState("");
  const [boxShadow, setBoxShadow] = useState("");
  const [text, setText] = useState("");
  const location = useLocation();
  const history = useHistory();

  const reportChilckHandler = () => {
    history.push({
      pathname: `/view-report/${props.reportId}`,
      state: { reportId: props.reportId },
    });
    console.log(props.reportId);
  };

  const color =
    props.team === "동아리"
      ? "#5955d8"
      : props.team === "팀"
      ? "#6192f3"
      : "#27d5b1";

  useEffect(() => {
    if (
      props.isSubmitted === false &&
      props.isAccepted === false &&
      props.isRejected === false
    ) {
      setBorder("solid 1.6px #ff5959");
      setFontColor(" #ff5959");
      setBackground("#ffeded");
      setBoxShadow("0 3px 6px 0 rgba(0, 0, 0, 0.16)");
      setText("임시저장");
      console.log("임시저장");
    } else if (
      props.isSubmitted === true &&
      props.isAccepted === true &&
      props.isRejected === false
    ) {
      console.log("제출");
    } else if (
      props.isSubmitted === false &&
      props.isAccepted === false &&
      props.isRejected === true
    ) {
      setBorder("solid 1.6px #ff5959");
      setFontColor(" #ff5959");
      setBoxShadow("0 3px 6px 0 rgba(0, 0, 0, 0.16)");
      setText("승인거부");
      console.log("승인거부");
    } else {
      setBorder("solid 1.6px #ff5959");
      setFontColor(" #ff5959");
      setBackground("#ffeded");
      setBoxShadow("0 3px 6px 0 rgba(0, 0, 0, 0.16)");
      setText("미승인");
      console.log("미승인");
    }
  }, [props.isSubmitted, props.isAccepted, props.isRejected]);

  return (
    <S.ProjectCover>
      <S.MainProject
        color={color}
        style={{
          border: border,
          backgroundColor: background,
          boxShadow: boxShadow,
        }}
        onClick={reportChilckHandler}
      >
        <span className="project_team" style={{ color: fontColor }}>
          [{props.type}]
        </span>
        <p className="project_title">{props.title}</p>
        <span className="project_date">{props.date}</span>
        {location.pathname === "/my-profile" && (
          <span className="project_save" style={{ color: fontColor }}>
            [{text}]
          </span>
        )}
      </S.MainProject>
    </S.ProjectCover>
  );
};

export default Project;
