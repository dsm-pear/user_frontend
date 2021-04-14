import styled from "styled-components";

export const Main = styled.div`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    visibility: ${({visibility})=>visibility};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const ModalMain = styled.div`
    transition: all .6s;
    opacity: ${({opacity}) => opacity};
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    height: 210px;
    width: 650px;
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
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    span > img {
        width: 18px;
    }
    span > img:hover {
        cursor: pointer;
    }
`;

export const ModalHeader = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top: 1.5rem;
    font-family: BBTreeGB;
`;
export const ModalMainText = styled.div`
    font-size: 17px;
    text-align: center;
    margin-top: 1.4rem;
    font-family: BBTreeGL;

    p {
        margin-top: .4rem;
    }
`;