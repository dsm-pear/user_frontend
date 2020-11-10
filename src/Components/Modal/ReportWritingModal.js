import React, {  } from 'react';
import * as S from '../styled/Modal/RwModalStyle';
import * as I from '../styled/Modal/RwModalInStyle';
import { Close } from "../../assets";
import { searchImg } from "../../assets";
import { NowTeam } from "../../assets";

const ReportWritingModal = () => {
    return (
        <S.Main>
        {/* 전체 container */}
            <S.ModalMain>
            {/* 모달 설정 및 가운데 정렬 */}
                <S.ModalSort>
                {/* 모달 padding, margin 설정 */}
                    <S.CloseBtn>
                    {/* 닫기 버튼 */}
                        <span><img src={Close} alt="Close"/></span>
                    </S.CloseBtn>
                    <S.SearchInput>
                    {/* 검색 input */}
                        <I.BorderInput>
                            <form name="input-name" action="" method="post">
                                <span><input type={Text} /><img src={searchImg} alt="search" /></span>
                            </form>
                        </I.BorderInput>
                    </S.SearchInput>
                    <S.SearchResult>
                    {/* 검색 result창 */}
                        <div>
                            <div>
                                <form name="team-member" action="" method="post">
                                    <div><span>전규현(201215jgh@dsm.hs.kr)</span><imput type="checkbox" name="Teaminfo" value="member"/></div>
                                </form>
                            </div>
                        </div>
                    </S.SearchResult>
                    <S.TeamState>
                    {/* 현재 팀 상태 */}
                        <div><span>현재 팀 상태</span><img src={NowTeam} alt="NowTeam"/></div>
                    </S.TeamState>
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default ReportWritingModal;