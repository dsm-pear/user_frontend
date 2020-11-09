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
            <div>
            {/* 모달 설정 및 가운데 정렬 */}
                <div>
                {/* 모달 padding, margin 설정 */}
                    <div>
                    {/* 닫기 버튼 */}
                        <span><img src={Close} alt="Close"/></span>
                    </div>
                    <div>
                    {/* 검색 input */}
                        <span><input type={Text} /><img src={searchImg} alt="search" /></span>
                    </div>
                    <div>
                    {/* 검색 result창 */}
                        <div>
                            <div>
                                <form name="team-member" action="" method="post">
                                    <div><span>전규현(201215jgh@dsm.hs.kr)</span><imput type="checkbox" name="Teaminfo" value="member"/></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                    {/* 현재 팀 상태 */}
                        <div><span>현재 팀 상태</span><img src={NowTeam} alt="NowTeam"/></div>
                    </div>
                </div>
            </div>
        </S.Main>
    );
}

export default ReportWritingModal;