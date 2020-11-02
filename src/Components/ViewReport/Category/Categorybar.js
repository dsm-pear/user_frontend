import React from "react";
import * as S from "../../styled/ViewReport/style";
//import CategoryName from "./Categorytitle";
import CategoryName from "./CategoryName";

const Categorybar = () => {

  
  return (
    <S.Categorybar>
      <CategoryName
        SwName="소프트웨어 개발과"
        frist="웹 개발 보고서"
        second="앱 개발 보고서"
        third="게임 개발 보고서"
        fourth="인공지능 개발 보고서"
      />
      <CategoryName SwName="임베디드 개발과" frist="임베디드 개발 보고서" />
      <CategoryName SwName="정보 보안" frist="정보 보안 개발 보고서" />
      <CategoryName SwName="융합 보고서" frist="융합 개발 보고서" />
    </S.Categorybar>
  );
};

export default Categorybar;
