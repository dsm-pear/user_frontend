//내가 보는 내 프로필 수정 하기 누르기 전

import React from "react";
import * as S from "../styled/Profile/style";
//import UserProfile from "./UserProfile";
import Project from "./Project";
import Profile from "./Profile";
import Button from './Button';

function MyProfile() {
  return (
    <S.Main>
      <S.MainProfile>
        {/* 좌측 프로필 */}
        <S.Cover>
          <Profile
            name="강은빈"
            email="kub9722@gmaeil.com"
            produce="안녕하세요"
            github="https://github.com/silverbeen"
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              {/* 밑에 더보기 / 숫자 */}
              <S.ProNum></S.ProNum>
            </S.PreProject>
          </S.Project>
        </S.Cover>
        <Button text="수정"/>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
