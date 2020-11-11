import React from 'react';
import styled from 'styled-components';

export const HeaderBox = styled.div`
    padding-top: 40px;
    display: fixed;
    margin-left: 150px;
    margin-right: 222px;
    z-index: 10;
`;

export const HeaderSubBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Mainlogo = styled.div`
    margin-right: 208px;
    &:focus{
        border: none;
    }
`;

export const SeachBar = styled.div`
    width: 399px;
    height: 38px;
    display: flex;
    border: none;
    margin-right: 320px;
    
`;

export const SeachBarSelect = styled.div`
    font-size: 13px;
    width: 70px;
    border: none;
    border-radius: 21px 0 0 21px;
    background-color: #e4eef2;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const SeachChoice = styled.div`
    cursor: pointer;
    text-align: center;
    padding-top: 11px;
    img{
        width: 10px;
        margin-right: 3px;
        color: #000000;
    }
`;

export const SeachList = styled.div`
    cursor: pointer;
    margin-top: 20px;
    z-index: 5;
    width: 58px;
<<<<<<< Updated upstream
    height: 95px;
=======
    height: 75px;
>>>>>>> Stashed changes
    border-radius: 6px;
    background-color: #e4eef2;
    padding-top: 12px;
    padding-left: 10px;
`;

export const SeachType = styled.div`
    font-size: 13px;
    margin-bottom: 8px;
    &:hover{
        color : #5955d8;
    }
`;

export const SeachBarInput = styled.input`
    width: 269px;
    border: none;
    background-color: #e4eef2;
    &:focus {
        outline: none;
    }
`;


export const SeachBarButton = styled.button`
    width: 60px;
    border: none;
    border-radius: 0 21px 21px 0;
    background-color: #e4eef2;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    img{
        width: 20px;
    }
`;


export const MenuBar = styled.div`
    width: 550px;
`;

export const MenuUl = styled.ul`
    justify-content: space-between;
    display: flex;
`

export const MenuList = styled.li `
    list-style: none;
    align-items: center;
    display: flex;
    cursor: pointer;
    &:hover{
        color:#5955d8;
    }
    div{
    }
`;

export const MenuSee = styled.div`
    width: 85px;
    height: 138px;
    padding-top: 10px;
    border: solid 1px #e4eef2;
    background-color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 90px;
    z-index: 5;
    position: absolute;
`;

export const ReportSee = styled.div`
    font-size: 15px;
    margin-bottom: 14px;
    color: #000000;
    cursor: pointer;
    &:hover{
        font-size: 16px;
        color:#5955d8;
    }
`;
export const Profile = styled.div`
    img{
        margin-left: 20px;
        width:31px;
    }
`;

export const Mypage = styled.div`
    width: 80px;
    height: 73px;
    padding-top: 18px;
    border: solid 1px #e4eef2;
    background-color: #ffffff;
    text-align: center;
    position: absolute;
    margin-top: 65px;
    margin-left: 5px;
    z-index: 5;
`;

export const Mypro = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
    color: #000000;
    &:hover{
        font-size: 16px;
        color:#5955d8;
    }
`;