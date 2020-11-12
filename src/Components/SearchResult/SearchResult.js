import React, {useState} from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import SearchResultTitle from './SearchResultTitle';
import SearchResultProfile from './SearchResultProfile';
import Header from '../Main/Header';
import DownArrow from '../../assets/ArrowImg/DownArrow.png'
import UpArrow from '../../assets/ArrowImg/UpArrow.png'

const SearchResult = () => {
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

                        <SearchResultProfile/>
                        <SearchResultTitle/>

                    </S.ResultContant>

                    <S.ResultAdd>
                        더보기
                        <S.ResultAddImg>
                            <img src={DownArrow} alt="사진"/>
                        </S.ResultAddImg>
                    </S.ResultAdd>
                    
                </S.ResultSubBox>
            </S.ResultBox>
        </S.Background>
        </>
    )
}

export default SearchResult;