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
    transition: all .8s;
    height: ${({height})=>height};
    opacity: ${({ opas }) => opas};
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden; 
    width: 350px;
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

export const SearchInput = styled.div`
    border: 2px solid #e4eef2;
    border-radius: 20px;
    background-color: #ffffff;
    margin: .5rem 1rem;
`;

export const SearchResult = styled.div`
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

export const TeamState = styled.div`
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    display: flex;
    justify-content: flex-end;
    margin: 1rem 1rem;
    padding: 0 .2rem;

    &:hover {
        cursor: pointer;
    }
`;