import React, { useState, useEffect } from "react";
import ReportWritingModal from "../Modal/ReportWritingModal";
import SubmitReportModal from "../Modal/SubmitReportModal";
import * as S from "../styled/ReportWriting/style";
import * as I from "../styled/ReportWriting/InStyle";
import { RWlogo } from "../../assets";
import { select } from "../../assets";
import { selecthover } from "../../assets";
import { link } from "../../assets";
import { github as gitgubimg } from "../../assets";

const ReportWriting = () => {
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
  const [type, setType] = useState("");
  const [access, setAccess] = useState("");
  const [field, setField] = useState("");
  const [grade, setGrade] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(0);
  const [fileName, setFileName] = useState();
  const [github, setGithub] = useState("");
  const [teamName, setTeamName] = useState([]);

  const onMouseOver = (e) => {
    setHoverNumber(Number(e.currentTarget.dataset.id));
  };

  const onMouseLeave = () => {
    setHoverNumber(0);
  };

  const isIdClick = (e) => {
    console.log(e.target.dataset.type);

    if (e.target.dataset.type === "grade") {
      setClickGradeNumber(e.currentTarget.dataset.id);
    } else if (e.target.dataset.type === "division") {
      setClickDivisionNumber(e.currentTarget.dataset.id);
    } else if (e.target.dataset.type === "field") {
      setClickFieldNumber(e.currentTarget.dataset.id);
    } else if (e.target.dataset.type === "scope") {
      setClickScopeNumber(e.currentTarget.dataset.id);
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
    console.log(e);
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
    console.log(inputElement.value);
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

  useEffect(() => {
    console.log(files);
  }, [files]);

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

  const onFileNameChage = (e) => {
    setFileName();
  };

  const onIsSubmittedChange = (e) => {
    setIsSubmitted();
  };
  const onTeamNameChange = (e) => {
    setTeamName();
  };

  const onTypeClick = (e) => {
    setType(e.target.value);
    console.log(e);
  };

  const onGradeClick = (e) => {
    setGrade(e.target.value);
    console.log(e);
  };

  const onFieldClick = (e) => {
    setField(e.target.value);
    console.log(e);
  };

  const onAccessClick = (e) => {
    setAccess(e.target.value);
    console.log(e);
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
        type={type}
        access={access}
        field={field}
        grade={grade}
        isSubmitted={isSubmitted}
        fileName={fileName}
        github={github}
        teamName={teamName}
      />
      <ReportWritingModal
        setOpen={setOpen}
        setMyHei={setMyHei}
        setOpas={setOpas}
        open={open}
        myHei={myHei}
        opas={opas}
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
                    <I.SelctFlexBox>
                      <span>{clickGradeNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </I.SelctFlexBox>
                  ) : (
                    <I.SelctFlexBox>
                      <span>{clickGradeNumber}</span>
                      <img src={select} alt="language" />
                    </I.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onGradeClick}>
                    <I.ListTable
                      data-id="1학년"
                      data-type="grade"
                      onClick={isIdClick}
                    >
                      1학년
                    </I.ListTable>
                    <I.ListTable
                      data-id="2학년"
                      data-type="grade"
                      onClick={isIdClick}
                    >
                      2학년
                    </I.ListTable>
                    <I.ListTable
                      data-id="3학년"
                      data-type="grade"
                      onClick={isIdClick}
                    >
                      3학년
                    </I.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="2"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  {hoverNumber === 2 ? (
                    <I.SelctFlexBox>
                      <span>{clickDivisionNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </I.SelctFlexBox>
                  ) : (
                    <I.SelctFlexBox>
                      <span>{clickDivisionNumber}</span>
                      <img src={select} alt="language" />
                    </I.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onTypeClick}>
                    <I.ListTable
                      data-id="개인"
                      data-type="division"
                      onClick={isIdClick}
                    >
                      개인
                    </I.ListTable>
                    <I.ListTable
                      data-id="팀"
                      data-type="division"
                      onClick={isIdClick}
                    >
                      팀
                    </I.ListTable>
                    <I.ListTable
                      data-id="동아리"
                      data-type="division"
                      onClick={isIdClick}
                    >
                      동아리
                    </I.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="3"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                  height={150}
                >
                  {hoverNumber === 3 ? (
                    <I.SelctFlexBox>
                      <span>{clickFieldNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </I.SelctFlexBox>
                  ) : (
                    <I.SelctFlexBox>
                      <span>{clickFieldNumber}</span>
                      <img src={select} alt="language" />
                    </I.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onFieldClick}>
                    <I.ListTable
                      data-id="소프트웨어"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      소프트웨어
                    </I.ListTable>
                    <I.InList
                      data-id="웹"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      - 웹
                    </I.InList>
                    <I.InList
                      data-id="앱"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      - 앱
                    </I.InList>
                    <I.InList
                      data-id="게임"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      - 게임
                    </I.InList>
                    <I.ListTable
                      data-id="임베디드"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      임베디드
                    </I.ListTable>
                    {/* 임베디드 시스템, 임베디드 소프트웨어 */}
                    <I.ListTable
                      data-id="정보보안"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      정보보안
                    </I.ListTable>
                    <I.ListTable
                      data-id="융합"
                      data-type="field"
                      onClick={isIdClick}
                    >
                      융합
                    </I.ListTable>
                  </S.ViewList>
                </S.Select>
                <S.Select
                  data-id="4"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                  height={52}
                >
                  {hoverNumber === 4 ? (
                    <I.SelctFlexBox>
                      <span>{clickScopeNumber}</span>
                      <img
                        src={selecthover}
                        style={{ width: "11px" }}
                        alt="language"
                      />
                    </I.SelctFlexBox>
                  ) : (
                    <I.SelctFlexBox>
                      <span>{clickScopeNumber}</span>
                      <img src={select} alt="language" />
                    </I.SelctFlexBox>
                  )}
                  <S.ViewList onClick={onAccessClick}>
                    <I.ListTable
                      data-id="전체 공개"
                      data-type="scope"
                      onClick={isIdClick}
                    >
                      전체 공개
                    </I.ListTable>
                    <I.ListTable
                      data-id="비공개"
                      data-type="scope"
                      onClick={isIdClick}
                    >
                      비공개
                    </I.ListTable>
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
                />
              </S.ReportHeader>
              <S.UseLang>
                {tags.map((tag, i) => {
                  console.log(tag);
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
                        <div onClick={() => onDelClickFile(i)}>
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
                  <I.MTbtn>
                    <div onClick={teamBtnClick}>팀 만들기</div>
                  </I.MTbtn>
                </span>
              </S.MakeTeam>
              <S.SaveSubBtn>
                <I.SaveBtn>
                  <div>임시저장</div>
                </I.SaveBtn>
                <I.SubBtn onClick={onClick}>
                  <div>제출하기</div>
                </I.SubBtn>
              </S.SaveSubBtn>
            </S.SubmitBox>
          </S.InlineBox>
        </S.BorderBox>
      </S.Main>
    </>
  );
};

export default ReportWriting;
