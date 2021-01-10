import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "../../styled/ViewReport/style";


const CategoryName = ({ SwName, Ele, field, grade, page, type, to }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("none");

  const colorChangeHandler = (e) => {
    console.log("색 바뀐다");
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setColor("white");
      setBackgroundColor("linear-gradient(to bottom, #5955d8, #716dec)");
    } else {
      setColor("");
      setBackgroundColor("");
    }
  };

  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <ul>
          {Ele.map(({ text, field }, i) => {
            return (
              <NavLink
                to= {`/view-report/report/filter?size=6&page=${page}&type=${type}&field=${field}&grade=${grade}`} 
                key={i}
                activeClassName="active"
              >
                {text}
              </NavLink>
            );
          })}
        </ul>
      </S.ReportKindOf>
    </S.Category>
  );
};

export default CategoryName;
