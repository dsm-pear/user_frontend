import React from "react";
import * as S from "../styled/ViewReport/style";
import ProHeader from "./ProHeader";

function ProjectHeader() {
  return (
    <S.ProjectHeader>
      <div className="nav">
        <ProHeader name="팀" />
        <ProHeader name="개인" />
        <ProHeader name="동아리" />
      </div>
    </S.ProjectHeader>
  );
}
export default ProjectHeader;
