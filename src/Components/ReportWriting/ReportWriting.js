import React, { useState } from 'react';
import * as S from '../styled/ReportWriting/style';
import { RWlogo } from "../../assets";
import { search } from "../../assets";
import { select } from "../../assets";
import { link } from "../../assets";

const ReportWriting = () => {
    return (
        <S.Main>
            {/* margin 맥여주는 div */}
            <div> 
                {/* 안쪽 padding 맥여주는 div */}
               <div>
                    <div> 
                        {/* 보고서 작성하기 img 맥여주는 span */}
                        <span><img src={RWlogo} /></span>
                    </div>
                    <div>
                        {/* 사용 언어, 학년 등 선택박스 만드는 div */}
                        <div>
                            <div>
                                <span>사용 언어<img src={select} /></span>
                            </div>
                            <div>
                                <span>개발 분야<img src={select} /></span>
                            </div>
                            <div>
                                <span>공개범위<img src={select} /></span>
                            </div>
                        </div>
                    </div>
                    {/* 보고서 제목 ~ 보고서 파일 첨부까지 */}
                    <div>
                        {/* 보고서 제목 */}
                        <div>
                            <input type={Text} placeholder="개발 보고서의 제목을 입력해주세요." />
                        </div>
                        {/* 보고서 소개 글 */}
                        <div className="write-text">
                            <span>
                                <textarea name="writingbox" rows="5" cols="40" minLength="10" placeholder="팀이 작성한 개발보고서에 대한 소개글을 입력해주세요." style={{resize:"none"}}></textarea>
                            </span>
                        </div>
                        {/* 팀 깃헙 링크 */}
                        <div className="attaching-link attaching">
                            <span>
                                <form name="githubLink" action="" method="" autoComplete="on">
                                    <img src={link} /><input type={Text} placeholder="팀의 GITHUB 링크를 입력해주세요 (선택)" />
                                </form>
                            </span>
                        </div>
                        {/* 보고서 파일 첨부 */}
                        <div className="attaching-file attaching">
                            <span><img src={link} /></span>
                        </div>
                    </div>
                    {/* 팀 제작 ~ submit btn */}
                    <div>
                        {/* 팀 제작 (left) */}
                        <div>
                            <span className="add-team">

                            </span>
                        </div>
                        {/* save & submit btn (right) */}
                        <div>
                            <span className="save-btn">
                            
                            </span>
                            <span className="submit-btn">
                            
                            </span>
                        </div>
                    </div>
               </div>
            </div>
        </S.Main>
    );
}

export default ReportWriting;