import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "../../styled/ViewReport/style";

const CategoryName = (props) => {
  const { SwName, Ele } = props;

  return (
    <S.Category>
      <span>{SwName}</span>
      <S.ReportKindOf>
        <ul>
          {Ele.map(({ text, link }, i) => {
            return (
              <NavLink
                to={`/ViewReport/${link}`}
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
