import styled from "styled-components";

export const Main = styled.div`
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

export const ModalMain = styled.div`
    z-index: 5;
    width: 350px;
    height: 450px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    background-color: #ffffff;
`;

export const ModalSort = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
`;

export const CloseBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span > img {
        width: 13px;
    }
    span > img:hover {
        cursor: pointer;
    }
`;

export const ClickMember = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 1rem 0;
    height: 72%;
    max-height: 72%;
    padding: 1rem 0;
`;