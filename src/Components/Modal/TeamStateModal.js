import React, {  } from 'react';
import * as S from '../styled/Modal/TsModalStyle';
//import * as I from '../styled/Modal/TsModalInStyle';
import { Close } from "../../assets";

const TeamStateModal = () => {
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
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default TeamStateModal;