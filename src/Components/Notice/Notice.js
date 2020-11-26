import React, { useState } from 'react';
import NoticeContainer from './NoticeContainer';
import {Link} from 'react-router-dom';
import Header  from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import {LeftArrow, RightArrow} from '../../assets/ArrowImg/index';
import queryString from 'query-string';

const Notice = ({location}) => {

    const query = queryString.parse(location.search);

    /* api 연동되면 수정할 것들 */

    const [ pageValue, setPageValue ] = useState(1);
    const [ page, setPage ] = useState(5);
    const [ a, seta ] = useState(1);
    let page_arr = [];
    const limitdata = 7;
    const p = 12;

    for(let i = a; i <= page; i++) {
        page_arr[i]=i;
    }

    const processed = (querys) => page_arr.map((num)=>{
        if(Number(querys.page) !== num){
            return <Link onClick={()=>setPageValue(num)} to={`/notice?page=${page_arr[num]}`} key={num}> {page_arr[num]} </Link>
        }
        else {
            return <Link onClick={()=>setPageValue(num)} to={`/notice?page=${page_arr[num]}`} style={{color: "#6192f3"}} key={num}> {page_arr[num]} </Link>
        }
    });
    
    const prev = () => {
        if(a!==1){
            if(page%5 !== 0){
                setPage(page-page%5)
                seta(a-a%5-4)
            }else{
                setPage(page-5)
                seta(a-5)
            }
            
        }
        
    }

    const next = () => {
        if(page < p){
            if(p < page + 5){
                setPage(p)
                seta(a+5);
            }
            else {
                setPage(page+5);
                seta(a+5);
            }
        }
        
    }

    return(
        <>
            <S.Background>
            <Header/>
            
                <S.NoticeBox>
                    <S.NoticeSubBox>

                        <S.NoticeChoice>
                            총 {p}페이지 중 {query.page} 페이지 입니다
                        </S.NoticeChoice>

                        <S.NoticeContant>

                            <NoticeContainer limit={limitdata} page={pageValue}/>

                        </S.NoticeContant>

                        <S.NoticeAdd>
                            <S.NoticeAddNumber>

                                <img src={LeftArrow} alt="사진" onClick={prev}/>
                                {
                                    processed(query)
                                }
                                <img src={RightArrow} alt="사진" onClick={next}/>

                            </S.NoticeAddNumber>
                        </S.NoticeAdd>
                        
                    </S.NoticeSubBox>
                </S.NoticeBox>
            </S.Background>
        </>
    )
}

export default Notice;