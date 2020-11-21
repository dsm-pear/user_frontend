import React, {useState}from 'react';
import QuestionModal from './QuestionModal';
import * as S from '../styled/MainStyled/QuestionsStyle';

const Questions = () => {

    const [ modalVisible, setModalVisible] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ content, setContent ] = useState("");

    const [questdata, setQuestdata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ message, setMessage ] = useState("버그 & 문의 사항이 접수 되었습니다")

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
            setModalVisible(true);
        }else{
            console.log(email);
            console.log(content);
            setMessage("버그 & 문의 사항이 접수 되었습니다")
            setModalVisible(true);
        }
        
    }

    

    return(
        <>
            <S.Questions>
                <S.QuestionBox>
                    <S.QuestionText>문의사항</S.QuestionText>
                    
                        <S.QuestExplain>
                            버그, 문의사항을 적어주시면 메일 또는 공지사항으로 안내해드리겠습니다.
                        </S.QuestExplain>

                    <form onSubmit={send}>
                        <S.EmailBox>
                            <S.EmailInput
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                onChange={onEmail}
                            />
                        </S.EmailBox>

                        <S.ContentBox>
                            <S.Content
                                rows="6"
                                placeholder="버그 & 문의사항을 입력해주세요"
                                onChange={onContent}
                            />
                        </S.ContentBox>

                        <S.QuestButton>버그 & 문의 보내기</S.QuestButton>
                    </form>
                </S.QuestionBox>
                {
                    modalVisible && 
                    <QuestionModal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}
                        message={message}
                    />
                }
            </S.Questions>
        </>
    )
}

export default Questions;