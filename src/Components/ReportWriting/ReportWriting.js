import React, { useState } from 'react';
import * as S from '../styled/ReportWriting/style';
// In의 약자 I
import * as I from '../styled/ReportWriting/InStyle'; 
import { RWlogo } from "../../assets";
import { searchImg } from "../../assets";
import { select } from "../../assets";
import { link } from "../../assets";

const ReportWriting = () => {
    return (
        <S.Main>
            {/* margin 맥여주는 div */}
            <S.BorderBox> 
                {/* 안쪽 padding 맥여주는 div */}
               <S.InlineBox>
                    <S.ReportLogo> 
                        {/* <보고서 작성하기 img> 맥여주는 span */}
                        <span><img src={RWlogo} /></span>
                    </S.ReportLogo>
                    <S.SelectBoxs>
                        {/* 사용 언어, 학년 등 선택박스 만드는 div */}
                        <S.PaddingBox>
                            <S.Select>
                                <div><span>사용 언어</span><img src={select} /></div>
                            </S.Select>
                            <S.Select>
                                <div><span>개발 분야</span><img src={select} /></div>
                            </S.Select>
                            <S.Select>
                                <div><span>공개범위</span><img src={select} /></div>
                            </S.Select>
                        </S.PaddingBox>
                    </S.SelectBoxs>
                    {/* 보고서 제목 ~ 보고서 파일 첨부까지 */}
                    <S.ReportMain>
                        {/* 보고서 제목 */}
                        <S.ReportHeader>
                            <input type={Text} placeholder="개발 보고서의 제목을 입력해주세요." />
                        </S.ReportHeader>
                        {/* 보고서 소개 글 */}
                        <S.ReprotWriteBox>
                            <textarea name="writingbox" rows="10" cols="40" minLength="10" placeholder="팀이 작성한 개발보고서에 대한 소개글을 입력해주세요." style={{resize:"none"}}></textarea>
                        </S.ReprotWriteBox>
                        {/* 팀 깃헙 링크 */}
                        <S.LinkBox>
                            <span>
                                <form name="githubLink" action="" method="post" autoComplete="on">
                                    <img src={link} /><input type={Text} placeholder="팀의 GITHUB 링크를 입력해주세요 (선택)" />
                                </form>
                            </span>
                        </S.LinkBox>
                        {/* 보고서 파일 첨부 */}
                        <S.AttachFile>
                            <span><img src={link} /></span>
                        </S.AttachFile>
                    </S.ReportMain>
                    {/* 팀 제작 ~ submit btn */}
                    <S.SubmitBox>
                        {/* 팀 제작 (left) */}
                        <S.MakeTeam>
                            {/* add teamName */}
                            <form name="makeTeam" action="" method="post" autoComplete="on">
                                <I.TeamLeftBox>
                                    <I.TeamName>
                                        <span><input type={Text} placeholder="팀의 이름을 입력해주세요." /></span>
                                    </I.TeamName>
                                    {/* add member */}
                                    <I.TeamMember>
                                        <span><input type={Text} placeholder="팀원을 입력해주세요."/><img src={searchImg} /></span>
                                    </I.TeamMember>
                                </I.TeamLeftBox>
                                <I.TeamRightBox>
                                    <button type="submit">팀 만들기</button>
                                </I.TeamRightBox>
                            </form>
                        </S.MakeTeam>
                        {/* save & submit btn (right) */}
                        <S.SaveSubBtn>
                            <I.SaveBtn>
                                <button>임시저장</button>
                            </I.SaveBtn>
                            <I.SubBtn>
                                <form name="reportSubmit" action="" method="post" autoComplete="on">
                                    <button type="submit">제출하기</button>
                                </form>
                            </I.SubBtn>
                        </S.SaveSubBtn>
                    </S.SubmitBox>
               </S.InlineBox>
            </S.BorderBox>
        </S.Main>
    );
}

export default ReportWriting;