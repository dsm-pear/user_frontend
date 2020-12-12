import styled from 'styled-components';
import main from '../../../assets/MainBackground.png'

export const Background = styled.div`
    background-image: url(${main});
    background-size: 100% 100%;
    height: 100vh;
    background-repeat: no-repeat;
    font-family: "Noto Sans KR", sans-serif;
    min-width: 1320px;
    min-height: 950px;
    a{
        text-decoration: none;
        color: #000000;
    }
`;

export const ResultBox = styled.div`
    width: 77%;
    height: 73%;
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
    margin-top: 40px;
`;

export const ResultChoice = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
`;

export const ResultKeyword = styled.div`
    width: 50%;
    font-size: 19px;
    span{
        font-size: 30px;
    }
`

export const ResultPage = styled.div`
    width: 50%;
    margin-right: 12px;
    font-size: 21px;
    text-align: right;
    
`;

export const ResultContant = styled.div`
    width: 984px;
    height: 530px;
    overflow-y: hidden;

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
    width: 99.4%;
    margin-bottom: 20px;
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
    text-align: right;
`;

export const ResultAdd = styled.div`
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 1.8px;
    text-align: center;
    margin-top: 30px;
    justify-content: space-between;
`;

export const ResultAddNumber = styled.div`
    width: 300px;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    align-items: center;
    a{
        padding: 0 10px;
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: #6192f3;
    }
    img{
        padding: 0 10px;
        width: 15px;
        height: 15px;
    }
`;