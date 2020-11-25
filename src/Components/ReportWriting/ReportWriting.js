import React, { useState } from 'react';
import ReportWritingModal from '../Modal/ReportWritingModal';
import SubmitReportModal from '../Modal/SubmitReportModal';
import * as S from '../styled/ReportWriting/style';
import * as I from '../styled/ReportWriting/InStyle'; 
import { RWlogo } from "../../assets";
import { select } from "../../assets";
import { selecthover } from "../../assets";
import { link } from "../../assets";

const ReportWriting = () => {
    const [ hoverNumber, setHoverNumber ] = useState(0);
    const [ clickNumber, setClickNumber ] = useState(0);
    const [ state, setState ] = useState("hidden");
    const [ hei, setHei ] = useState("0");
    const [ myopa, setMyOpa ] = useState('1');
    const [ open, setOpen ] = useState("hidden");
    const [ myHei, setMyHei ] = useState("0");
    const [ opas, setOpas ] = useState('1');
    const [ wid, setWid ] = useState("11.5rem");
    const [ toggle, setToggle ] = useState(false);

    const onMouseOver = (e) => {
        setHoverNumber(Number(e.currentTarget.dataset.id))
    }

    const onMouseLeave = () => { 
        setHoverNumber(0)
    }

    const isIdClick = (e) => {
        console.log(e.target.dataset)

        if(e.target.dataset === 'division' || e.target.dataset === 'field' || e.target.dataset === 'scope') {
            setClickNumber(Number(e.currentTarget.dataset.id))
        }
    }
    
    const onClick = () => {
        setState("visible");
        setHei("280px");
        setMyOpa('1');
    }
    
    const teamBtnClick = () => {
        setOpen("visible");
        setMyHei("450px");
        setOpas('1');
    }

    const clickInputBox = (e) => {
        // if (!toggle) {
        //     setWid("15rem");
        // } else {
        //     setWid("12rem");
        // }

        // 페이지 접속시 toggle: false
        // 인풋 클릭을 한다: -> 이떄 toggle: false
        setWid(toggle ? "12rem" : "15rem");
        setToggle(!toggle);
    }

    return (
        <>
        <SubmitReportModal setState={setState} setHei={setHei} setMyOpa={setMyOpa} state={state} hei={hei} myopa={myopa}/>
        <ReportWritingModal setOpen={setOpen} setMyHei={setMyHei} setOpas={setOpas} open={open} myHei={myHei} opas={opas}/>
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
                                <I.ListTable data-id="1" data-type="division" onClick={isIdClick}>개인</I.ListTable>
                                <I.ListTable data-id="2" data-type="division" onClick={isIdClick}>팀</I.ListTable>
                                <I.ListTable data-id="3" data-type="division" onClick={isIdClick}>동아리</I.ListTable>
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
                                <I.ListTable data-id="1" data-type="field" onClick={isIdClick}>소프트웨어</I.ListTable>
                                <I.InList>- 웹</I.InList>
                                <I.InList>- 앱</I.InList>
                                <I.InList>- 게임</I.InList>
                                <I.ListTable data-id="2" data-type="field" onClick={isIdClick}>임베디드</I.ListTable>
                                <I.ListTable data-id="3" data-type="field" onClick={isIdClick}>정보보안</I.ListTable>
                                <I.ListTable data-id="4" data-type="field" onClick={isIdClick}>융합</I.ListTable>
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
                                <I.ListTable data-id="1" data-type="scope" onClick={isIdClick}>전체 공개</I.ListTable>
                                <I.ListTable data-id="2" data-type="scope" onClick={isIdClick}>학생 공개</I.ListTable>
                                <I.ListTable data-id="3" data-type="scope" onClick={isIdClick}>비공개</I.ListTable>
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
                                    <I.TeamName onClick={clickInputBox} width={wid}>
                                        {
                                            toggle
                                        }
                                        <span><input type={Text} placeholder="팀의 이름을 입력해주세요."/></span>
                                    </I.TeamName>
                                </I.TeamLeftBox>
                                <I.TeamRightBox>
                                    <div onClick={teamBtnClick}>팀 만들기</div>
                                </I.TeamRightBox>
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
}

export default ReportWriting;