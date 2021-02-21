import React from "react";
import * as S from "../../styled/ViewReport/style";
import CategoryName from "./CategoryName";

const Categorybar = () => {
  return (
    <S.Categorybar>
      <CategoryName
        SwName="소프트웨어 개발과"
        Ele={[
          {
            id: 1,
            text: "웹 개발 ",
            field: "WEB",
          },
          {
            id: 2,
            text: "앱 개발 ",
            field: "APP",
          },
          {
            id: 3,
            text: "게임 개발 ",
            field: "GAME",
          },
          {
            id: 4,
            text: "인공지능 개발 ",
            field: "AI",
          },
        ]}
      />
      <CategoryName
        SwName="임베디드 개발과"
        Ele={[
          {
            id: 5,
            text: "임베디드 개발 ",
            field: "EMBEDDED",
          },
        ]}
      />
      <CategoryName
        SwName="정보 보안"
        Ele={[
          {
            id: 1,
            text: "정보 보안 개발 ",
            field: "SECURITY",
          },
        ]}
      />
    </S.Categorybar>
  );
};

export default Categorybar;
