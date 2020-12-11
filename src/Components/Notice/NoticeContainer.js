import React, {useCallback, useEffect} from 'react';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import { Link } from 'react-router-dom';


const NoticeContainer = (props) => {
    const containerData = props.data;

    const Container = useCallback(
        (dataList)=>{
            return dataList.map((data)=>{
                return(
                    <Link to={`/notice-content/${data.id}`} key={data.id}>
                        <S.Container>
                            <S.ContainerContant>
                                <S.ContainerTitle>
                                    {data.username}
                                </S.ContainerTitle>
                                <S.ContainerDay>
                                    {data.createdAt}
                                </S.ContainerDay>
                            </S.ContainerContant>
                        </S.Container>
                    </Link>
                )
            })
        }
    ,[]);

    if (!containerData) return null;

    return (
        <>
            {
                
                Container(containerData)
            }
        </>
    )
}

export default NoticeContainer;