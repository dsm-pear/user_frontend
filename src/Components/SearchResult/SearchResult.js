import React, {useState} from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import SearchResultTitle from './SearchResultTitle';
import SearchResultProfile from './SearchResultProfile';
import SearchResultLanguage from './SearchResultLanguage';
import Header from '../Main/Header';
import DownArrow from '../../assets/ArrowImg/DownArrow.png'
import UpArrow from '../../assets/ArrowImg/UpArrow.png'
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const SearchResult = ({location}) => {
    const query = queryString.parse(location.search);

    console.log(query.keyword)

    const [ range, setRange ] = useState("정렬");
    const [ show, setShow ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);

    const onChoice = () => {
        if(show===true){
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

    const param = () => {
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
    const [ a, seta ] = useState(1);
    let page_arr = [];
    const limitdata = 7;
    const p = 12;

    for(let i = a; i <= page; i++) {
        page_arr[i]=i;
    }

    const processed = (querys) => page_arr.map((num)=>{
        if(Number(querys.page) != num){
            return <Link onClick={()=>setPageValue(num)} to={`search-result?mode=${query.mode}&keyword=${query.keyword}&page=${num}`} key={num}> {page_arr[num]} </Link>
        }
        else {
            return <Link onClick={()=>setPageValue(num)} to={`search-result?mode=${query.mode}&keyword=${query.keyword}&page=${num}`} style={{color: "#6192f3"}} key={num}> {page_arr[num]} </Link>
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
        
            <S.ResultBox>
                <S.ResultSubBox>

                    <S.ResultChoice onClick={onChoice}>
                        <S.Resultarr>{range}<img src={img} alt="사진"/></S.Resultarr>
                        {
                            show &&
                            <S.ResultRange>
                                <S.ResultC onClick={onNew}>최신순</S.ResultC>
                                <S.ResultC onClick={onOld}>오래된순</S.ResultC>
                            </S.ResultRange>
                            
                        }
                    </S.ResultChoice>

                    <S.ResultContant>

                        {
                            param()
                        }

                    </S.ResultContant>

                    <S.ResultAdd>
                        <S.ResultAddNumber>
                                <div onClick={prev}>이전</div>
                                {
                                    processed(query)
                                }
                                <div onClick={next}>다음</div>
                        </S.ResultAddNumber>
                    </S.ResultAdd>
                    
                </S.ResultSubBox>
            </S.ResultBox>
        </S.Background>
        </>
    )
}

export default SearchResult;