import styled from 'styled-components';

export const Questions = styled.div`
    height: 100%;
    background-color: #ffffff;  
`

export const QuestionBox = styled.div`
    width: 1032px;
    float : center;
    position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const QuestionText = styled.div`
    text-decoration: underline;
    text-decoration-color: #6192f3;
    font-size: 38px;
    line-height: 1.21;
    letter-spacing: 6.08px;
    margin-bottom: 37px;
`;

export const QuestExplain = styled.div`
    font-size: 24px;
    line-height: 1.21;
    letter-spacing: 3.84px;
    margin-bottom: 35.5px;
`;

export const QuestInputForm = styled.form`
    font-family: "Noto Sans KR", sans-serif;
`;

export const EmailBox = styled.div`
    width: 1030px;
    height: 60px;
    border-radius: 28px;
    margin-bottom: 38px;
    background-color: #e4eef2;
`;

export const EmailInput = styled.input`
    width: 900px;
    font-size: 20px;
    line-height: 1.2;
    color: #4d4d4d;
    border-radius: 30px;
    border: none;
    align-items: center;
    padding: 18px 0 18px 55px;
    background-color: #e4eef2;
    font-family: "Noto Sans KR", sans-serif;
    &:focus {
        outline: none;
    }
`;

export const ContentBox = styled.div`
    width: 1031px;
    height: 229px;
    border-radius: 27px;
    margin-bottom: 71px;
    background-color: #e4eef2;
`;

export const Content = styled.textarea`
    font-family: "Noto Sans KR", sans-serif;
    width: 900px;
    font-size: 20px;
    line-height: 1.2;
    border: none;
    align-items: center;
    resize: none;
    margin: 18px 0 0 55px;
    background-color: #e4eef2;
    color: #4d4d4d;
    &:focus {
        outline: none;
    }
`;

export const QuestButton = styled.button`
    width: 243px;
    height: 44px;
    border-radius: 30px;
    line-height: 1.21;
    font-size: 19px;
    background-color: #6192f3;
    color: #ffffff;
    border: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover{
        background-color: #548af5;
    }
`;


/* 모달 스타일 */



export const ModalBox = styled.div`
    width: 100%;
    display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const ModalBackground = styled.div `
    position: fixed;
    top: 0; left: 0;
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items : center;
    z-index: 3;
`

export const Modal = styled.div`
    width: 660px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
`;

export const ModalClose = styled.div`
    float: right;
    width: 15.3px;
    height: 15.1px;
    font-size: 30px;
    margin-right: 15px;
    img{
        width: 20px;
        cursor: pointer;
    }
`;

export const ModalContant = styled.div`
    line-height: 1.2;
    letter-spacing: 2.4px;
    font-size: 28px;
    text-align: center;
    align-items : center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const NoticeAdd =styled.div`
    text-align: center;
`;