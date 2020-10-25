import React from 'react';
import * as S from '../styled/Profile/style';

const Profile = props => {
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

export default Profile;