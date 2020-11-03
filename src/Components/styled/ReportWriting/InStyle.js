import styled from "styled-components";
import { MainBackground } from "../../../assets";

const TeamLeftBox = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5rem;
`;

const TeamRightBox = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    button {
        border: 1px solid #6192f3;
        border-radius: 18px;
        outline: none;
        background: #6192f3;
        padding: .3rem 1rem;
        color: white;
        font-family: BBTreeGR;
        font-size: 13px;
    }
    button:hover {
            cursor: pointer;
    }
`;

const TeamName = styled.div`
    width: 12rem;
    background: #F8F8F8;
    outline: none;
    border: 1px solid #F8F8F8;
    border-radius: 21px;
    padding: 0.3rem 1rem;
        span > input {
            background: #F8F8F8;
            outline: none;
            border: 1px solid #F8F8F8;
            text-align: left;
            font-size: 13px;
            font-family: BBTreeGR;
    }
`;

const TeamMember = styled.div`
    width: 12rem;
    background: #F8F8F8;
    outline: none;
    border: 1px solid #F8F8F8;
    border-radius: 21px;
    padding: 0.3rem 1rem;
        span > input {
            background: #F8F8F8;
            outline: none;
            border: 1px solid #F8F8F8;
            text-align: left;
            font-size: 13px;
            font-family: BBTreeGR;
            margin-right: 8px;
        }
        span > img {
            width: 12px;
        }
`;

const SaveBtn = styled.div`
    padding-left: 2rem;   
    margin-left: 1rem;
        button {
            border: 1px solid #6192f3;
            border-radius: 18px;
            outline: none;
            background: #6192f3;
            padding: .3rem 1rem;
            color: white;
            font-family: BBTreeGR;
            font-size: 13px;
        }
        button:hover {
            cursor: pointer;
        }
`;

const SubBtn = styled.div`
    padding-left: 2rem;   
    margin-left: 1rem;
        form > button {
            border: 1px solid #6192f3;
            border-radius: 18px;
            outline: none;
            background: #6192f3;
            padding: .3rem 1rem;
            color: white;
            font-family: BBTreeGR;
            font-size: 13px;
        }
        form > button:hover {
            cursor: pointer;
        }
`;

export {
    TeamLeftBox,
    TeamRightBox,
    TeamName,
    TeamMember,
    SaveBtn,
    SubBtn
}