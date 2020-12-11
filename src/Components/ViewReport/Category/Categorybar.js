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
            text: "웹 개발 ",
            link: "report-web",
          },
          {
            text: "앱 개발 ",
            link: "report-app",
          },
          {
            text: "게임 개발 ",
            link: "report-game",
          },
          {
            text: "인공지능 개발 ",
            link: "report-ai",
          },
        ]}
      />
      <CategoryName
        SwName="임베디드 개발과"
        Ele={[
          {
            text: "임베디드 개발 ",
            link: "report-emb",
          },
        ]}
      />
      <CategoryName
        SwName="정보 보안"
        Ele={[
          {
            text: "정보 보안 개발 ",
            link: "report-info",
          },
        ]}
      />
      <CategoryName
        SwName="융합 "
        Ele={[
          {
            text: "융합 개발 ",
            link: "report-fus",
          },
        ]}
      />
    </S.Categorybar>
  );
};

export default Categorybar;
