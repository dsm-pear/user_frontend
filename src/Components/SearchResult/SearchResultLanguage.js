import React, { useCallback, useEffect, useState } from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchResultLanguage = () => {
    const [ LanguageData, setContainerData ] = useState("");
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const SearchLanguage = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                const color = data.bdc === "팀" ? "#6192f3" : data.bdc === "개인" ? "#27d5b1" : "#5955d8";
                return(
                    <Link to={`/view-report/main-report`}>
                        <S.Container bordercolor={color} key={data.id}>
                            <S.ContainerContant>
                                <S.ContainerBDC fontcolor={color}>
                                    [{data.bdc}]
                                </S.ContainerBDC>
                                <S.ContainerTitle>
                                    {data.name}
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

    useEffect(()=>{
        const DataApi = async () => {
            try{
                setError(null)
                setContainerData(null);
                setLoading(true);

                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users`
                );
                setContainerData(response.data);
            }catch(e){
                setError(e);
            }
            setLoading(false);
        };

        DataApi();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>{error}</div>;
    if (!LanguageData) return null;

    return (
        <>
            {
                SearchLanguage(LanguageData)
            }
        </>
    )
}

export default SearchResultLanguage;
