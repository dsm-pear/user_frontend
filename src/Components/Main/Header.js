import React, {useState,useEffect} from 'react';
import Pearlogo from '../../img/pearlogo.svg';
import Profile from '../../img/Profile.svg'
import * as S from '../../style/MainStyled/HeaderStyle'
import DownArrow from '../../img/DownArrow.png';
import UpArrow from '../../img/UpArrow.png';
import Seachimage from '../../img/Seachimage.png';

const Header = () => {
    const [ seachtype, setSeachtype ] = useState("제목");
    const [ show, setShow ] = useState(false)
    const [ report, setReport ] = useState(false)
    const [ profile, setProfile ] = useState(false)
    const [ img, setImg ] = useState(DownArrow)

    const onlist = () => {
        if(show === false){
            setShow(true);
            setImg(UpArrow);
        }
        else{
            setShow(false);
            setImg(DownArrow);
        }
        
    }

    const onChoice = (e) => {
        if(e === 1){
            setSeachtype("제목");
        }
        else if( e === 2 ){
            setSeachtype("언어");
        }
        else if( e === 3 ){
            setSeachtype("프로필");
        }
    }

    const onReport = (e) => {
        if(e){
            setReport(true);
        }
        else{
            setReport(false);
        }
    }

    const onProfile = (e) => {
        if(e){
            setProfile(true);
        }
        else{
            setProfile(false);
        }
    }

    return (
        <>
            <S.HeaderBox>
                <S.HeaderSubBox>
                    {/* 로고 */}
                    <S.Mainlogo>
                        <img src={Pearlogo} alt="Pearlogo"/>
                    </S.Mainlogo>

                    {/* 검색창 */}
                    <S.SeachBar>
                        <S.SeachBarSelect onClick={onlist}>
                            <S.SeachChoice><img src={img} />{seachtype}</S.SeachChoice>
                            { 
                            show ? 
                            <S.SeachList>
                                <S.SeachType onClick={() => onChoice(1)}>제목</S.SeachType>
                                <S.SeachType onClick={() => onChoice(2)}>언어</S.SeachType>
                                <S.SeachType onClick={() => onChoice(3)}>프로필</S.SeachType>
                            </S.SeachList>
                            :null
                            }
                        </S.SeachBarSelect>

                        <S.SeachBarInput placeholder="검색창"/>

                        <S.SeachBarButton><img src={Seachimage}/></S.SeachBarButton>
                    </S.SeachBar>

                    {/* 메뉴 */}
                    <S.MenuBar>
                        <S.MenuUl>
                            <S.MenuList>공지사항</S.MenuList>
                            <S.MenuList>보고서 작성</S.MenuList>
                            <S.MenuList onMouseEnter={() => onReport(true)} onMouseLeave={()=>onReport(false)}>
                                보고서 보기
                                {
                                    report ?
                                    <S.MenuSee>
                                        <S.ReportSee>1학년</S.ReportSee>
                                        <S.ReportSee>2학년</S.ReportSee>
                                        <S.ReportSee>3학년</S.ReportSee>
                                        <S.ReportSee>공통</S.ReportSee>
                                    </S.MenuSee>
                                : null
                                }
                                </S.MenuList>

                            {     /*토큰 여부에 따라 출력*/
                            <S.MenuList onMouseEnter={() => onProfile(true)} onMouseLeave={()=>onProfile(false)}>
                                <S.Profile>프로필</S.Profile>
                                {
                                    profile ?
                                    <S.Mypage>
                                        <S.Mypro>MYPAGE</S.Mypro>
                                        <S.Mypro>로그아웃</S.Mypro>
                                    </S.Mypage>
                                    :null
                                }
                                <S.Profile><img src={Profile} alt="Profile"/></S.Profile>
                                
                                
                            </S.MenuList>
                            }
                        </S.MenuUl>
                    </S.MenuBar>
                </S.HeaderSubBox>
            </S.HeaderBox>
        </>
    )
}

export default Header;
