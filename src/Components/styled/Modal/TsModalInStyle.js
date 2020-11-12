import styled from "styled-components";

const MemberBox = styled.div`
    width: 90%;
    height: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    border: 2px solid #5955d8;
    border-radius: 7px;
    background-color: #e1efff;

    div {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-family: BBTreeGL;
    }

    div > span {
        margin-right: .6rem;
    }

    div > input {
        margin-left: .6rem;
    }
`;

export {
    MemberBox
}