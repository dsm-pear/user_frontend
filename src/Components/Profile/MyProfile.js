import React from "react";
import * as M from "../styled/Profile/Mystyled";
import * as S from "../styled/Profile/style";
//import UserProfile from "./UserProfile";
import Profile from './Profile';

function MyProfile() {
  return (
    <S.Main>
        <div>
        <S.MainProfile>
            {/* 좌측 프로필 */}
            <S.Profile>
                <S.ProPhoto>
                    {/* 프로필 사진 */}
                    <div></div>
                    {/* 이름 / 깃허브 주소 / 자신 설명 */}
                    <span>강은빈</span>
                    <span>kub9722@gmail.com</span>
                </S.ProPhoto>
                <S.Produce>
                <link to="https://github.com/silverbeen"></link>
                    <p>
                    안녕하세요. 대덕소프트웨어마이스터고등학교에 재학중인 강은빈
                    입니다.
                    </p>
                </S.Produce>
            </S.Profile>

            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
            <S.PreProject>
                {/* 개인 프로젝트 */}
                <Profile 
                team = "개인"
                title = "안녕"
                date = "10"
                />
                {/* 밑에 더보기 / 숫자 */}
                <S.ProNum></S.ProNum>
            </S.PreProject>
            </S.Project>
        </S.MainProfile>
        </div>
        <M.Modify></M.Modify>
    </S.Main>
  );
}

export default MyProfile;