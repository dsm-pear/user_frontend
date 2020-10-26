//프로필에 쓰이는 버튼들
import React from 'react';
import * as S from '../styled/Profile/style';

const Button = props => {
    const { text } = props;

    return (
        <S.Modify>
            {text}
        </S.Modify>
    )
}

export default Button;