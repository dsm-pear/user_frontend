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
    width: 100%;
    height: 80%;
    margin: 3rem 16rem 1rem;
`;

const InlineBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 3rem 0;
`;

const ReportHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    span {
        width:30%;
    }
    img {
        width: 55%;
    }
`;

const SelectBoxs = styled.div`
    width: 100%;
    margin-top: 2.5rem;

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

const Select = styled.div`
    width: 10%;
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
        width: 11%;
    } 
    &:hover {
        cursor: pointer;
    }
`;
export {
    Main,
    BorderBox,
    InlineBox,
    ReportHeader,
    SelectBoxs,
    Select,

}