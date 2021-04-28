import React from "react";
import * as S from "../../styled/ViewReport/style";
import CategoryName from "./CategoryName";

const Categorybar = (props) => {
  return (
    <>
      <S.Box>
        <span>{props.grade}학년 보고서 보기</span>
      </S.Box>

      <S.Categorybar>
        <CategoryName
          id={1}
          setField={props.setField}
          SwName=""
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
            {
              id: 5,
              text: "임베디드 개발 ",
              field: "EMBEDDED",
            },
            {
              id: 6,
              text: "정보 보안 개발 ",
              field: "SECURITY",
            },
          ]}
        />
      </S.Categorybar>
    </>
  );
};

export default Categorybar;
