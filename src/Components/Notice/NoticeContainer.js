import React, {useCallback, useState} from 'react';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import { Link } from 'react-router-dom';

const NoticeContainer = (props) => {
    

    const data = [
        {
            "id": 1,
            "title": "1번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 2,
            "title": "2번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 3,
            "title": "3번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 4,
            "title": "4번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 5,
            "title": "5번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 6,
            "title": "6번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 7,
            "title": "7번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 8,
            "title": "8번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 9,
            "title": "9번 제목",
            "day": "2020.10.07"
        },
        {
            "id": 10,
            "title": "10번 제목",
            "day": "2020.10.07"
        },
    ]
    const LimitData = props.limit;
    const PageData = props.page;
    const sort = props.sort;
    const [ containerData, setContainerData ] = useState("");
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    // axios.get(`https://api.dsm-pear.hs.kr/notice?size=${LimitData}&page=`})
    //   .then(res => {
    //     console.log(res);
    //     if(res.status === 200){
    //         setContentData(res.data)
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setError(error)
    // });

    const Container = useCallback(
        (dataList)=>{
            return dataList.map((data)=>{
                return(
                    <Link to={`/notice-content/${data.id}`} key={data.id}>
                        <S.Container>
                            <S.ContainerContant>
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
                Container(data)
            }
        </>
    )
}

export default NoticeContainer;