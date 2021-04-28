import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportLanguage = (props) => {
  //사용한 언어 배열형태로 받아옴
  return (
    <S.CoverLang>
      <h2>사용된 언어</h2>
      <S.TableCover>
        {props.languages.map((language, index) => (
          <S.Language key={index}>
            <span>{language}</span>
          </S.Language>
        ))}
      </S.TableCover>
    </S.CoverLang>
  );
};

export default ReportLanguage;
