import React, { useState, useEffect } from "react";
import ReportWritingModal from "./Modal/ReportWritingModal";
import SubmitReportModal from "./Modal/SubmitReportModal";
import SelectedUsers from "./Modal/SelectedUsers";
import * as S from "../styled/ReportWriting/style";
import { RWlogo } from "../../assets";
import { select } from "../../assets";
import { selecthover } from "../../assets";
import { link } from "../../assets";
import { github as gitgubimg } from "../../assets";

const ReportWriting = () => {
  const [type, setType] = useState("");
  const [access, setAccess] = useState("");
  const [field, setField] = useState("");
  const [grade, setGrade] = useState("");
  const [hoverNumber, setHoverNumber] = useState(0);
  const [clickGradeNumber, setClickGradeNumber] = useState("학년 선택");
  const [clickDivisionNumber, setClickDivisionNumber] = useState("구분 선택");
  const [clickFieldNumber, setClickFieldNumber] = useState("개발 분야");
  const [clickScopeNumber, setClickScopeNumber] = useState("공개 범위");
  const [state, setState] = useState("hidden");
  const [hei, setHei] = useState("0");
  const [myopa, setMyOpa] = useState("1");
  const [open, setOpen] = useState("hidden");
  const [myHei, setMyHei] = useState("0");
  const [opas, setOpas] = useState("1");
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [github, setGithub] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [autoSave, setAutoSave] = useState(
    localStorage.getItem("userTextData")
  );
  const [searchList, setSearchList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userTextData")) || {
      title: "",
      tags: [],
      description: "",
    };
    setTitle(savedData.title);
    setTags(savedData.tags);
    setDescription(savedData.description);
    console.log(savedData);
  }, []);

  const onMouseOver = (e) => {
    setHoverNumber(Number(e.currentTarget.dataset.id));
  };

  const onMouseLeave = () => {
    setHoverNumber(0);
  };

  const isSdClick = (e) => {
    console.log(e.target);
    switch (e.target.dataset.type) {
      case "grade":
        setClickGradeNumber(e.target.innerHTML);
        break;
      case "division":
        setClickDivisionNumber(e.target.innerHTML);
        break;
      case "field":
        setClickFieldNumber(e.target.innerHTML);
        break;
      case "scope":
        setClickScopeNumber(e.target.innerHTML);
        break;
      default:
        console.log("err");
    }
  };

  const onClick = () => {
    setState("visible");
    setHei("280px");
    setMyOpa("1");
  };

  const teamBtnClick = (e) => {
    setOpen("visible");
    setMyHei("450px");
    setOpas("1");
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
    inputElement.setAttribute("multiple", "");
    inputElement.click();
    inputElement.onchange = () => {
      const prevFiles = [...files];
      for (const file of inputElement.files) {
        prevFiles.push(file);
      }
      setFiles(prevFiles);
      console.log(inputElement.value, inputElement.files[0].name);
    };
  };

  const onDelClickFile = (index) => {
    const delFile = [...files];
    delFile.splice(index, 1);
    setFiles(delFile);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e);
  };

  const onLanguagesChange = (e) => {
    setLanguages(e.target.value);
    console.log(e);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(e);
  };

  const onGithubChange = (e) => {
    setGithub(e.target.value);
    console.log(e);
  };

  const onGradeClick = (e) => {
    setGrade(grade);
    console.log(e);
  };

  const onTypeClick = (e) => {
    setType(type);
    console.log(e);
  };

  const onFieldClick = (e) => {
    setField(field);
    console.log(e);
  };

  const onAccessClick = (e) => {
    setAccess(access);
    console.log(e);
  };

  const onSaveLocalStorage = (e) => {
    window.localStorage.setItem(
      "userTextData",
      JSON.stringify({
        title: title,
        tags: tags,
        description: description,
      })
    );
    setAutoSave(e);
  };

  const checkAutoSave = (e) => {
    console.log(e.target.value);
    if (autoSave === true) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <SubmitReportModal
        setState={setState}
        setHei={setHei}
        setMyOpa={setMyOpa}
        state={state}
        hei={hei}
        myopa={myopa}
        files={files}
        title={title}
        description={description}
        languages={languages}
        clickGradeNumber={clickGradeNumber}
        clickDivisionNumber={clickDivisionNumber}
        clickFieldNumber={clickFieldNumber}
        clickScopeNumber={clickScopeNumber}
        github={github}
        isSubmitted={isSubmitted}
      />
      <ReportWritingModal
        setOpen={setOpen}
        setMyHei={setMyHei}
        open={open}
        myHei={myHei}
        opas={opas}
        searchList={searchList}
        setSearchList={setSearchList}
        selectedUserList={selectedUserList}
        setSelectedUserList={setSelectedUserList}
      />
      <S.Main>
        <S.BorderBox>
          <S.InlineBox>
            <S.ReportLogo>
              <span>
                <img src={RWlogo} alt="Rwlogo" />
              </span>
            </S.ReportLogo>
            <S.SelectBoxs>
              <S.PaddingBox>
                <S.Select
                  data-id="1"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  {hoverNumber === 1 ? (
                    <S.SelctFlexBox>
                      <span>{clickGradeNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </S.SelctFlexBox>
                  ) : (
                    <S.SelctFlexBox>
                      <span>{clickGradeNumber}</span>
                      <img src={select} alt="language" />
                    </S.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onGradeClick}>
                    <S.ListTable
                      data-id="1학년"
                      data-type="grade"
                      onClick={isSdClick}
                    >
                      1학년
                    </S.ListTable>
                    <S.ListTable
                      data-id="2학년"
                      data-type="grade"
                      onClick={isSdClick}
                    >
                      2학년
                    </S.ListTable>
                    <S.ListTable
                      data-id="3학년"
                      data-type="grade"
                      onClick={isSdClick}
                    >
                      3학년
                    </S.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="2"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  {hoverNumber === 2 ? (
                    <S.SelctFlexBox>
                      <span>{clickDivisionNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </S.SelctFlexBox>
                  ) : (
                    <S.SelctFlexBox>
                      <span>{clickDivisionNumber}</span>
                      <img src={select} alt="language" />
                    </S.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onTypeClick}>
                    <S.ListTable
                      data-id="개인"
                      data-type="division"
                      onClick={isSdClick}
                    >
                      개인
                    </S.ListTable>
                    <S.ListTable
                      data-id="팀"
                      data-type="division"
                      onClick={isSdClick}
                    >
                      팀
                    </S.ListTable>
                    <S.ListTable
                      data-id="동아리"
                      data-type="division"
                      onClick={isSdClick}
                    >
                      동아리
                    </S.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="3"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                  height={150}
                >
                  {hoverNumber === 3 ? (
                    <S.SelctFlexBox>
                      <span>{clickFieldNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </S.SelctFlexBox>
                  ) : (
                    <S.SelctFlexBox>
                      <span>{clickFieldNumber}</span>
                      <img src={select} alt="language" />
                    </S.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onFieldClick}>
                    <S.ListTable
                      data-id="소프트웨어"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      소프트웨어
                    </S.ListTable>
                    <S.InList
                      data-id="웹"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      웹
                    </S.InList>
                    <S.InList
                      data-id="앱"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      앱
                    </S.InList>
                    <S.InList
                      data-id="게임"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      게임
                    </S.InList>
                    <S.ListTable
                      data-id="임베디드"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      임베디드
                    </S.ListTable>
                    {/* 임베디드 시스템, 임베디드 소프트웨어 */}
                    <S.ListTable
                      data-id="정보보안"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      정보보안
                    </S.ListTable>
                    <S.ListTable
                      data-id="융합"
                      data-type="field"
                      onClick={isSdClick}
                    >
                      융합
                    </S.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="4"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                  height={52}
                >
                  {hoverNumber === 4 ? (
                    <S.SelctFlexBox>
                      <span>{clickScopeNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </S.SelctFlexBox>
                  ) : (
                    <S.SelctFlexBox>
                      <span>{clickScopeNumber}</span>
                      <img src={select} alt="language" />
                    </S.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onAccessClick}>
                    <S.ListTable
                      data-id="전체 공개"
                      data-type="scope"
                      onClick={isSdClick}
                    >
                      전체 공개
                    </S.ListTable>
                    <S.ListTable
                      data-id="비공개"
                      data-type="scope"
                      onClick={isSdClick}
                    >
                      비공개
                    </S.ListTable>
                  </S.ViewList>
                </S.Select>
              </S.PaddingBox>
            </S.SelectBoxs>
            <S.ReportMain>
              <S.ReportHeader>
                <input
                  type="text"
                  placeholder="개발 보고서의 제목을 입력해주세요"
                  onChange={onTitleChange}
                  value={title}
                />
              </S.ReportHeader>
              <S.UseLang>
                {tags.map((tag, i) => {
                  return (
                    <S.Tag onClick={() => onLanguageClick(i)} index={i}>
                      {tag}
                    </S.Tag>
                  );
                })}
                <input
                  type="text"
                  placeholder="개발에 사용한 언어들을 입력해주세요"
                  onKeyPress={onLanguageChange}
                  onChange={onLanguagesChange}
                />
              </S.UseLang>
              <S.ReprotWriteBox>
                <textarea
                  name="writingbox"
                  rows="15"
                  cols="40"
                  minLength="10"
                  placeholder="팀이 작성한 개발보고서에 대한 소개글을 입력해주세요"
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
                      placeholder="팀의 GITHUB 링크를 입력해주세요 (선택)"
                      onChange={onGithubChange}
                    />
                  </div>
                </span>
              </S.LinkBox>
              <S.AttachFile>
                <S.inAttachFile>
                  <img src={link} alt="attachfile" onClick={onClickFile} />
                  {files.length !== 0 ? (
                    files.map((file, i) => {
                      return (
                        <div key={i} onClick={() => onDelClickFile(i)}>
                          {file.name}
                          {i === files.length - 1 ? "" : " / "}
                        </div>
                      );
                    })
                  ) : (
                    <span>팀이 작성한 개발 보고서의 파일을 올려주세요.</span>
                  )}
                </S.inAttachFile>
              </S.AttachFile>
            </S.ReportMain>
            <S.SubmitBox>
              <S.MakeTeam>
                <span>
                  <S.MtBtnBox>
                    <S.MemberResult>
                      {selectedUserList.map((selectedUser) => {
                        return <SelectedUsers key={selectedUser.id} />;
                      })}
                    </S.MemberResult>
                    <S.MtBtn onClick={teamBtnClick}>팀 만들기</S.MtBtn>
                  </S.MtBtnBox>
                </span>
              </S.MakeTeam>
              <S.SaveSubBtn>
                <S.SaveBtn>
                  <div onClick={onSaveLocalStorage && checkAutoSave}>
                    임시저장
                  </div>
                </S.SaveBtn>
                <S.SubBtn onClick={onClick}>
                  <div>제출하기</div>
                </S.SubBtn>
              </S.SaveSubBtn>
            </S.SubmitBox>
          </S.InlineBox>
        </S.BorderBox>
      </S.Main>
    </>
  );
};

export default ReportWriting;
