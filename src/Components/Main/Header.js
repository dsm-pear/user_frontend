import React, {useState} from 'react';
import Pearlogo from '../../assets/PEARlogo.svg';
import Profile from '../../assets/StudentProfile.svg'
import * as S from '../../style/MainStyled/HeaderStyle'
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';
import SearchImg from '../../assets/searchImg.png';

const Header = () => {
    const [ searchtype, setSearchtype ] = useState("제목");
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

    const onTitleSeach = () => {
        setSearchtype("제목");
    }

    const onLanguageSeach = () => {
        setSearchtype("언어");
    }

    const onProfileSeach = () => {
        setSearchtype("프로필");
    }

    const onReportUp = () => {
        setReport(true);
    }
    const onReportDown = () => {
        setReport(false);
    }

    const onProfileUp = () => {
        setProfile(true);
    }
    const onProfileDown = () => {
        setProfile(false);
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
                            <S.SeachChoice><img src={img} alt="검색"/>{searchtype}</S.SeachChoice>
                            { 
                            show ? 
                            <S.SeachList>
                                <S.SeachType onClick={()=>onTitleSeach()}>제목</S.SeachType>
                                <S.SeachType onClick={()=>onLanguageSeach()}>언어</S.SeachType>
                                <S.SeachType onClick={()=>onProfileSeach()}>프로필</S.SeachType>
                            </S.SeachList>
                            :null
                            }
                        </S.SeachBarSelect>

                        <S.SeachBarInput placeholder="검색창"/>

                        <S.SeachBarButton><img src={SearchImg} alt="검색"/></S.SeachBarButton>
                    </S.SeachBar>

                    {/* 메뉴 */}
                    <S.MenuBar>
                        <S.MenuUl>
                            <S.MenuList>공지사항</S.MenuList>
                            <S.MenuList>보고서 작성</S.MenuList>
                            <S.MenuList onMouseEnter={()=>onReportUp()} onMouseLeave={()=>onReportDown()}>
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
                            <S.MenuList onMouseEnter={()=>onProfileUp()} onMouseLeave={()=>onProfileDown()}>
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