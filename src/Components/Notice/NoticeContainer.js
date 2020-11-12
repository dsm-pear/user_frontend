import React from 'react';
import * as S from '../styled/NoticeStyled/NoticeStyle';

const NoticeContainer = () => {
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
            "title": "4번 제목",
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

    return (
        <>
            {
                data.map((data)=>{
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
        </>
    )
}

export default NoticeContainer;