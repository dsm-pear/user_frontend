import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import * as S from "../../styled/ViewReport/style";
import {request, useRefresh} from '../../../utils/axios/axios';


const CategoryName = ({ SwName, Ele, field, grade, page, type, to }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("none");
  const refreshHandler = useRefresh();

  const colorChange = () => {
    console.log("색 바뀐다");
    setColor("white");
    setBackgroundColor("linear-gradient(to bottom, #5955d8, #716dec)");

  }

  const colorChangeHandler = async () => {
    //console.log(e.target.checked);
    try{
        await request(
          "get",
          `report/filter?size=6&page=0&type=&grade=&field=APP`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          "",
          )
          colorChange();
      }catch(e) {
        console.log(e);
        switch (e.data.status) {
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
        }

      }
  };

  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <ul>
          {Ele.map(({ text, field }, i) => {
            return (
              <div 
                key={i}
                onClick={colorChangeHandler}
                setColor={color}
                setBackgroundColor={backgroundColor}
                style={{background: backgroundColor, color:color}}
                field={field}
              >
                {text}
              </div>
            );
          })}
        </ul>
      </S.ReportKindOf>
    </S.Category>
  );
};

export default CategoryName;
