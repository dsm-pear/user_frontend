import styled from "styled-components";

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: gray;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const ModalMain = styled.div`
    z-index: 5;
    width: 650px;
    height: 210px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    background-color: #ffffff;
`;

const ModalSort = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
`;

const CloseBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span > img {
        width: 18px;
    }
    span > img:hover {
        cursor: pointer;
    }
`;

const ModalHeader = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top: 1.5rem;
    font-family: BBTreeGB;
`;
const ModalMainText = styled.div`
    font-size: 17px;
    text-align: center;
    margin-top: 1.4rem;
    font-family: BBTreeGL;

    p {
        margin-top: .4rem;
    }
`;

export {
    Main,
    ModalMain,
    ModalSort,
    CloseBtn,
    ModalHeader,
    ModalMainText
}