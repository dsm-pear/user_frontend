import styled from "styled-components";

export const BorderInput = styled.div`
    width: 100%;

    form > span {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    span > input {
        width: 90%;    
        border: none;
        border-radius: 20px;
        background-color: #ffffff;
        outline: none;
        padding: .5rem 1rem;
        font-size: 15px;
        font-family: BBTreeGL;
    }
    span > img {
        width: 14px;
    }
`;

export const BorderResult = styled.div`
    width: 90%;
    height: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 .4rem .8rem;
    border: 1px solid #ffffff;
    border-radius: 7px;
    background-color: #ffffff;

    div {
        font-size: 13px;
        font-family: BBTreeGL;
    }
`;

export const BolderCheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        margin-right: .7rem;
    }
    img {
        margin-left: .7rem;
        width: 12px;
    }
    div {
        display: flex;
        align-items: center;
    }
    
    &:hover {
        cursor: pointer;
    }
`;

export const BorderState = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: BBTreeGL;
    font-weight: 600;
        img {
            margin-left: 1rem;
        }
`;