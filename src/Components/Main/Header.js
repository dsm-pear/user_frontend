import React, {useState} from 'react';
import Pearlogo from '../../assets/PEARlogo.svg';
import Profile from '../../assets/StudentProfile.svg'
import * as S from '../styled/MainStyled/HeaderStyle'
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';
import SearchImg from '../../assets/searchImg.png';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const [ searchtype, setSearchtype ] = useState("보고서");
    const [ color, setColor ] = useState("#000000");
    const [ show, setShow ] = useState(false);
    const [ report, setReport ] = useState(false);
    const [ profile, setProfile ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);
    const [ value, setValue ] = useState("report");
    const [ keyword, setKeyword ] = useState("");

    const history = useHistory();

    const isAccessToken = localStorage.getItem('access-token');
    const isRefrechToken = localStorage.getItem('refresh-token');

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
    const onSubmit = (e) => {
        e.preventDefault();
        //props.history.replace(`/search-result?mode=${value}&keyword=${keyword}&page=1`);
        window.location.href=`/search-result?mode=${value}&keyword=${keyword}&page=1`
    }

    const onNotice = () => {
        history.push('/notice?page=1')
    }

    const onWrite = () => {
        history.push('/report-writing')
    }

    const onGrade = (number) => {
        history.push({
            pathname: `/view-report`,
            state: { grade: `GRADE${number}` }
        });
    }

    const LogOut = () => {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("refresh-exp");
        history.push('/');
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
                        <form onSubmit={onSubmit}>
                            <S.SeachBarSelect onClick={onlist}>
                                <S.SeachChoice style={{color: color}}><img src={img} alt="검색"/>{searchtype}</S.SeachChoice>
                                { 
                                show &&
                                <S.SeachList>
                                    <S.SeachType onClick={onTitleSeach}>보고서</S.SeachType>
                                    <S.SeachType onClick={onProfileSeach}>프로필</S.SeachType>
                                </S.SeachList>
                                }
                            </S.SeachBarSelect>

                            <S.SeachBarInput name="search" placeholder="검색창" onChange={onSearch}/>

                            <S.SeachBarButton><img src={SearchImg} alt="검색"/></S.SeachBarButton>
                        </form>
                    </S.SeachBar>

                    {/* 메뉴 */}
                    <S.MenuBar>
                        <S.MenuUl>
                            <S.MenuList onClick={onNotice}>공지사항</S.MenuList>

                            <S.MenuList onClick={onWrite}>보고서 등록</S.MenuList>
                            <S.MenuList onMouseEnter={onReportUp} onMouseLeave={onReportDown}>
                                보고서 보기
                                {
                                    report &&
                                    <S.MenuSee>
                                        <S.ReportSee onClick={()=>onGrade("1")}>1학년</S.ReportSee>
                                        <S.ReportSee onClick={()=>onGrade("2")}>2학년</S.ReportSee>
                                        <S.ReportSee onClick={()=>onGrade("3")}>3학년</S.ReportSee>
                                    </S.MenuSee>
                                }
                            </S.MenuList>

                            {     
                            isAccessToken && isRefrechToken ? 
                            <S.MenuList onMouseEnter={onProfileUp} onMouseLeave={onProfileDown}>

                                <S.Profile>프로필</S.Profile>
                                {
                                    profile &&
                                    <S.Mypage>
                                        <S.Mypro><Link to={"/my-profile"}>MYPAGE</Link></S.Mypro>
                                        <S.Mypro onClick={LogOut}>로그아웃</S.Mypro>
                                    </S.Mypage>
                                }
                                <S.Profile><img src={Profile} alt="Profile"/></S.Profile>
                                
                            </S.MenuList>
                            : null
                            }
                        </S.MenuUl>
                    </S.MenuBar>
                </S.HeaderSubBox>
            </S.HeaderBox>
        </>
    )
}

export default Header;