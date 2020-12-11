import React from "react";
import * as S from "../styled/ViewReport/style";
import ProHeader from "./ProHeader";
import { select } from "../../assets";

function ProjectHeader() {
 /*  const filterHandler = () => {
    if(name === "팀"){

    }
  } */
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
