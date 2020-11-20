import React, { useState } from "react";
import * as S from "../styled/ViewReport/style";
import ProHeader from "./ProHeader";
import { select, searchImg } from "../../assets";

function ProjectHeader() {
  return (
    <S.ProjectHeader>
      <div className="nav">
        <ProHeader name="2021" />
        <ProHeader name="팀" />
        <ProHeader name="개인" />
        <ProHeader name="동아리" />
      </div>
      <S.Select>
        <S.SelctFlexBox>
          <span>정렬</span>
          <img src={select} alt="language" />
        </S.SelctFlexBox>
        <S.ViewList>
          <S.ListTable>최신순</S.ListTable>
          <S.ListTable>오래된순</S.ListTable>
        </S.ViewList>
      </S.Select>
    </S.ProjectHeader>
  );
}
export default ProjectHeader;
