import React from 'react';
import Header from './Header';
import Body from './Body';
import Question from './Questions';
import Footer from './Footer';
import * as S from '../styled/MainStyled/MainStyle';

const Main = () => {
    return (
        <S.MainBox>
            <Header/>
            <Question/>
            <Footer/>
        </S.MainBox>
    )
}

export default Main;