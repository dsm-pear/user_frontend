import React from 'react';
import styled from 'styled-components';
import main from '../../../assets/Main.png';

export const MainBox = styled.div`
    background-image: url(${main});
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    min-width: 1520px;
`;