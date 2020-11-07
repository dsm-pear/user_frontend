import styled from 'styled-components';
import main from '../../../assets/MainBackground.png'


export const Background = styled.div`
    background-image: url(${main});
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
`;

export const NoticeBox = styled.div`
    width: 1483px;
    height: 720px;
    box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #e4eef2;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 60px;
`;

export const NoticeSubBox = styled.div`
    width: 990px;
    height: 520px;
    margin: auto;
    margin-top: 50px;
`;

export const NoticeChoice = styled.div`
    float: right;
    margin-bottom: 20px;
`;

export const Noticearr = styled.div`
    font-size: 13px;
    line-height: 1.17;
    letter-spacing: 1.2px;
    width: 79px;
    height: 15px;
    padding: 6px 10px;
    margin-right: 27px;
    border: solid 1px #4d4d4d;
    background-color: #ffffff;
    cursor: pointer;
    img{
        width: 10px;
        float: right;
        margin-top: 3px;
    }
`;

export const NoticeRange = styled.div`
    width: 99px;
    height: 60px;
    font-size: 13px;
    line-height: 1.23;
    z-index: 2;
    position: absolute;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #4d4d4d;
    border-top: none;
    background-color: white;
`;

export const NoticeC = styled.div`
    color: #000000;
    padding: 10px 13px 0 13px;
    cursor: pointer;
    &:hover{
        color: #5955d8;
    }
`;

export const NoticeContant = styled.div`
    width: 984px;
    height: 530px;
    overflow-y: scroll;

    &::-webkit-scrollbar { 
        width: 10px; 
        /* 스크롤바의 width */
    }
    &::-webkit-scrollbar-track {
        background-color: #f0f0f0; 
        /* 스크롤바의 전체 */
    }
    &::-webkit-scrollbar-thumb { 
        background: linear-gradient(135deg,#81bcff,#56D4E2);
        border-radius: 10px;
        /* 스크롤바 색 */
    }
`;

export const Container = styled.div`
    margin-bottom: 20px;
    width: 960px;
    height: 55px;
    border-radius: 6px;
    border: solid 1.6px #6192f3;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    cursor: pointer;
    &:hover{
        background-color: #e4eef2;
    }
`;

export const ContainerContant = styled.div`
display: flex;
`;

export const ContainerTitle = styled.div`
    width: 780px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    padding-left: 50px;
`;

export const ContainerDay = styled.div`
    width: 110px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
`;

export const NoticeAdd = styled.div`
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 1.8px;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
`;

export const NoticeAddImg = styled.div`
    width: 10px;
    margin: 0 auto;
    cursor: pointer;
    img{
        width: 10px;
    }
`;