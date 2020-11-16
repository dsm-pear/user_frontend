import React, {  } from 'react';
import * as S from '../styled/Modal/ScModalStyle';
import { Close } from "../../assets";

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
                    <S.ModalHeader>
                        <span>보고서가 </span><span>제출되었습니다.</span>
                    </S.ModalHeader>
                    <S.ModalMainText>
                        <span>작성한 보고서의 승인 여부는 선생님의 확인 후 이메일로 알람이 갑니다. 만약 </span><p>
                        </p><span>보고서를 승인 받지 못했다면 수정이 가능합니다. (소개글 및 파일 덮어씌우기 가능)</span>
                    </S.ModalMainText>
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default ReportWritingModal;