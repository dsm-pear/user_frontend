import React, { useCallback } from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import { Link } from 'react-router-dom';

const SearchResultTitle = (props) => {
    const searchData = props.data;

    const SearchTitle = useCallback(
        (dataList) => {
            console.log(searchData)
            return dataList.map((data)=>{
                const color = data.bdc === "팀" ? "#6192f3" : data.bdc === "개인" ? "#27d5b1" : "#5955d8";
                const createTime = data.createdAt.split("T")
                return(
                    <Link to={`/view-report/main-report`} key={data.reportId}>
                        <S.Container bordercolor={color} >
                            <S.ContainerContant>
                                <S.ContainerBDC fontcolor={color}>
                                    [{data.bdc}]
                                </S.ContainerBDC>
                                <S.ContainerTitle>
                                    {data.title}
                                </S.ContainerTitle>
                                <S.ContainerDay>
                                    {createTime[0]}
                                </S.ContainerDay>
                            </S.ContainerContant>
                        </S.Container>
                    </Link>
                )
            })
        }
    ,[]);

    if(!searchData) return <div>검색결과가 없습니다</div>

    return (
        <>
            {
                SearchTitle(searchData.reportResponses)
            }
        </>
    )
}

export default SearchResultTitle;