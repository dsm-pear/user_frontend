import React from 'react';
import * as S from '../styled/MainStyled/FooterStyle';
import dsmlogo from '../../assets/DSMLogo.svg';

const Footer = () => {

    return (
        <S.FooterBox>
            <S.FooterSubBox>
                
                    <S.Logo>
                        <img src={dsmlogo} alt="사진"/>
                    </S.Logo>

                    <S.FooterContent>
                        대덕소프트웨어마이스터고등학교 (34111)대전광역시 유성구 가정북로 76(장동 23-9)<br/>
                        교무실 ☎: 042-866-8822 교무실 행정실 ☎: 042-866-8885 기관 메일 dsmhs@korea.kr
                    </S.FooterContent>

                    <S.Develop>
                        <S.Intro>
                            <S.Title>
                                Server
                            </S.Title>
                            <S.People>
                                <div>김정빈 손채건</div>
                                <div>이승윤 정고은</div>
                                <div>홍정현</div>
                            </S.People>
                        </S.Intro>
                        <S.Intro>
                            <S.Title>
                                Frontend
                            </S.Title>
                            <S.People>
                                <div>강은빈 김혜준</div>
                                <div>전규현 한준호</div>
                            </S.People>
                        </S.Intro>
                        <S.Intro>
                            <S.Title>
                                Design
                            </S.Title>
                            <S.People>
                                <div>이은별 임서영</div>
                            </S.People>
                        </S.Intro>
                    </S.Develop>

            </S.FooterSubBox>
        </S.FooterBox>
    )
}

export default Footer;