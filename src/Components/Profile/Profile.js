//프로필 컴포넌트
import React from "react";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  const { name, email, produce, github } = props;
/*   if(name === "팀"){

  }
 */
  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <span>{name}</span>
        <span>{email}</span>
      </S.ProPhoto>
      <S.Produce>
        <a href={github}>
          깃허브로 이동
        </a>
        <p>{produce}</p>
      </S.Produce>
    </S.Profile>
  );
};

export default Profile;

