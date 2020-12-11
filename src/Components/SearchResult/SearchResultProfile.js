import * as S from '../styled/SearchResult/SearchResultStyle';
import { StudentProfile } from '../../assets';
import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';

const SearchResultProfile = () => {
    const data = [
        {
            "id": 1,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
        {
            "id": 2,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
        {
            "id": 3,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
        {
            "id": 4,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
        {
            "id": 5,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
        {
            "id": 6,
            "name": "한준호",
            "email": "oajh04@naver.com"
        },
    ]

    const SearchPropfile = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                return(
                    <Link to={`/user-profile`} key={data.id}>
                        <S.Container style={{color: "#6192f3"}} >
                            <S.ContainerContant >
                                <S.ResultProfile>
                                    <img src={StudentProfile} alt="사진"/>
                                </S.ResultProfile>

                                <S.ResultName>
                                    {data.name}
                                </S.ResultName>

                                <S.ResultEmail>
                                    {data.email}
                                </S.ResultEmail>
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
                SearchPropfile(data)
            }
        </>
    )
}

export default SearchResultProfile;