import React from "react";
import * as S from "../styled/ViewReport/style";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";

function MainProject() {
  return (
    <>
      <S.MainProject>
        <ProjectHeader />
        <S.MainCover>
          <Project
            team="개인"
            title="안녕하세요 강은빈입니다."
            date="20.20.20"
          />
          <Project team="팀" title="안녕하세요 강은빈입니다." date="20.20.20" />
          <Project
            team="동아리"
            title="안녕하세요 강은빈입니다."
            date="20.20.20"
          />
          <Project
            team="동아리"
            title="안녕하세요 강은빈입니다."
            date="20.20.20"
          />
          <Project team="팀" title="안녕하세요 강은빈입니다." date="20.20.20" />

          <Project team="팀" title="안녕하세요 강은빈입니다." date="20.20.20" />
        </S.MainCover>
      </S.MainProject>
    </>
  );
}

export default MainProject;
