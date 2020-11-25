
import React, {useCallback, useState, useEffect} from 'react';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import { Link } from 'react-router-dom';
import axios from 'axios;


const NoticeContainer = (props) => {
    /*
    const LimitData = props.limit;
    const PageData = props.page;
    const sort = props.sort;
    */
    const [ containerData, setContainerData ] = useState("");
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const Container = useCallback(
        (dataList)=>{
            return dataList.map((data)=>{
                return(
                    <Link to={`/notice-content/${data.id}`} key={data.id}>
                        <S.Container>
                            <S.ContainerContant>
                                <S.ContainerTitle>
                                    {data.name}
                                </S.ContainerTitle>
                                <S.ContainerDay>
                                    2020.11.23
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
    if (!containerData) return null;


    const Container = useCallback(
        (dataList)=>{
            return dataList.map((data)=>{
                return(
                <S.Container key={data.id}>
                    <S.ContainerContant>
                        <S.ContainerTitle>
                            {data.title}
                        </S.ContainerTitle>
                        <S.ContainerDay>
                            {data.day}
                        </S.ContainerDay>
                    </S.ContainerContant>
                </S.Container>
                )
            })
        }
    ,[]);

    return (
        <>
            {
                Container(containerData)
            }
        </>
    )
}

export default NoticeContainer;