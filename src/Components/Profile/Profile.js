//프로필 컴포넌트
import React from "react";
import * as S from "../styled/Profile/style";

const Profile = (props) => {
  return (
    <S.Profile>
      <S.ProPhoto>
        {/* 프로필 사진 */}
        <div></div>
        {/* 이름 / 깃허브 주소 / 자신 설명 */}
        <div className="input">{props.name}</div>

        <input
          type="text"
          className="input"
          placeholder={props.email}
          disabled={props.text === "저장" ? false : true}
          onKeyUp={(e) => props.setEmail(e.target.value)}
        />
        <input  x
          className="input introduce"
          type="text"
          placeholde={props.produce}
          disabled={props.text === "저장" ? false : true}
          onKeyUp={(e) => props.setProduce(e.target.value)}
        />
      </S.ProPhoto>
    </S.Profile>
  );
};

export default Profile;
