import styled from "styled-components";

const SelctFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListTable = styled.div`
    font-family: BBTreeGL;
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 12px;
    color: #000000;
    cursor: pointer;
    padding: .2rem 4px;
    margin: .3rem .3rem;   

    &:hover {
        transition: .2s;
        color: #5955d8;
    } 
`;

const InList = styled.div`
    font-family: BBTreeGL;
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    cursor: pointer;
    margin: 0 0 5px 12px;

    &:hover {
        transition: .2s;
        color: #5955d8;
    } 
`;

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
        width: 6rem;
        border: 1px solid #6192f3;
        border-radius: 18px;
        outline: none;
        background: #6192f3;
        padding: .3rem 1rem;
        color: white;
        font-family: BBTreeGL;
        
        font-size: 13px;
    }
    button:hover {
            cursor: pointer;
    }
`;

const TeamName = styled.div`
    width: 13rem;
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
        font-family: BBTreeGL;
    }
`;

const TeamMember = styled.div`
    width: 13rem;
    background: #F8F8F8;
    outline: none;
    border: 1px solid #F8F8F8;
    border-radius: 21px;
    padding: 0.3rem 1rem;

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    span > input {
        background: #F8F8F8;
        outline: none;
        border: 1px solid #F8F8F8;
        text-align: left;
        font-size: 13px;
        font-family: BBTreeGL;
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
            width: 5.5rem;
            border: 1px solid #6192f3;
            border-radius: 18px;
            outline: none;
            background: #6192f3;
            padding: .3rem 1rem;
            color: white;
            font-family: BBTreeGL;
            
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
            width: 5.5rem;
            border: 1px solid #6192f3;
            border-radius: 18px;
            outline: none;
            background: #6192f3;
            padding: .3rem 1rem;
            color: white;
            font-family: BBTreeGL;
            
            font-size: 13px;
        }
        form > button:hover {
            cursor: pointer;
        }
`;

export {
    SelctFlexBox,
    ListTable,
    InList,
    TeamLeftBox,
    TeamRightBox,
    TeamName,
    TeamMember,
    SaveBtn,
    SubBtn
}