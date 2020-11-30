import React, {useState} from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import SearchResultTitle from './SearchResultTitle';
import SearchResultProfile from './SearchResultProfile';
import SearchResultLanguage from './SearchResultLanguage';
import Header from '../Main/Header';
import {LeftArrow, RightArrow} from '../../assets/ArrowImg/index';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const SearchResult = ({location}) => {
    const query = queryString.parse(location.search);

    const mode = () => {
        return (

            query.mode === "profile" ? 
            <SearchResultProfile limit={limitdata} pageValue={pageValue}/>
            : query.mode === "title" ?
            <SearchResultTitle limit={limitdata} pageValue={pageValue}/>
            : query.mode === "language" ?
            <SearchResultLanguage limit={limitdata}pageValue={pageValue}/>
            : null

        )
    }

    /* api 연동되면 수정할 것들 */

    const [ pageValue, setPageValue ] = useState(1);
    const [ page, setPage ] = useState(5);
    const [ basicsPage, setBasicPage ] = useState(1);
    let page_arr = [];
    const limitdata = 7;
    const EndPage = 12;

    for(let i = basicsPage; i <= page; i++) {
        page_arr[i]=i;
    }

    const processed = (querys) => page_arr.map((num)=>{
        if(Number(querys.page) !== num){
            return <Link onClick={()=>setPageValue(num)} to={`search-result?mode=${query.mode}&keyword=${query.keyword}&page=${num}`} key={num}> {page_arr[num]} </Link>
        }
        else {
            return <Link onClick={()=>setPageValue(num)} to={`search-result?mode=${query.mode}&keyword=${query.keyword}&page=${num}`} style={{color: "#6192f3"}} key={num}> {page_arr[num]} </Link>
        }
    });
    
    const prev = () => {
        if(basicsPage!==1){
            if(page%5 !== 0){
                setPage(page-page%5)
                setBasicPage(basicsPage-basicsPage%5-4)
            }else{
                setPage(page-5)
                setBasicPage(basicsPage-5)
            }   
        }
    }

    const next = () => {
        if(page < EndPage){
            if(EndPage < page + 5){
                setPage(EndPage)
                setBasicPage(basicsPage+5);
            }
            else {
                setPage(page+5);
                setBasicPage(basicsPage+5);
            }
        }
    }
    
    return(
        <>
        <S.Background>
        <Header/>
        
            <S.ResultBox>
                <S.ResultSubBox>

                    <S.ResultChoice>
                        <S.ResultKeyword>
                            <span>{query.keyword}</span> 에 대한 검색결과입니다.
                        </S.ResultKeyword>
                        <S.ResultPage>
                            총 {EndPage}페이지 중 {query.page} 페이지 입니다
                        </S.ResultPage>
                    </S.ResultChoice>

                    <S.ResultContant>

                        {
                            mode()
                        }

                    </S.ResultContant>

                    <S.ResultAdd>
                        <S.ResultAddNumber>
                                <img src={LeftArrow} alt="사진" onClick={prev}/>
                                {
                                    processed(query)
                                }
                                <img src={RightArrow} alt="사진" onClick={next}/>
                        </S.ResultAddNumber>
                    </S.ResultAdd>
                    
                </S.ResultSubBox>
            </S.ResultBox>
        </S.Background>
        </>
    )
}

export default SearchResult;