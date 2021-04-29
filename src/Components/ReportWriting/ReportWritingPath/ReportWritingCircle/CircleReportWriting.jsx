import React, { useState } from "react";
import ReportWritingModal from "../../Modal/ReportWritingModal";
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import SubmitReportModal from "../../Modal/SubmitReportModal";
import SelectedUsers from "../../Modal/SelectedUsers";
import * as S from "../../../styled/ReportWriting/ReportWritingPath/ReportWritingCircle/style";
import { RWlogo } from "../../../../assets";
import { select } from "../../../../assets";
import { selecthover } from "../../../../assets";
import { link } from "../../../../assets";
import { github as gitgubimg } from "../../../../assets";
import { request } from "../../../../utils/axios/axios";
import axios from "axios";

const CircleReportWriting = () => {
  const [grade, setGrade] = useState("");
  const [type, setType] = useState("");
  const [field, setField] = useState("");
  const [access, setAccess] = useState("");
  const [hoverNumber, setHoverNumber] = useState(0);
  const [clickGradeNumber, setClickGradeNumber] = useState("학년 선택");
  const [clickTypeNumber, setClickTypeNumber] = useState("구분 선택");
  const [clickFieldNumber, setClickFieldNumber] = useState("개발 분야");
  const [clickAcceessNumber, setClickAcceessNumber] = useState("공개 범위");
=======
>>>>>>> Profile
import TeamSubmitReportModal from "../../Modal/SubmitRequest/TeamReportRequest/TeamSubmitReportModal";
import SelectedUsers from "../../Modal/SelectedUsers";
import * as S from "../../../styled/ReportWriting/ReportWritingPath/ReportWritingTeam/style";
import { link } from "../../../../assets";
import { github as gitgubimg } from "../../../../assets";
import axios from "axios";

const TeamReportWriting = ({ type, access, field, grade }) => {
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> Profile
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
  const [github, setGithub] = useState("");
  const [teamName, setTeamName] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);

  const ACCESS_TOKEN = localStorage.getItem("access-token");
  const MainUrl = "http://211.38.86.92:8005";

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
  const onMouseOver = (e) => {
    setHoverNumber(Number(e.currentTarget.dataset.id));
  };

  const onMouseLeave = () => {
    setHoverNumber(0);
  };

  const isTypeClick = (e) => {
    switch (e.target.dataset.type) {
      case "grade":
        setClickGradeNumber(e.target.innerHTML);
        setGrade(e.target.dataset.id);
        break;
      case "type":
        setClickTypeNumber(e.target.innerHTML);
        setType(e.target.dataset.id);
        break;
      case "field":
        setClickFieldNumber(e.target.innerHTML);
        setField(e.target.dataset.id);
        break;
      case "access":
        setClickAcceessNumber(e.target.innerHTML);
        setAccess(e.target.dataset.id);
        break;
      default:
        console.log("err");
    }
  };

=======
>>>>>>> Stashed changes
>>>>>>> Profile
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
<<<<<<< HEAD
        `${MainUrl}/report/team`,
=======
<<<<<<< Updated upstream
        `${MainUrl}/report`,
=======
        `${MainUrl}/report/team`,
>>>>>>> Stashed changes
>>>>>>> Profile
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
      })
      .catch(() => {
        console.log("임시저장 실패");
      });
  };

  return (
    <>
<<<<<<< HEAD
      <TeamSubmitReportModal
=======
<<<<<<< Updated upstream
      <SubmitReportModal
=======
      <TeamSubmitReportModal
>>>>>>> Stashed changes
>>>>>>> Profile
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
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
      <S.Main>
        <S.BorderBox>
          <S.InlineBox>
            <S.ReportHeader>
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
                          alt="grade"
                        />
                      </S.SelctFlexBox>
                    ) : (
                      <S.SelctFlexBox>
                        <span>{clickGradeNumber}</span>
                        <img src={select} alt="grade" />
                      </S.SelctFlexBox>
                    )}
                    <S.ViewList>
                      <S.ListTable
                        data-id="GRADE1"
                        data-type="grade"
                        onClick={isTypeClick}
                      >
                        1학년
                      </S.ListTable>
                      <S.ListTable
                        data-id="GRADE2"
                        data-type="grade"
                        onClick={isTypeClick}
                      >
                        2학년
                      </S.ListTable>
                      <S.ListTable
                        data-id="GRADE3"
                        data-type="grade"
                        onClick={isTypeClick}
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
                        <span>{clickTypeNumber}</span>
                        <img
                          src={selecthover}
                          style={{ width: "11px" }}
                          alt="type"
                        />
                      </S.SelctFlexBox>
                    ) : (
                      <S.SelctFlexBox>
                        <span>{clickTypeNumber}</span>
                        <img src={select} alt="type" />
                      </S.SelctFlexBox>
                    )}
                    <S.ViewList>
                      <S.ListTable
                        data-id="SOLE"
                        data-type="type"
                        onClick={isTypeClick}
                      >
                        개인
                      </S.ListTable>
                      <S.ListTable
                        data-id="TEAM"
                        data-type="type"
                        onClick={isTypeClick}
                      >
                        팀
                      </S.ListTable>
                      <S.ListTable
                        data-id="CIRCLES"
                        data-type="type"
                        onClick={isTypeClick}
                      >
                        동아리
                      </S.ListTable>
                    </S.ViewList>
                  </S.Select>
                  <S.Select
                    data-id="3"
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    height={165}
                  >
                    {hoverNumber === 3 ? (
                      <S.SelctFlexBox>
                        <span>{clickFieldNumber}</span>
                        <img
                          src={selecthover}
                          style={{ width: "11px" }}
                          alt="field"
                        />
                      </S.SelctFlexBox>
                    ) : (
                      <S.SelctFlexBox>
                        <span>{clickFieldNumber}</span>
                        <img src={select} alt="field" />
                      </S.SelctFlexBox>
                    )}
                    <S.ViewList>
                      <S.ListTable
                        data-id="WEB"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        웹
                      </S.ListTable>
                      <S.ListTable
                        data-id="APP"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        앱
                      </S.ListTable>
                      <S.ListTable
                        data-id="GAME"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        게임
                      </S.ListTable>
                      <S.ListTable
                        data-id="AI"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        인공지능
                      </S.ListTable>
                      <S.ListTable
                        data-id="EMBEDDED"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        임베디드
                      </S.ListTable>
                      <S.ListTable
                        data-id="SECURITY"
                        data-type="field"
                        onClick={isTypeClick}
                      >
                        정보보안
                      </S.ListTable>
                      <S.ListTable
                        data-id="FUSION"
                        data-type="field"
                        onClick={isTypeClick}
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
                        <span>{clickAcceessNumber}</span>
                        <img
                          src={selecthover}
                          style={{ width: "11px" }}
                          alt="access"
                        />
                      </S.SelctFlexBox>
                    ) : (
                      <S.SelctFlexBox>
                        <span>{clickAcceessNumber}</span>
                        <img src={select} alt="access" />
                      </S.SelctFlexBox>
                    )}
                    <S.ViewList>
                      <S.ListTable
                        data-id="EVERY"
                        data-type="access"
                        onClick={isTypeClick}
                      >
                        전체 공개
                      </S.ListTable>
                      <S.ListTable
                        data-id="ADMIN"
                        data-type="access"
                        onClick={isTypeClick}
                      >
                        비공개
                      </S.ListTable>
                    </S.ViewList>
                  </S.Select>
                </S.PaddingBox>
              </S.SelectBoxs>
            </S.ReportHeader>
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
                      <S.Tag
                        onClick={() => onLanguageClick(i)}
                        index={i}
                        key={i}
                      >
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
                        <S.ResultHeader>TEAM MEMBER</S.ResultHeader>
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
          </S.InlineBox>
        </S.BorderBox>
      </S.Main>
    </>
  );
};

export default CircleReportWriting;
=======
>>>>>>> Profile

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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> Profile
