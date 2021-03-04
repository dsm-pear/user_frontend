import React, {useState, useEffect} from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import SearchResultTitle from './SearchResultTitle';
import SearchResultProfile from './SearchResultProfile';
import Header from '../Main/Header';
import {LeftArrow, RightArrow} from '../../assets/ArrowImg/index';
import queryString from 'query-string';
import { request } from '../../utils/axios/axios';
import { useHistory } from 'react-router-dom';

const SearchResult = ({location}) => {
    const query = queryString.parse(location.search);

    const [ searchData, setSearchData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const history = useHistory()

    /* page 설정 */
    const [ page, setPage ] = useState(5);
    const [ nowPage, setNowPage ] = useState(1);
    const [ basicsPage, setBasicPage ] = useState(1);
    const [ EndPage, setEndPage ] = useState(1);
    let page_arr = [];

    useEffect(()=>{
        const DataApi = async () => {

            setLoading(true);

            try{
                setError(null);
                setSearchData(null);
                const response = await request(
                    "get",
                    `/search/${query.mode}?keyword=${query.keyword}&size=7&page=${nowPage-1}`,
                    {},
                    "",
                );
                setSearchData(response.data);
                setEndPage(response.data.totalPages);
            } catch(e) {
                setError(e);
            }
    
            setLoading(false);
        }

        DataApi();
    }, [nowPage, query.mode, query.keyword]);

    const mode = () => {
        
        if(!loading){
            switch(query.mode){
                case "profile" :
                    return(
                        <SearchResultProfile data={searchData}/>
                    )
                case "report" :
                    return(
                        <SearchResultTitle data={searchData}/>
                    )
                default : 
                    return(
                        <div>없는 타입</div>
                    )
            }
        }
        else{
            return <div>Loading...</div>
        }
    }

    const onPage = (num) => {
        history.push(`search-result?mode=${query.mode}&keyword=${query.keyword}&page=${num}`)
    }

    /* api 연동되면 수정할 것들 */

    if(EndPage < 5){
        for(let i = basicsPage; i <= EndPage; i++) {
            page_arr[i] = i;
        }
    }
    else{
        for(let i = basicsPage; i <= page; i++) {
        page_arr[i]=i;
        }
    }


    const processed = (querys) => page_arr.map((num)=>{
        if(Number(querys.page) !== num){
            return <div onClick={()=>setNowPage(num), () => onPage(num)} key={num}> {page_arr[num]} </div>
        }
        else {
            return <div onClick={()=>setNowPage(num), () => onPage(num)} style={{color: "#6192f3"}} key={num}> {page_arr[num]} </div>
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

    if (error) return <div>{error}</div>
    
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