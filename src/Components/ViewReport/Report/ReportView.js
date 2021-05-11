import React, { useState } from "react";
import { FileURL, MainURL } from "../../../utils/axios/axios";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportView = (props) => {
  // const [isSoleModifyReport, setIsSoleModifyReport] = useState([]);
  // const [isSoleDeleteReprot, setIsSoleDeleteReprot] = useState([]);
  // const [isTeamModifyReport, setIsTeamModifyReport] = useState([]);
  // const [isTeamDeleteReprot, setIsTeamDeleteReprot] = useState([]);

  const fileId = props.fileId;
  const fileDownloadHandler = () => {
    window.open(FileURL + `/report/${fileId}`);
  };

  const history = useHistory();
  const location = useLocation();
  const reportId = location.state.reportId;

  const isModifyReport = () => {
    switch (props.team) {
      case "SOLE":
        axios
          .patch(
            `${MainURL}/report/sole/${reportId}`,
            {
              title: `${props.title}`,
              description: `${props.text}`,
              languages: props.languages,
              type: `${props.team}`,
              access: `${props.access}`,
              field: `${props.field}`,
              grade: `${props.grade}`,
              isSubmitted: true,
              fileName: `${props.fileName}`,
              github: `${props.git}`,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            }
          )
          .then((res) => {
            axios.put(`/report/${fileId}`, props.file, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            });
          })
          .catch((err) => {
            if (err.response.status === 403) {
              alert("권한이 없습니다.");

              localStorage.removeItem("access-token");
              localStorage.removeItem("refresh-token");
              history.push("/");
            } else if (err.response.status === 401) {
            }
          });
        break;
      case "TEAM":
        axios
          .patch(
            `${MainURL}/report/team/${reportId}`,
            {
              title: `${props.title}`,
              description: `${props.text}`,
              languages: props.languages,
              type: `${props.team}`,
              access: `${props.access}`,
              field: `${props.field}`,
              grade: `${props.grade}`,
              isSubmitted: false,
              fileName: `${props.fileName}`,
              github: `${props.git}`,
              teamName: `${props.teamName}`,
              members: props.members,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            }
          )
          .then((res) => {
            const id = res.id;
            axios.put(`${FileURL}/report/${id}`, props.file, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            });
          })
          .catch((err) => {
            if (err.response.status === 403) {
              alert("권한이 없습니다.");

              localStorage.removeItem("access-token");
              localStorage.removeItem("refresh-token");
              history.push("/");
            }
          });
        break;
      case "CIRCLE":
        axios
          .patch(
            `${MainURL}/report/team/${reportId}`,
            {
              title: `${props.title}`,
              description: `${props.text}`,
              languages: props.languages,
              type: `${props.team}`,
              access: `${props.access}`,
              field: `${props.field}`,
              grade: `${props.grade}`,
              isSubmitted: false,
              fileName: `${props.fileName}`,
              github: `${props.git}`,
              teamName: `${props.teamName}`,
              members: props.members,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            }
          )
          .then((res) => {
            const id = res.id;
            axios.put(`${FileURL}/report/${id}`, props.file, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            });
          })
          .catch((err) => {
            if (err.response.status === 403) {
              alert("권한이 없습니다.");

              localStorage.removeItem("access-token");
              localStorage.removeItem("refresh-token");
              history.push("/");
            }
          });
        break;
      default:
        console.log("err");
    }
  };

  const isDeleteReprot = () => {
    axios
      .delete(
        `${MainURL}/report/${reportId}`,
        {
          id: `${reportId}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        const id = res.id;
        axios.delete(`${FileURL}/report/${id}`, props.file, {
          headers: {
            "Content-Type": "multipart/form-data", // multipart = 파일 업로드
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        });
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("권한이 없습니다.");

          localStorage.removeItem("access-token");
          localStorage.removeItem("refresh-token");
          history.push("/");
        }
      });
  };

  return (
    <S.Contents>
      {/* 보고서 수정 삭제   */}
      <S.Modify>
        <button onClick={isModifyReport}>수정</button>
        <button onClick={isDeleteReprot}>삭제</button>
      </S.Modify>
      <S.Title>
        <p>{props.title}</p>
      </S.Title>
      <S.MainText>
        <p>{props.text}</p>
      </S.MainText>
      <S.Linkimg>
        <div className="git"></div>
        <a href={props.git}>프로젝트 깃허브 구경하기</a>
      </S.Linkimg>
      <S.Linkimg>
        <div className="img"></div>
        <p>{props.file}</p>
        <div className="downimg" onClick={fileDownloadHandler}>
          다운로드
        </div>
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
