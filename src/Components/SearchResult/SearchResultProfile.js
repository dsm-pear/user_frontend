import * as S from '../styled/SearchResult/SearchResultStyle';
import { StudentProfile } from '../../assets';
import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';

const SearchResultProfile = (props) => {
    const searchData = props.data;

    console.log(props)

    const SearchPropfile = useCallback(
        (dataList) => {
            return dataList.map((data)=>{
                return(
                    <Link to={`/user-profile`} key={data.email}>
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
    ,[searchData]);

    return (
        <>
            {
                searchData ?
                SearchPropfile(searchData.userResponses)
                : <S.noneData>검색결과가 없습니다.</S.noneData>
            }
        </>
    )
}

export default SearchResultProfile;