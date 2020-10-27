//내가 보는 내 프로필 수정 하기 누르기

import React, { useState } from "react";
import * as S from "../styled/Profile/style";
//import UserProfile from "./UserProfile";
import Project from "./Project";
import Profile from "./Profile";

function MyProfile({}) {
  const [text, setText] = useState("수정");
  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  const ProModify = () => {
    if (text === "저장") {
      setText("수정");
    } else {
      setText("저장");
    }
  };

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
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              <Project team="개인" title="1301 강은빈입니다" date="20.10.26" />
              <Project team="팀" title="1301 강은빈입니다" date="20.10.26" />
              <Project
                team="팀"
                title="1301 강은빈입니다"
                date="20.10.26"
                save="[임시저장]"
              />
              <Project
                team="개인"
                title="1301 강은빈입니다"
                date="20.10.26"
                save ="[요청 중]"
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
        <S.Modify onClick={ProModify}>{text}</S.Modify>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
