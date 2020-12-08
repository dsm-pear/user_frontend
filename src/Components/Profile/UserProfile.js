import React from "react";
import * as S from "../styled/Profile/style.js";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";


function UserProfile() {
  return (
    <>
      <S.Main>
        <Header></Header>
        <S.MainProfile>
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
                {/* 개인 프로젝트 */}
                <Project team="개인" title="안녕" date="20.10.27" />
                <Project team="동아리" title="안녕" date="20.10.27" />
                <Project team="팀" title="안녕" date="20.10.27" />
              </S.PreProject>
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
