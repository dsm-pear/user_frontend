import React, { useState } from 'react';
import NoticeContainer from './NoticeContainer';
import {Link} from 'react-router-dom';
import Header  from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';
import queryString from 'query-string';

const Notice = ({location}) => {
    const [ range, setRange ] = useState("정렬");
    const [ show, setShow ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);
    const [ sort, setSort] = useState("#000000");

    const query = queryString.parse(location.search);
    const [ pageValue, setPageValue ] = useState(1);
    let page_arr = [];
    const page=5;
    const limitdata = 7;

    const onChoice = () => {
        if(show){
            setShow(false);
            setImg(DownArrow);
        }
        else{
            setShow(true);
            setImg(UpArrow);
        }
    }

    const onNew = () => {
        setRange("최신순");
        
    }

    const onOld = () => {
        setRange("오래된순");
    }

    for(let i = 1; i <= page; i++) {
        page_arr[i]=i;
    }

    const onSetPage = (e) => {
        setPageValue(e)
    }

    const processed = () => page_arr.map((num)=>{
        console.log(num);
        if(query.page === num){
            console.log(query.page)
            return <Link onClick={()=>onSetPage(num)} to={`/notice?page=${page_arr[num]}`} color={sort} key={num}> {page_arr[num]} </Link>
        }
        else {
            return <Link onClick={()=>onSetPage(num)} to={`/notice?page=${page_arr[num]}`} color={sort} key={num}> {page_arr[num]} </Link>
        }
    });
    
    return(
        <>
        <S.Background>
        <Header/>
        
            <S.NoticeBox>
                <S.NoticeSubBox>

                    <S.NoticeChoice onClick={onChoice}>
                        <S.Noticearr>{range}<img src={img} alt="사진"/></S.Noticearr>
                        {
                            show &&
                            <S.NoticeRange>
                                <S.NoticeC onClick={onNew}>최신순</S.NoticeC>
                                <S.NoticeC onClick={onOld}>오래된순</S.NoticeC>
                            </S.NoticeRange>
                        }
                    </S.NoticeChoice>

                    <S.NoticeContant>

                        <NoticeContainer limit={limitdata} page={pageValue} sort={sort}/>

                    </S.NoticeContant>

                    <S.NoticeAdd>
                        <S.NoticeAddNumber>

                            {
                                processed()
                            }

                        </S.NoticeAddNumber>
                    </S.NoticeAdd>
                    
                </S.NoticeSubBox>
            </S.NoticeBox>
        </S.Background>
        </>
    )
}

export default Notice;