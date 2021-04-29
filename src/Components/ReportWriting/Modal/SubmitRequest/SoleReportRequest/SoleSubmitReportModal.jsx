import React, { useState } from "react";
import SubmitSuccess from "../../SubmitSuccess";
import * as S from "../../../../styled/ReportWriting/Modal/SubmitRequest/SoloRequest/SoleSubmitReportStyle";
import { Close } from "../../../../../assets";
import axios from "axios";

const SoleSubmitReportModal = ({
  setState,
  setHei,
  state,
  hei,
  myopa,
  setMyOpa,
  title,
  description,
  tags,
  type,
  access,
  field,
  grade,
  isSubmitted,
  files,
  github,
}) => {
  const [view, setView] = useState("hidden");
  const [opa, setOpa] = useState("0");

  const ACCESS_TOKEN = localStorage.getItem("access-token");
  const REFRESH_TOKEN = localStorage.getItem("refresh-token");

  const Api = axios;
  const FileApi = axios;
  const MainUrl = "http://211.38.86.92:8005";
  const FileUrl = "http://54.180.224.67:3000";

  const onClick = () => {
    setState("hidden");
    setHei("0");
  };

  const btnClick = () => {
    setView("visible");
    setState("hidden");
    setMyOpa("0");
    setOpa("1");

    console.log(files[0]?.name);
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    Api.post(
      `${MainUrl}/report/sole`,
      {
        title: `${title}`,
        description: `${description}`,
        languages: tags,
        type: `${type}`,
        access: `${access}`,
        field: `${field}`,
        grade: `${grade}`,
        isSubmitted: isSubmitted ?? true,
        fileName: `${files[0].name}`,
        github: `${github}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )
      .then((response) => {
        console.log(response);
        const isSubmitFile = new FormData(); // 파일을 이용할 때 FormData
        isSubmitFile.append("reportFile", files[0]); // append = 기존의 것 + @
        const id = response.data;
        // data.set('report_id', 1) // set = 기존의 것은 삭제 -> 새로운 것 추가
        FileApi.post(`${FileUrl}/report/files/${id}`, isSubmitFile, {
          headers: {
            "Content-Type": "multipart/form-data", // multipart = 파일 업로드
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        })
          .then(() => {
            console.log("파일 요청 성공");
          })
          .catch((err) => {
            if (err.response.status === 410) {
              Api.put(`${MainUrl}/auth`, undefined, {
                headers: {
                  "X-Refresh-Token": REFRESH_TOKEN,
                },
              }).then((res) => {
                if (res.data.access_token) {
                  localStorage.setItem("access-token", ACCESS_TOKEN);
                  console.log(REFRESH_TOKEN);
                  FileApi.post(`${FileUrl}/report/files/${id}`, isSubmitFile, {
                    headers: {
                      "Content-Type": "multipart/form-data", // multipart = 파일 업로드
                      Authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                      )}`,
                    },
                  });
                }
              });
            }
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SubmitSuccess setView={setView} setOpa={setOpa} view={view} opa={opa} />
      <S.Main visibility={state}>
        <S.ModalMain height={hei} myopa={myopa}>
          <S.ModalSort>
            <S.CloseBtn onClick={onClick}>
              <span>
                <img src={Close} alt="Close" />
              </span>
            </S.CloseBtn>
            <S.ModalHeader>
              <span>보고서를 </span>
              <span>제출하겠습니까?</span>
            </S.ModalHeader>
            <S.ModalMainText>
              <span>
                첨부 파일의 확장자가 PDF형식이 맞는지 파일명은 프로젝트명 / 학번
                / 이름
              </span>
              <p></p>
              <span>
                순으로 작성 되어있는지 다시 한번 더 확인해주시기 바랍니다. 만약
                위의 내용을
              </span>
              <p></p>
              <span>
                잘못 작성할 경우 보고서가 제출되지 않을 수 있습니다. 확인하고
                제출 바랍니다.
              </span>
            </S.ModalMainText>
            <S.SubmitBtn onClick={btnClick}>
              <span>제출</span>
            </S.SubmitBtn>
          </S.ModalSort>
        </S.ModalMain>
      </S.Main>
    </>
  );
};

export default SoleSubmitReportModal;
