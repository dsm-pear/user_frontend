import React from "react";
import * as S from "../styled/ViewReport/style";
import Categorytilte from "./Categorytitle";

const Categorybar = () => {
  return (
    <S.Categorybar>
      <Categorytilte
        SwName="소프트웨어 개발과"
        frist="웹 개발 보고서"
        second="앱 개발 보고서"
        third="게임 개발 보고서"
        fourth="인공지능 개발 보고서"
      />
      <Categorytilte SwName="임베디드 개발과" frist="임베디드 개발 보고서" />
      <Categorytilte SwName="정보 보안" frist="정보 보안 개발 보고서" />
      <Categorytilte SwName="융합 보고서" frist="융합 개발 보고서" />
    </S.Categorybar>
  );
};

export default Categorybar;
