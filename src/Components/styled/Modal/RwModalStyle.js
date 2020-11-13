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
    width: 350px;
    height: 450px;
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
        width: 13px;
    }
    span > img:hover {
        cursor: pointer;
    }
`;

const SearchInput = styled.div`
    border: 2px solid #e4eef2;
    border-radius: 20px;
    background-color: #ffffff;
    margin: .5rem 1rem;
`;

const SearchResult = styled.div`
    height: 72%;
    max-height: 72%;
    margin: 1.5rem 1rem 0;
    padding: .8rem 0;
    border: 1px solid #e4eef2;
    border-radius: 7px;
    background-color: #e4eef2;
    overflow-y: scroll;

    &::-webkit-scrollbar { 
        width: 20px; 
        /* 스크롤바의 width */
    }

    &::-webkit-scrollbar-thumb { 
        background: #5955d8;
        border-radius: 10px;
        background-clip: padding-box;
        border: 7.5px solid transparent;
        /* 스크롤바 색 */
    }

    &::-webkit-scrollbar-track {
        background-color: #e4eef2; 
        margin: .4rem;
        border-radius: 10px;
        /* 스크롤바의 전체 */
    }
`;

const TeamState = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem 1rem;
    padding: 0 .2rem;

    &:hover {
        cursor: pointer;
    }
`;


export {
    Main,
    ModalMain,
    ModalSort,
    CloseBtn,
    SearchInput,
    SearchResult,
    TeamState,
}