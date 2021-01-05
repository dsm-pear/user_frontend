import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const SubMember = ({ member }) => {
  return (
    <S.Member>
      <span>{member}</span>
    </S.Member>
  );
};

export default SubMember;
