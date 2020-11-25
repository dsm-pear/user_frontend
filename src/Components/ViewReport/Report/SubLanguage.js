import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const SubLanguage = ({ language }) => {
  return (
    <S.Language>
      <span>{language}</span>
    </S.Language>
  );
};

export default SubLanguage;
