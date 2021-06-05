import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  request,
  fileRequest,
  FileURL,
  MainURL,
} from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import axios from "axios";

const ReportView = (props, files) => {
  const fileId = props.fileId;
  const fileDownloadHandler = () => {
    window.open(
      FileURL +
        `/report/${fileId}?token=Bearer ${localStorage.getItem("access-token")}`
    );
  };

  let ACCESS_TOKEN = localStorage.getItem("access-token");
  const history = useHistory();
  const reportId = props.reportId;

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
              isSubmitted: props.isSubmitted,
              github: `${props.git}`,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          )
          .then(() => {
            const fatchFile = new FormData();
            fatchFile.append("reportFile", files[0]);
            axios.put(`${FileURL}/report/${fileId}`, fatchFile, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            });

            history.push({
              pathname: "/report-writing",
              state: { reportId: reportId },
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
              isSubmitted: props.isSubmitted,
              github: `${props.git}`,
              teamName: `${props.teamName}`,
              members: props.isMemberEmail.map((users) => {
                return users.user.memberEmail;
              }),
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          )
          .then(() => {
            const fatchFile = new FormData();
            fatchFile.append("reportFile", files[0]);
            axios.put(`${FileURL}/report/${fileId}`, fatchFile, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            });

            history.push({
              pathname: "/report-writing",
              state: { reportId: reportId },
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
      case "CIRCLES":
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
              isSubmitted: props.isSubmitted,
              github: `${props.git}`,
              teamName: `${props.teamName}`,
              members: props.isMemberEmail.map((users) => {
                return users.user.memberEmail;
              }),
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          )
          .then(() => {
            const fatchFile = new FormData();
            fatchFile.append("reportFile", files[0]);
            axios.put(`${FileURL}/report/${fileId}`, fatchFile, {
              headers: {
                "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            });

            history.push({
              pathname: "/report-writing",
              state: { reportId: reportId },
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

  const isDeleteReprot = async () => {
    try {
      await fileRequest(
        "delete",
        `/report/${fileId}`,
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        {
          file_id: `${fileId}`,
        }
      );

      await request(
        "delete",
        `/report/${reportId}`,
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        {
          id: `${reportId}`,
        }
      );

      alert("보고서를 삭제했습니다.");
      history.push("/my-profile");
    } catch (err) {
      if (err.response.status === 403) {
        alert("로그아웃 됩니다.");

        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        history.push("/");
      }
    }
  };

  return (
    <S.Contents>
      {/* 보고서 수정 삭제   */}
      {props.isMine === true ? (
        <S.Modify>
          <button onClick={isModifyReport}>수정</button>
          <button onClick={isDeleteReprot}>삭제</button>
        </S.Modify>
      ) : (
        <></>
      )}

      <S.Title>
        <p>{props.title}</p>
      </S.Title>
      <S.MainText>
        <p>{props.text}</p>
      </S.MainText>
      <S.Linkimg>
        <div className="git"></div>
        {props.git === "" ? (
          <div style={{ color: "gray" }}>깃허브 링크가 없습니다. </div>
        ) : (
          <a href={props.git}>프로젝트 깃허브 구경하기</a>
        )}
      </S.Linkimg>
      <S.Linkimg>
        <div className="img"></div>
        {props.fileId === null ? (
          <div style={{ color: "gray", marginLeft: "5px" }}>
            파일이 존재하지 않습니다.
          </div>
        ) : (
          <>
            <p>{props.file}</p>
            <div className="downimg" onClick={fileDownloadHandler}>
              다운로드
            </div>
          </>
        )}
      </S.Linkimg>
    </S.Contents>
  );
};

export default ReportView;
