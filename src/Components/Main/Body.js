import React from 'react';
import * as S from '../styled/MainStyled/BodyStyle';
import { Login } from '../index'
import Logo from '../../assets/PEARlogo.svg';
import Nextpage from '../../assets/nextpageimg.png';

const Body = () => {

    const onclick = () => {
        window.scrollTo({top: window.innerHeight+50, behavior: "smooth"});
    }

    const isAccessToken = localStorage.getItem('access-token');
    const isRefrechToken = localStorage.getItem('refresh-token');

    return (
        <>

        <S.MainBody>
            <S.MainBox>
                <S.LogoBox>
                    <S.LogoSubBox>
                        <S.Logo><img src={Logo} alt="사진"/></S.Logo>
                        <S.LogoText>
                            <span>P</span>reserve&nbsp;<span>E</span>xperience&nbsp;<span>A</span>bout&nbsp;your&nbsp;<span>R</span>eport
                        </S.LogoText>
                    </S.LogoSubBox>
                </S.LogoBox>

                {
                    !isAccessToken && !isRefrechToken ?
                    <S.LoginBox>
                        <S.LoginSubBox>
                            <Login/>
                        </S.LoginSubBox>
                    </S.LoginBox>
                    :null
                }

            </S.MainBox>
            <S.NextBox>
                <div>
                <img src={Nextpage} alt="사진" onClick={onclick}/>
                </div>
            </S.NextBox>
        </S.MainBody>
            
        </>
    )


}

export default Body;