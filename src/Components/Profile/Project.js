//프로젝트 리스트 컴포넌트
import React from 'react';
import * as S from '../styled/Profile/style';

const Project = props => {
    const { team, title, date } = props;
    return (
        <div>
            <S.MainProjectTeam>
              <span>{ team }</span>
              <p>{ title }</p>
              <span>{ date }</span>
            </S.MainProjectTeam>
        </div>
    )
}

export default Project;