import React from "react";
import * as S from "../styled/ViewReport/style";
import Project from "./Project";
import ProHeader from "./ProHeader";

//위에 카테고리 개인, 팀, 동아리
function MainProject(props) {
  return (
    <>
      <S.MainProject>
        {/* 얘는 카테고리네임에게 setType을 전달함 */}
        <ProHeader setType={props.setType} />
        <S.MainCover>
          {props.ReportListResponses.map(
            ({ reportId, type, title, createdAt }, i) => (
              <Project
                key={i}
                reportId={reportId}
                team={type}
                title={title}
                date={createdAt}
              />
            )
          )}
        </S.MainCover>
      </S.MainProject>
    </>
  );
}

export default MainProject;
