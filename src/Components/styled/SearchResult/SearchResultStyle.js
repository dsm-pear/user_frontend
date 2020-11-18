import styled from 'styled-components';
import main from '../../../assets/MainBackground.png'


export const Background = styled.div`
    background-image: url(${main});
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
`;

export const ResultBox = styled.div`
    width: 1483px;
    height: 720px;
    box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #e4eef2;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 60px;
`;

export const ResultSubBox = styled.div`
    width: 990px;
    height: 520px;
    margin: auto;
    margin-top: 50px;
`;

export const ResultChoice = styled.div`
    float: right;
    margin-bottom: 20px;
`;

export const Resultarr = styled.div`
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

export const ResultRange = styled.div`
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

export const ResultC = styled.div`
    color: #000000;
    padding: 10px 13px 0 13px;
    cursor: pointer;
    &:hover{
        color: #5955d8;
    }
`;

export const ResultContant = styled.div`
    width: 984px;
    height: 530px;
    overflow-y: auto;

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
    background-color: #ffffff;
    border: solid 1.6px ${(props) => props.bordercolor};
    align-items: center;
    display: flex;
    cursor: pointer;
    &:hover{
        background-color: #e4eef2;
    }
`;

export const ContainerContant = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerBDC = styled.div`
    width: 80px;
    padding-left: 30px;
    line-height: 1.21;
    letter-spacing: 1.4px;
    font-size: 14px;
    color: ${(props) => props.fontcolor};
    align-items: center;
    text-align: center;
`;

export const ContainerTitle = styled.div`
    width: 670px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    padding-left: 40px;
    align-items: center;
`;

export const ContainerDay = styled.div`
    width: 110px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    align-items: center;
`;

export const ResultAdd = styled.div`
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 1.8px;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
`;

export const ResultAddImg = styled.div`
    width: 10px;
    margin: 0 auto;
    cursor: pointer;
    img{
        width: 10px;
    }
`;

export const ResultProfile = styled.div`
    padding-left: 30px;
    width: 80px;
    img{
        width: 30px;
        padding-top: 3px;
    }
`;

export const ResultName = styled.div`
    color: #000000;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
`;

export const ResultEmail = styled.div`
    color: #000000;
    margin-left: 50px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    width: 600px;
`;

export const ResultGithub = styled.div`
    margin-right: 50px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    a{
        text-decoration: none;
        color: #000000;
    }
    a:hover{
        color: #6192f3;
    }
`;