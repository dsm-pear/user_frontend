import React, { useCallback, useEffect, useState } from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import { Link } from 'react-router-dom';

const SearchResultTitle = (props) => {
    const searchData = props.data;

    const [ type, setType ] = useState("")

    const SearchTitle = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                const color = data.type === "TEAM" ? "#6192f3" : data.type === "SOLE" ? "#27d5b1" : "#5955d8";
                data.type === "TEAM" ? setType("팀") : data.type === "SOLE" ? setType("솔로") : setType("동아리")
                const createTime = data.createdAt.split("T")
                return(
                    <>
                        <Link to={`/view-report/main-report`} key={data.reportId}>
                            <S.Container bordercolor={color} >
                                <S.ContainerContant>
                                    <S.ContainerBDC fontcolor={color}>
                                        [{type}]
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
                    </>
                )
            })
        }
    );

    

    return (
        <>
            {
                searchData ?
                SearchTitle(searchData.reportResponses)
                : <S.noneData>검색결과가 없습니다.</S.noneData>
            }
        </>
    )
}

export default SearchResultTitle;