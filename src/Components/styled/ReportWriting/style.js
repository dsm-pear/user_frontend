import styled, { } from "styled-components";
import { MainBackground } from "../../../assets";

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    min-width: 1045px;
    min-height: 650px;
    background-image: url(${MainBackground});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    overflow-y: scroll;

    &::-webkit-scrollbar { 
        width: 10px;
        /* 스크롤바의 width */
    }

    &::-webkit-scrollbar-thumb { 
        background: linear-gradient(135deg,#81bcff,#56D4E2);
        border-radius: 10px;
        /* 스크롤바 색 */
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const BorderBox = styled.div`
    background-color: #ffffff;
    border: 1px solid #4d4d4d;
    width: 68%;
    min-width: 950px;
    max-width: 68%;
    height: 730px;
    min-height: 730px;
    max-height: 100%;
    margin: 15rem 0 3rem;
    padding: 1.5rem 2.5rem 0;
`;

const InlineBox = styled.div`
    width: 100%;
    height: 100%;
`;

const ReportLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    span {
        width:30%;
        padding: 0 .6rem;
    }
    img {
        width: 10rem;
    }
`;

const SelectBoxs = styled.div`
    width: 100%;
    margin-top: 1.5rem;
`;

const PaddingBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1.5rem;
`;

const Select = styled.div`
    position: relative;
    width: 90px;
    border: 1px solid #4d4d4d;
    background: #ffffff;
    padding: .2rem .3rem;
    font-family: BBTreeGL;
    margin-left: 1.5rem;

    span {
        font-size: 13px;
    }
    img {
        width: 8px;
    } 
    &:hover {
        cursor: pointer;
    }
    &:hover > div ~ div {
        visibility: visible;
        height: ${({ height }) => height ? height: '74'}px;
   }
    & > div ~ div {
        visibility: hidden;
        height: 0px;
    }
`;

const ViewList = styled.div`
    position: absolute;
    min-width: 90px;
    transition: all 0.3s;
    background-color: #ffffff;
    border: 1px solid #4d4d4d;
    border-top: none;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    text-align: left;
    cursor: pointer;
    z-index: 5;
    margin: 4.5px 10px 0 0;
    left: -1px;
    overflow: hidden;
`;

const ReportMain = styled.div`
    margin-top: .8rem;
`;

const ReportHeader = styled.div`
    width: 100%;
    height: 100%;

    input {
        width: 100%;
        background: #F8F8F8;
        border: 1px solid #F8F8F8;
        outline: none;
        padding: .8rem .8rem;
        font-family: BBTreeGL;
        font-weight: normal;
        font-size: 14px;
        text-align: left;
    }
`;

const ReprotWriteBox = styled.div`
    width: 100%;
    margin-top: .8rem;

    textarea {
        resize: none;
        width: 100%;
        background: #F8F8F8;
        border: 1px solid #F8F8F8;
        outline: none;
        padding: .8rem .8rem;
        font-family: BBTreeGL;
        font-size: 14px;
        text-align: left;
    }
`;

const LinkBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: .8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        width: 100%;
        height: 100%;
    }
    span > form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        background: #F8F8F8;
        border: 1px solid #F8F8F8;
        padding: .4rem .4rem;
    }
    form > img {
        width: 20px; 
    }
    form > input {
        width: 100%;
        border: none;
        outline: none;
        background: #F8F8F8;
        margin-left: .4rem;
        font-family: BBTreeGL;
        font-size: 13px;
        
    }
`;

const AttachFile = styled.div`
    width: 100%;
    height: 100%;
    margin-top: .8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        display: flex;
        width: 100%;
        border: none;
        outline: none;
        padding: .4rem .4rem;
        background: #F8F8F8;
        
        img {
            width: 20px;
        }
    }
`;

const SubmitBox = styled.div`
    width:100%;
    display: flex;
    margin: .8rem 0 3rem;
`;
    

const MakeTeam = styled.div`
    width: 70%;
    height: 145px;
    border: 1px solid;

    form {
        width:100%;
        height: 100%;
        display: flex;
    }
`;

const SaveSubBtn = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export {
    Main,
    BorderBox,
    InlineBox,
    ReportLogo,
    SelectBoxs,
    PaddingBox,
    Select,
    ViewList,
    ReportMain,
    ReportHeader,
    ReprotWriteBox,
    LinkBox,
    AttachFile,
    SubmitBox,
    MakeTeam,
    SaveSubBtn
}