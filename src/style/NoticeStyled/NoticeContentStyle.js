import styled from 'styled-components';
import background from '../../assets/MainBackground.png';

export const Background = styled.div`
    background-image: url(${background});
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
`;

export const NoticeContant = styled.div`
    width: 1483px;
    height: 720px;
    box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #e4eef2;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 60px;
`;

export const NoticeHeader = styled.div`
    height: 70px;
    display: flex;
    border-bottom: solid 1px #e4eef2;
    align-items: center;
`;

export const NoLeave = styled.div`
    margin-left: 30px;
    img{
        width: 21px;
    }
`

export const NoTitle = styled.div`
    margin-left: 195px;
    font-size: 21px;
    line-height: 1.19;
    letter-spacing: 2.1px;
`

export const NoDay = styled.div`
    margin-left: 25px;
    font-size: 13px;
    line-height: 1.23;
    letter-spacing: 1.3px;
`

export const NoticeContain = styled.div`
    width: 990px;
    height: 480px;
    margin: auto;
    margin-top: 50px;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: 1.8px;
    overflow: auto;
    padding-right: 20px;
`;

export const NoticeFile = styled.div`
    width:990px;
    height: 45px;
    margin: auto;
    margin-top: 40px;
    align-items: center;
    border: solid 1px #e4eef2;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 1.6px;
    div{
        padding-top: 13px;
    }
`;