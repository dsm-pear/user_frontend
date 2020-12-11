import React, { useCallback } from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import { Link } from 'react-router-dom';

const SearchResultTitle = (props) => {
    const Data = props.data;

    console.log(Data);
    
    const testdata = [
        {
            "id": 1,
            "bdc": "개인",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 2,
            "bdc": "팀",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 3,
            "bdc": "동아리",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 4,
            "bdc": "개인",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 5,
            "bdc": "팀",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 6,
            "bdc": "동아리",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 7,
            "bdc": "개인",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 8,
            "bdc": "팀",
            "title": "제목",
            "day": "2020.11.03"
        },
        {
            "id": 9,
            "bdc": "동아리",
            "title": "제목",
            "day": "2020.11.03"
        },
    ]

    const SearchTitle = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                const color = data.bdc === "팀" ? "#6192f3" : data.bdc === "개인" ? "#27d5b1" : "#5955d8";
                return(
                    <Link to={`/view-report/main-report`} key={data.id}>
                        <S.Container bordercolor={color} >
                            <S.ContainerContant>
                                <S.ContainerBDC fontcolor={color}>
                                    [{data.bdc}]
                                </S.ContainerBDC>
                                <S.ContainerTitle>
                                    {data.title}
                                </S.ContainerTitle>
                                <S.ContainerDay>
                                    {data.day}
                                </S.ContainerDay>
                            </S.ContainerContant>
                        </S.Container>
                    </Link>
                )
            })
        }
    ,[]);

    return (
        <>
            {
                SearchTitle(testdata)
            }
        </>
    )
}

export default SearchResultTitle;