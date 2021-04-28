import React, { useState } from "react";
import SoleSubmitReportModal from "../../Modal/SubmitRequest/SoleReportRequest/SoleSubmitReportModal";
import * as S from "../../../styled/ReportWriting/ReportWritingPath/ReportWritingSole/style";
import { link } from "../../../../assets";
import { github as gitgubimg } from "../../../../assets";
import axios from "axios";

const SoleReportWriting = ({ type, access, field, grade }) => {
  const [state, setState] = useState("hidden");
  const [hei, setHei] = useState("0");
  const [myopa, setMyOpa] = useState("1");
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");

  const ACCESS_TOKEN = localStorage.getItem("access-token");
  const MainUrl = "http://211.38.86.92:8005";

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onGithubChange = (e) => {
    setGithub(e.target.value);
  };

  const onClick = () => {
    setState("visible");
    setHei("280px");
    setMyOpa("1");
  };

  const onLanguageChange = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const newTags = [...tags];
      newTags[tags.length] = e.target.value;
      setTags(newTags);
      e.target.value = "";
    } else if (e.key === "," && e.target.value.trim()) {
      const newTags = [...tags];
      newTags[tags.length] = e.target.value;
      setTags(newTags);
      e.target.value = "";
    }
  };

  const onLanguageClick = (index) => {
    const delTags = [...tags];
    delTags.splice(index, 1);
    setTags(delTags);
  };

  const onClickFile = () => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");
    inputElement.setAttribute("accept", ".pdf, .hwp");
    inputElement.click();
    inputElement.onchange = () => {
      const prevFiles = [...files];
      for (const file of inputElement.files) {
        prevFiles.push(file);
      }
      console.log(inputElement.files);
      setFiles(prevFiles);
      console.log(inputElement.value, inputElement.files[0].name);
    };
  };

  const onDelClickFile = (index) => {
    const delFile = [...files];
    delFile.splice(index, 1);
    setFiles(delFile);
  };

  const attachFiles = (index) => {
    if (files.length !== 0 && files.length < 2) {
      return files.map((file, i) => {
        return (
          <div key={i} onClick={() => onDelClickFile(i)}>
            {file.name}
          </div>
        );
      });
    } else if (files.length > 1) {
      alert("파일은 하나만 추가할 수 있습니다.");
      files.splice(index, 1);
      return false;
    }
    return <span>자신이 작성한 개발 보고서의 파일을 올려주세요.</span>;
  };

  const isSaveData = () => {
    axios
      .post(
        `${MainUrl}/report/sole`,
        {
          title: `${title}`,
          description: `${description}`,
          languages: tags,
          type: `${type}`,
          access: `${access}`,
          field: `${field}`,
          grade: `${grade}`,
          isSubmitted: true,
          fileName: `${files[0].name}`,
          github: `${github}`,
        },
        {
          headers: {
            "Contect-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      )
      .then(() => {
        console.log("임시저장 성공");
      })
      .catch(() => {
        console.log("임시저장 실패");
      });
  };

  return (
    <>
      <SoleSubmitReportModal
        setState={setState}
        setHei={setHei}
        setMyOpa={setMyOpa}
        state={state}
        hei={hei}
        myopa={myopa}
        title={title}
        description={description}
        tags={tags}
        type={type}
        access={access}
        field={field}
        grade={grade}
        files={files}
        github={github}
      />

      <S.ReportBody>
        <S.ReportMain>
          <S.ReportTitle>
            <input
              type="text"
              placeholder="개발 보고서의 제목을 입력해주세요"
              onChange={onTitleChange}
              value={title}
            />
          </S.ReportTitle>
          <S.UseLang>
            {tags.map((tag, i) => {
              return (
                <S.Tag onClick={() => onLanguageClick(i)} index={i} key={i}>
                  {tag}
                </S.Tag>
              );
            })}
            <input
              type="text"
              placeholder="개발에 사용한 언어들을 입력해주세요"
              onKeyPress={onLanguageChange}
            />
          </S.UseLang>
          <S.ReprotWriteBox>
            <textarea
              name="writingbox"
              rows="15"
              cols="40"
              minLength="10"
              placeholder="자신이 작성한 개발보고서에 대한 소개글을 입력해주세요"
              onChange={onDescriptionChange}
              style={{ resize: "none" }}
              value={description}
            ></textarea>
          </S.ReprotWriteBox>
          <S.LinkBox>
            <span>
              <div>
                <img src={gitgubimg} alt="gitgub-link" />
                <input
                  type="text"
                  placeholder="자신의 GITHUB 링크를 입력해주세요 (선택)"
                  onChange={onGithubChange}
                />
              </div>
            </span>
          </S.LinkBox>
          <S.AttachFile>
            <S.inAttachFile>
              <img src={link} alt="attachfile" onClick={onClickFile} />
              {attachFiles()}
            </S.inAttachFile>
          </S.AttachFile>
        </S.ReportMain>
        <S.SubmitBox>
          <S.SaveSubBtn>
            <S.SaveBtn>
              <div onClick={isSaveData}>임시저장</div>
            </S.SaveBtn>
            <S.SubBtn onClick={onClick}>
              <div>제출하기</div>
            </S.SubBtn>
          </S.SaveSubBtn>
        </S.SubmitBox>
      </S.ReportBody>
    </>
  );
};

export default SoleReportWriting;
