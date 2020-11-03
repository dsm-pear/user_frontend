import React from "react";
import * as S from "../styled/ViewReport/style";
import ProHeader from './ProHeader';

function ProjectHeader() {

  return (
    <S.ProjectHeader>
      <div className="nav">
        <ProHeader name="2021"/>
        <ProHeader name="팀"/>
        <ProHeader name="개인"/>
        <ProHeader name="동아리"/>
      </div>
      <select placeholder="정렬">
        <option>최신순</option>
        <option>오래된순</option>
      </select>
    </S.ProjectHeader>
  );
}
export default ProjectHeader;
