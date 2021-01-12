import React, {useState,useEffect}from 'react';
import QuestionModal from './QuestionModal';
import * as S from '../styled/MainStyled/QuestionsStyle';
import { request } from '../../utils/axios/axios';

const Questions = () => {

    const [ modalVisible, setModalVisible] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ content, setContent ] = useState("");

    const [ message, setMessage ] = useState(null)

    const closeModal = () => {
        setModalVisible(false);
    }

    const onEmail = (e) => {
        setEmail(e.target.value);
    }
    const onContent = (e) => {
        setContent(e.target.value);
    }

    const send = (e) => {
        e.preventDefault();
        if([email, content].includes("")){
            setMessage("빈 칸을 입력해주세요")
        }else{
            QuestApi()
        }
        setModalVisible(true);
    }

    const QuestApi = async () => {
        const questData = {
            email: email,
            description: content
        }
        const response = await request(
            "post",
            "/question",
            {},
            questData
        )
        
        const statusNumber = Number(response.status)

        if(statusNumber === 200){
            setMessage("버그 & 문의 사항이 접수 되었습니다")
        }else if(statusNumber === 400){
            setMessage("에러발생! 내용을 확인해주세요")
        }
    }

    

    useEffect(() => {
        function handleTouchMove(e) {
        if (modalVisible) {
            e.preventDefault(); // 여기가 핵심
            e.stopPropagation()

            return false;
        }
      }
        window.addEventListener("mousewheel", handleTouchMove, {
            passive: false
        });
        return ()=> window.removeEventListener("mousewheel", handleTouchMove);
      }, [modalVisible]);

    return(
        <>
            <S.Questions>
                <S.QuestionBox>
                    <S.QuestionText>문의사항</S.QuestionText>
                    
                        <S.QuestExplain>
                            버그, 문의사항을 적어주시면 메일 또는 공지사항으로 안내해드리겠습니다.
                        </S.QuestExplain>

                    <S.QuestInputForm onSubmit={send}>
                        <S.EmailBox>
                            <S.EmailInput
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                onChange={onEmail}
                            />
                        </S.EmailBox>

                        <S.ContentBox>
                            <S.Content
                                rows="8"
                                placeholder="버그 & 문의사항을 입력해주세요"
                                onChange={onContent}
                            />
                        </S.ContentBox>

                        <S.QuestButton>버그 & 문의 보내기</S.QuestButton>
                    </S.QuestInputForm>
                </S.QuestionBox>        
                {
                    modalVisible && 
                    <QuestionModal
                        visible={modalVisible}
                        onClose={closeModal}
                        message={message}
                    />
                }
                
            </S.Questions>
        </>
    )
}

export default Questions;