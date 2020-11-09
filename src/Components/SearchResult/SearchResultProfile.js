import * as S from '../styled/SearchResult/SearchResultStyle';
import { StudentProfile } from '../../assets';
import React from 'react';

const SearchResultProfile = () => {
    return (
        <S.Container>
                <S.ContainerContant>
                    <S.ResultProfile>
                        <img src={StudentProfile} alt="사진"/>
                    </S.ResultProfile>

                    <S.ContainerTitle>
                        제목
                    </S.ContainerTitle>

                    <S.ContainerDay>
                        2020.11.03
                    </S.ContainerDay>
                </S.ContainerContant>
            </S.Container>
    )
}

export default SearchResultProfile;