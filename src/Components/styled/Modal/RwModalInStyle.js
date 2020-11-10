import styled from "styled-components";

const BorderInput = styled.div`
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
        font-family: BBTreeGR;
    }
    span > img {
        width: 14px;
    }
`;

export {
    BorderInput,

}