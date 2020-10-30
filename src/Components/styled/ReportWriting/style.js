import styled from "styled-components";
import { MainBackground } from "../../../assets";

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${MainBackground});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const BorderBox = styled.div`
    background-color: #ffffff;
    border: 1px solid #4d4d4d;
    width: 1500px;
    height: 600px;
    margin: 4rem 16rem 0rem;
`;

const InlineBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem 2.5rem 0;
`;

const ReportLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    span {
        width:30%;
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
    width: 4.8rem;
    border: 1px solid #4d4d4d;
    background: #ffffff;
    padding: .2rem .3rem;
    font-family: BBTreeGB;
    margin-left: 2rem;
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        font-size: 13px;
    }
    img {
        width: 8px;
    } 
    &:hover {
        cursor: pointer;
    }
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
        font-family: BBTreeGR;
        font-size: 15px;
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
        font-family: BBTreeGR;
        font-size: 13px;
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
    form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        background: #F8F8F8;
        border: 1px solid #F8F8F8;
        padding: .4rem .4rem;
    }
    img {
        width: 20px; 
    }
    input {
        width: 100%;
        border: none;
        outline: none;
        background: #F8F8F8;
        margin-left: .4rem;
        font-family: BBTreeGR;
        font-size: 14px;
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

export {
    Main,
    BorderBox,
    InlineBox,
    ReportLogo,
    SelectBoxs,
    PaddingBox,
    Select,
    ReportMain,
    ReportHeader,
    ReprotWriteBox,
    LinkBox,
    AttachFile,

}