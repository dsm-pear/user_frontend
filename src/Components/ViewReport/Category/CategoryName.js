import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "../../styled/ViewReport/style";
import { request, useRefresh } from "../../../utils/axios/axios";

const CategoryName = (props) => {
  const [selected, setSeletect] = useState(0);
  const refreshHandler = useRefresh();

  //API 요청
  const colorChangeHandler = async () => {
    //console.log(e.target.checked);
    try {
      const data = await request(
        "get",
        `report/filter?size=6&page=0&type=&grade=&field=APP`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
    } catch (e) {
      console.log(e);
      /* switch (e.data.status) {
        case 400:
          alert("프로필 불러오기를 실패했습니다.");
          break;
        case 403:
          refreshHandler().then(() => {
            colorChangeHandler();
          });
          break;
        default:
          break;
      } */
    }
  };

  //카테고리 중복선택 안되게
  const handleColor = (row) => {
    setSeletect(row.id);
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
