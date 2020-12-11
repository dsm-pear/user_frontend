import React, { useState, useEffect } from 'react';
import NoticeContainer from './NoticeContainer';
import {Link} from 'react-router-dom';
import Header  from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import {LeftArrow, RightArrow} from '../../assets/ArrowImg/index';
import queryString from 'query-string';
import axios from 'axios'

const Notice = ({location}) => {

    const query = queryString.parse(location.search);

    /* api 연동되면 수정할 것들 */

    const [ containerData,setContainerData ] = useState(null);
    const [ fileData, setFileData ] = useState(null);

    const [ error, setError] = useState(null)
    const [ nowPage, setNowPage] = useState(1);
    const [ EndPage, setEndPage ] = useState(1);
    const [ page, setPage ] = useState(5);
    const [ basicsPage, setBasicPage ] = useState(1);
    let page_arr = [];

    useEffect(()=>{
        const DataApi = async () => {
            try{
                const response = await axios.get(
                    //`http://smoothbear.eastus.cloudapp.azure.com:8000/notice?size=7&page=${nowPage}`
                    `https://jsonplaceholder.typicode.com/users`
                );
                setContainerData(response.data);
                //setEndPage(containerData.totalPages)
            }catch(e){
                setError(e);
            }
        };

        DataApi();
    }, []);

    console.log(fileData);
    //const EndPage = containerData.totalPages;

        if(EndPage < 5){
            for(let i = basicsPage; i <= EndPage; i++) {
                page_arr[i]=i;
            }
        }
        else{
            for(let i = basicsPage; i <= page; i++) {
            page_arr[i]=i;
            }
        }


    const processed = (querys) => page_arr.map((num)=>{
        if(Number(querys.page) !== num){
            return <Link onClick={()=>setNowPage(num)} to={`/notice?page=${page_arr[num]}`} key={num}> {page_arr[num]} </Link>
        }
        else {
            return <Link onClick={()=>setNowPage(num)} to={`/notice?page=${page_arr[num]}`} style={{color: "#6192f3"}} key={num}> {page_arr[num]} </Link>
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
            
                <S.NoticeBox>
                    <S.NoticeSubBox>

                        <S.NoticeChoice>
                            총 {EndPage}페이지 중 {query.page} 페이지 입니다
                        </S.NoticeChoice>

                        <S.NoticeContant>

                            <NoticeContainer data={containerData}/>

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