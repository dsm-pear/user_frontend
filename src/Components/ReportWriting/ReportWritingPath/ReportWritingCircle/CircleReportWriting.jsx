import React, { useState, useEffect } from "react";
import TeamSubmitReportModal from "../../Modal/SubmitRequest/TeamReportRequest/TeamSubmitReportModal";
import ReportWritingModal from "../../Modal/ReportWritingModal";
import SelectedUsers from "../../Modal/SelectedUsers";
import LoadingPage from "../../LoadingPage";
import * as S from "../../../styled/ReportWriting/ReportWritingPath/ReportWritingTeam/style";
import { link } from "../../../../assets";
import { github as gitgubimg } from "../../../../assets";
import axios from "axios";

const TeamReportWriting = ({ type, grade, field, access }) => {
  const [state, setState] = useState("hidden");
  const [hei, setHei] = useState("0");
  const [myopa, setMyOpa] = useState("1");
  const [open, setOpen] = useState("hidden");
  const [myHei, setMyHei] = useState("0");
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [teamName, setTeamName] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const ACCESS_TOKEN = localStorage.getItem("access-token");
  const MainUrl = "http://211.38.86.92:8005";

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userTextData")) || {
      title: "",
      tags: [],
      description: "",
    };
    setTitle(savedData.title);
    setTags(savedData.tags);
    setDescription(savedData.description);
  }, [setTitle, setTags, setDescription]);

  if (loading) return <LoadingPage />;

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onGithubChange = (e) => {
    setGithub(e.target.value);
  };

  const onTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const onClick = () => {
    setState("visible");
    setHei("280px");
    setMyOpa("1");
  };

  const teamBtnClick = (e) => {
    setOpen("visible");
    setMyHei("450px");
  };

  const onLanguageChange = (elements) => {
    if (elements.key === "Enter" && elements.target.value.trim()) {
      const newTags = [...tags];
      newTags[tags.length] = elements.target.value;
      setTags(newTags);
      elements.target.value = "";
    }
    if (tags.length > 7) {
      alert("언어는 최대 8개까지 추가할 수 있습니다.");

      const overLimitTag = [...tags];
      overLimitTag.splice(elements, 0);
      setTags(overLimitTag);
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
    return <span>동아리에서 작성한 개발 보고서의 파일을 올려주세요.</span>;
  };

  const isSaveData = () => {
    axios
      .post(
        `${MainUrl}/report/team`,
        {
          title: `${title}`,
          description: `${description}`,
          languages: tags,
          type: `${type}`,
          access: `${access}`,
          field: `${field}`,
          grade: `${grade}`,
          isSubmitted: false,
          fileName: `${files[0].name}`,
          github: `${github}`,
          teamName: `${teamName}`,
          members: selectedUserList.map((users) => {
            return users.user.email;
          }),
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
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log("임시저장 실패");

        if (err.response.status === 400)
          alert("필수 입력칸을 모두 입력 후 임시저장 해주세요.");
      });

    window.localStorage.setItem(
      "userTextData",
      JSON.stringify({
        title: title,
        tags: tags,
        description: description,
      })
    );
  };

  return (
    <>
      <TeamSubmitReportModal
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
        teamName={teamName}
        selectedUserList={selectedUserList}
        isSubmitted={isSubmitted}
      />
      <ReportWritingModal
        setOpen={setOpen}
        setMyHei={setMyHei}
        open={open}
        myHei={myHei}
        searchList={searchList}
        setSearchList={setSearchList}
        selectedUserList={selectedUserList}
        setSelectedUserList={setSelectedUserList}
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
              maxLength="7"
              onKeyPress={onLanguageChange}
            />
          </S.UseLang>
          <S.ReprotWriteBox>
            <textarea
              name="writingbox"
              rows="15"
              cols="40"
              minLength="10"
              placeholder="동아리에서 작성한 개발보고서에 대한 소개글을 입력해주세요"
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
                  placeholder="동아리의 GITHUB 링크를 입력해주세요 (선택)"
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
          <S.MakeTeam>
            <span>
              <S.SetTeamName>
                <S.TeamNameBox>
                  <S.InputTeamName
                    type="text"
                    placeholder="동아리의 이름을 입력해주세요"
                    onChange={onTeamNameChange}
                  />
                </S.TeamNameBox>
              </S.SetTeamName>
              <S.MtBtnBox>
                <S.MemberResult>
                  <S.ResultHeader>CIRCLE MEMBER</S.ResultHeader>
                  <S.ResultBody>
                    {selectedUserList.map((selectedUser) => {
                      return (
                        <SelectedUsers
                          key={selectedUser.id}
                          selectedUser={selectedUser}
                        />
                      );
                    })}
                  </S.ResultBody>
                </S.MemberResult>
                <S.MtFlexBox>
                  <S.MtBtn onClick={teamBtnClick}>팀 만들기</S.MtBtn>
                </S.MtFlexBox>
              </S.MtBtnBox>
            </span>
          </S.MakeTeam>
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
export default TeamReportWriting;
