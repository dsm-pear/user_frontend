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
`;

const TeamName = styled.div`
    
`;
const TeamMember = styled.div`

`;

const SaveBtn = styled.div`
    padding: 0 2rem;
`;
const SubBtn = styled.div`
    padding: 0 2rem;
`;

export {
    TeamLeftBox,
    TeamRightBox,
    TeamName,
    TeamMember,
    SaveBtn,
    SubBtn
}