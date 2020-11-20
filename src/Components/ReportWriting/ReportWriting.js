import React, { useState } from 'react';
import SubmitReportModal from '../Modal/SubmitReportModal';
import * as S from '../styled/ReportWriting/style';
// In의 약자 I
import * as I from '../styled/ReportWriting/InStyle'; 
import { RWlogo } from "../../assets";
import { searchImg } from "../../assets";
import { select } from "../../assets";
import { selecthover } from "../../assets";
import { link } from "../../assets";

const ReportWriting = () => {
    const [hoverNumber, setHoverNumber] = useState(0)
    const [ state, setState ] = useState("hidden");
    const [ opa, setOpa ] = useState("0");

    const onMouseOver = (e) => {
        setHoverNumber(Number(e.currentTarget.dataset.id))
    }
    const onMouseLeave = () => { 
        setHoverNumber(0)
    }
    const onClick = () => {
        setState("visable");
        setOpa("1");
    }

    return (
        <>
            <SubmitReportModal setState={setState} setOpa={setOpa} state={state} opa={opa}/>   
            <S.Main>
            
            <S.BorderBox> 
               <S.InlineBox>
                    <S.ReportLogo> 
                        <span><img src={RWlogo} alt="Rwlogo"/></span>
                    </S.ReportLogo>
                    <S.SelectBoxs>
                        <S.PaddingBox>
                        { /*<S.Select> 
                        
                                <div><span>학년선택</span><img src={select}  alt="grade-select" /></div>
                            </S.Select>
                            <S.Select>
                                <div><span>팀 선택</span><img src={select} alt="team-select" /></div>
                            </S.Select>*/ }
                            <S.Select data-id="1" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                            { 
                                hoverNumber === 1 ?
                                <I.SelctFlexBox><span>구분 선택</span><img src={selecthover} style={{width:'11px'}} alt="language"/>
                                </I.SelctFlexBox>
                                : <I.SelctFlexBox><span>구분 선택</span><img src={select} alt="language"/></I.SelctFlexBox>
                            }
                                    <S.ViewList>
                                        <I.ListTable>개인</I.ListTable>
                                        <I.ListTable>팀</I.ListTable>
                                        <I.ListTable>비공개</I.ListTable>
                                    </S.ViewList>
                            </S.Select>
                            <S.Select data-id="2" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} height={150}>
                            { 
                                hoverNumber === 2 ?
                                <I.SelctFlexBox><span>개발 분야</span><img src={selecthover} style={{width:'11px'}} alt="language"/>
                                </I.SelctFlexBox>
                                : <I.SelctFlexBox><span>개발 분야</span><img src={select} alt="language"/></I.SelctFlexBox>
                            }       
                                    <S.ViewList>
                                        <I.ListTable>소프트웨어</I.ListTable>
                                        <I.InList>- 웹</I.InList>
                                        <I.InList>- 앱</I.InList>
                                        <I.InList>- 게임</I.InList>
                                        <I.ListTable>인베디드</I.ListTable>
                                        <I.ListTable>정보보안</I.ListTable>
                                        <I.ListTable>융합</I.ListTable>
                                    </S.ViewList>
                            </S.Select>
                            <S.Select data-id="3" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                            { 
                                hoverNumber === 3 ?
                                <I.SelctFlexBox><span>공개범위</span><img src={selecthover} style={{width:'11px'}} alt="language"/>
                                </I.SelctFlexBox>
                                : <I.SelctFlexBox><span>공개범위</span><img src={select} alt="language"/></I.SelctFlexBox>
                            }       
                                    <S.ViewList>
                                        <I.ListTable>전체 공개</I.ListTable>
                                        <I.ListTable>학생 공개</I.ListTable>
                                        <I.ListTable>비공개</I.ListTable>
                                    </S.ViewList>
                            </S.Select>
                        </S.PaddingBox>
                    </S.SelectBoxs>
                    <S.ReportMain>
                        <S.ReportHeader>
                            <input type={Text} placeholder="개발 보고서의 제목을 입력해주세요." />
                        </S.ReportHeader>
                        <S.ReprotWriteBox>
                            <textarea name="writingbox" rows="15" cols="40" minLength="10" placeholder="팀이 작성한 개발보고서에 대한 소개글을 입력해주세요." style={{resize:"none"}}></textarea>
                        </S.ReprotWriteBox>
                        <S.LinkBox>
                            <span>
                                <div>
                                    <img src={link} alt="gitgub-link"/><input type={Text} placeholder="팀의 GITHUB 링크를 입력해주세요 (선택)" />
                                </div>
                            </span>
                        </S.LinkBox>
                        <S.AttachFile>
                            <span><img src={link} alt="attachfile"/></span>
                        </S.AttachFile>
                    </S.ReportMain>
                    <S.SubmitBox>
                        <S.MakeTeam>
                            <span>
                                <I.TeamLeftBox>
                                    <I.TeamName>
                                        <span><input type={Text} placeholder="팀의 이름을 입력해주세요." /></span>
                                    </I.TeamName>
                                    <I.TeamMember>
                                        <span><input type={Text} placeholder="팀원을 입력해주세요."/><img src={searchImg} alt="inputmember"/>
                                        </span>
                                    </I.TeamMember>
                                </I.TeamLeftBox>
                                <I.TeamRightBox>
                                    <div>팀 만들기</div>
                                </I.TeamRightBox>
                            </span>
                        </S.MakeTeam>
                        {/* save & submit btn (right) */}
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
}

export default ReportWriting;