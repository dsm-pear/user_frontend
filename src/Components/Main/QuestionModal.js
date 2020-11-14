import React from 'react';
import * as S from '../styled/MainStyled/QuestionsStyle';

const QuestModal = () => {

    return (
        <S.ModalBackground>
            <S.Modal>
                <S.ModalClose>
                </S.ModalClose>
                <S.ModalContant>
                    버그 & 문의 사항이 접수 되었습니다
                </S.ModalContant>
            </S.Modal>
        </S.ModalBackground>
    )
}

export default QuestModal;