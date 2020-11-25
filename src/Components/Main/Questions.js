import React, {useState}from 'react';
import QuestionModal from './QuestionModal';
import * as S from '../styled/MainStyled/QuestionsStyle';

const Questions = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return(
        <>
            <S.Questions>
                <S.QuestionBox>
                    <S.QuestionText>문의사항</S.QuestionText>
                    <S.QuestExplain>
                        버그, 문의사항을 적어주시면 메일 또는 공지사항으로 안내해드리겠습니다.
                    </S.QuestExplain>
                        <S.EmailBox>
                            <S.EmailInput
                                type="email"
                                placeholder="이메일을 입력해주세요."
                            />
                        </S.EmailBox>

                        <S.ContentBox>
                            <S.Content
                                rows="6"
                                placeholder="버그 & 문의사항을 입력해주세요"
                            />
                        </S.ContentBox>

                        <S.QuestButton onClick={openModal}>버그 & 문의 보내기</S.QuestButton>
                </S.QuestionBox>
                {
                    modalVisible && 
                    <QuestionModal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}
                    />
                }
                
            </S.Questions>
        </>
    )
}

export default Questions;