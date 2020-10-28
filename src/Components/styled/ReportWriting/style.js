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
`;

const BorderBox = styled.div`
    border: 1px solid #4d4d4d;
    
`;

export {
    Main,
    BorderBox,

}