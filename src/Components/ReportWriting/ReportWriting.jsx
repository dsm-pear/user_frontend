import React, { useState } from "react";
import SoleReportWriting from "./ReportWritingPath/ReportWritingSole/SoleReportWriting";
import TeamReportWriting from "./ReportWritingPath/ReportWritingTeam/TeamReportWriting";
import CircleReportWriting from "./ReportWritingPath/ReportWritingCircle/CircleReportWriting";
import * as S from "../styled/ReportWriting/style";
import { RWlogo } from "../../assets";
import { select } from "../../assets";
import { selecthover } from "../../assets";

const ReportWriting = () => {
  const [grade, setGrade] = useState("");
  const [type, setType] = useState("");
  const [field, setField] = useState("");
  const [access, setAccess] = useState("");
  const [hoverNumber, setHoverNumber] = useState(0);
  const [clickGradeNumber, setClickGradeNumber] = useState("학년 선택");
  const [clickTypeNumber, setClickTypeNumber] = useState("구분 선택");
  const [clickFieldNumber, setClickFieldNumber] = useState("개발 분야");
  const [clickAcceessNumber, setClickAcceessNumber] = useState("공개 범위");
  const [showSoleReportComponent, setShowSoleReportComponent] = useState(false);
  const [showTeamReportComponent, setShowTeamReportComponent] = useState(false);
  const [showCircleReportComponent, setShowCircleReportComponent] = useState(
    false
  );

  const onMouseOver = (e) => {
    setHoverNumber(Number(e.currentTarget.dataset.id));
  };

  const onMouseLeave = () => {
    setHoverNumber(0);
  };

  const isTypeClick = (types) => {
    switch (types.target.dataset.type) {
      case "grade":
        setClickGradeNumber(types.target.innerHTML);
        setGrade(types.target.dataset.id);
        break;
      case "type":
        setClickTypeNumber(types.target.innerHTML);
        setType(types.target.dataset.id);

        switch (types.target.dataset.id) {
          case "SOLE":
            setShowSoleReportComponent(true);
            setShowTeamReportComponent(false);
            setShowCircleReportComponent(false);
            break;
          case "TEAM":
            setShowTeamReportComponent(true);
            setShowSoleReportComponent(false);
            setShowCircleReportComponent(false);
            break;
          case "CIRCLES":
            setShowCircleReportComponent(true);
            setShowSoleReportComponent(false);
            setShowTeamReportComponent(false);
            break;
          default:
            console.log("err");
        }
        break;
      case "field":
        setClickFieldNumber(types.target.innerHTML);
        setField(types.target.dataset.id);
        break;
      case "access":
        setClickAcceessNumber(types.target.innerHTML);
        setAccess(types.target.dataset.id);
        break;
      default:
        console.log("err");
    }
  };

  return (
    <>
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
              {showSoleReportComponent === true ? (
                <SoleReportWriting
                  grade={grade}
                  type={type}
                  field={field}
                  access={access}
                />
              ) : null || showTeamReportComponent === true ? (
                <TeamReportWriting
                  grade={grade}
                  type={type}
                  field={field}
                  access={access}
                />
              ) : null || showCircleReportComponent === true ? (
                <CircleReportWriting
                  grade={grade}
                  type={type}
                  field={field}
                  access={access}
                />
              ) : null}
            </S.ReportBody>
          </S.InlineBox>
        </S.BorderBox>
      </S.Main>
    </>
  );
};

export default ReportWriting;
