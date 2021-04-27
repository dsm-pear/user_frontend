import React, { useState } from "react";
import * as S from "../../styled/ViewReport/style";
//import { request /* useRefresh */ } from "../../../utils/axios/axios";

const CategoryName = (props) => {
  const [selected, setSeletect] = useState(0);
  //const refreshHandler = useRefresh();
  //field 를 어디로 보낼지 정해야 함

  //API 요청
  //카테고리 중복선택 안되게
  const handleColor = async (row) => {
    setSeletect(row.id);
    console.log(row.field);
    if (row.field === "WEB") {
      props.setField("WEB");
    } else if (row.field === "APP") {
      props.setField("APP");
    } else if (row.field === "GAME") {
      props.setField("GAME");
    } else if (row.field === "AI") {
      props.setField("AI");
    } else if (row.field === "EMBEDDED") {
      props.setField("EMBEDDED");
    } else if (row.field) {
      props.setField("SECURITY");
    } else {
      props.setField("");
    }
  };

  return (
    <S.Category>
      <span>{props.SwName}</span>
      <S.ReportKindOf>
        <ul>
          {props.Ele.map((list) => (
            <button
              key={list.id}
              onClick={() => handleColor(list)}
              style={{
                background:
                  list.id === selected
                    ? "linear-gradient(to bottom, #5955d8, #716dec)"
                    : "none",
                color: list.id === selected ? "white" : "",
              }}
            >
              {list.text}
            </button>
          ))}
        </ul>
      </S.ReportKindOf>
    </S.Category>
  );
};
export default CategoryName;
