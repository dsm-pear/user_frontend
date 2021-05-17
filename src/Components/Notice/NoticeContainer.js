import React, {useCallback} from 'react';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import { useHistory } from 'react-router-dom';


const NoticeContainer = (props) => {
    const containerData = props.data;

    const history = useHistory();

    const onLink = (id) => {
        history.push(`/notice-content/${id}`)
    }

    const Container = useCallback(
        (dataList)=>{
            
            return dataList.map((data)=>{
                const createTime=data.createdAt.split(" ")
                return(
                    <div onClick={()=>onLink(data.id)} key={data.id}>
                        <S.Container>
                            <S.ContainerContant>
                                <S.ContainerTitle>
                                    {data.title}
                                </S.ContainerTitle>
                                <S.ContainerDay>
                                    {createTime[0]}
                                </S.ContainerDay>
                            </S.ContainerContant>
                        </S.Container>
                    </div>
                )
            })
        }
    ,[]);

    if (!containerData) return <div>데이터가 없습니다.</div>;

    return (
        <>
            {
                
                Container(containerData.noticeResponses)
            }
        </>
    )
}

export default NoticeContainer;