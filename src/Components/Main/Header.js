import React, {useState} from 'react';
import Pearlogo from '../../assets/PEARlogo.svg';
import Profile from '../../assets/StudentProfile.svg'
import * as S from '../styled/MainStyled/HeaderStyle'
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';
import SearchImg from '../../assets/searchImg.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const [ searchtype, setSearchtype ] = useState("제목");
    const [ color, setColor ] = useState("#000000");
    const [ show, setShow ] = useState(false);
    const [ report, setReport ] = useState(false);
    const [ profile, setProfile ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);
    const [ value, setValue ] = useState("report");
    const [ keyword, setKeyword ] = useState("");

    const onlist = () => {
        if(!show){
            setShow(true);
            setImg(UpArrow);
            setColor("#5955d8");
        }
        else{
            setShow(false);
            setImg(DownArrow);
            setColor("#000000");
        }
    }

    const onTitleSeach = () => {
        setSearchtype("보고서");
        setValue("report");
    }

    const onProfileSeach = () => {
        setSearchtype("프로필");
        setValue("profile");
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

    const onSearch = (e) => {
        setKeyword(e.target.value);
    }

    
    return (
        <>
            <S.HeaderBox>
                <S.HeaderSubBox>
                    {/* 로고 */}
                    <S.Mainlogo>
                        <Link to={'/'}>
                            <img src={Pearlogo} alt="Pearlogo"/>
                        </Link>
                    </S.Mainlogo>

                    {/* 검색창 */}
                    <S.SeachBar>
                        <form>
                            <S.SeachBarSelect onClick={onlist}>
                                <S.SeachChoice style={{color: color}}><img src={img} alt="검색"/>{searchtype}</S.SeachChoice>
                                { 
                                show &&
                                <S.SeachList>
                                    <S.SeachType onClick={onTitleSeach}>제목</S.SeachType>
                                    <S.SeachType onClick={onProfileSeach}>프로필</S.SeachType>
                                </S.SeachList>
                                }
                            </S.SeachBarSelect>

                            <S.SeachBarInput name="search" placeholder="검색창" onChange={onSearch}/>

                            <Link to={`/search-result?mode=${value}&keyword=${keyword}&page=1`}><S.SeachBarButton><img src={SearchImg} alt="검색"/></S.SeachBarButton></Link>
                        </form>
                    </S.SeachBar>

                    {/* 메뉴 */}
                    <S.MenuBar>
                        <S.MenuUl>
                            <S.MenuList><Link to={'/notice?page=1'}>공지사항</Link></S.MenuList>

                            <S.MenuList><Link to={'/report-writing'}>보고서 등록</Link></S.MenuList>
                            <S.MenuList onMouseEnter={onReportUp} onMouseLeave={onReportDown}>
                                <Link to={'/view-report'}>보고서 보기</Link>
                                {
                                    report &&
                                    <S.MenuSee>
                                        <Link to={`/view-report/report/filter?size=6&page=1&type=&field=&grade=1`}><S.ReportSee>1학년</S.ReportSee></Link>
                                        <Link to={`/view-report/report/filter?size=6&page=1&type=&field=&grade=2`}><S.ReportSee>2학년</S.ReportSee></Link>
                                        <Link to={`/view-report/report/filter?size=6&page=1&type=&field=&grade=3`}><S.ReportSee>3학년</S.ReportSee></Link>
                                    </S.MenuSee>
                                }
                            </S.MenuList>

                            {     /*토큰 여부에 따라 출력*/
                            //token ??
                            <S.MenuList onMouseEnter={onProfileUp} onMouseLeave={onProfileDown}>
                                <S.Profile>프로필</S.Profile>
                                {
                                    profile &&
                                    <S.Mypage>
                                        <S.Mypro><Link to={"/my-profile"}>MYPAGE</Link></S.Mypro>
                                        <S.Mypro>로그아웃</S.Mypro>
                                    </S.Mypage>
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