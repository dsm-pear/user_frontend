import * as S from '../styled/SearchResult/SearchResultStyle';
import { StudentProfile } from '../../assets';
import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';

const SearchResultProfile = () => {
    const data = [
        {
            "id": 1,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
        {
            "id": 2,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
        {
            "id": 3,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
        {
            "id": 4,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
        {
            "id": 5,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
        {
            "id": 6,
            "name": "한준호",
            "email": "oajh04@naver.com",
            "link": "https://www.youtube.com/"
        },
    ]

    const SearchPropfile = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                return(
                    <Link to={`/user-profile`}>
                        <S.Container key={data.id} style={{color: "#6192f3"}} >
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

                                <S.ResultGithub>
                                    <a href={data.link}>깃허브 링크</a>
                                </S.ResultGithub>
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