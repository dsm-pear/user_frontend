import React from "react";
import * as S from "../../styled/ViewReport/style";
//import CategoryName from "./Categorytitle";
import CategoryName from "./CategoryName";

const Categorybar = () => {
  return (
    <S.Categorybar>
      <CategoryName
        SwName="소프트웨어 개발과"
        Ele={[
          {
            text: "웹 개발 보고서",
            link: "ReportWeb",
          },
          {
            text: "앱 개발 보고서",
            link: "ReportApp",
          },
          {
            text: "게임 개발 보고서",
            link: "ReportGame",
          },
          {
            text: "인공지능 개발 보고서",
            link: "ReportAi",
          },
        ]}
      />
      <CategoryName
        SwName="임베디드 개발과"
        Ele={[
          {
            text: "임베디드 개발 보고서",
            link: "ReportEmb",
          },
        ]}
      />
      <CategoryName
        SwName="정보 보안"
        Ele={[
          {
            text: "정보 보안 개발 보고서",
            link: "ReportInfo",
          },
        ]}
      />
      <CategoryName
        SwName="융합 보고서"
        Ele={[
          {
            text: "융합 개발 보고서",
            link: "ReportFus",
          },
        ]}
      />
    </S.Categorybar>
  );
};

export default Categorybar;
