import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "../../styled/ViewReport/style";


const CategoryName = ({ SwName, Ele, field, grade, page, type, to }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("none");

  const colorChangeHandler = () => {
    console.log("색 바뀐다");
    //console.log(e.target.checked);
      setColor("white");
      setBackgroundColor("linear-gradient(to bottom, #5955d8, #716dec)");
  };

  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <ul>
          {Ele.map(({ text, field }, i) => {
            return (
              <NavLink
                to= "/view-report" 
                key={i}
                activeClassName="active"
                onClick={colorChangeHandler}
                setColor={color}
                setBackgroundColor={backgroundColor}
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
