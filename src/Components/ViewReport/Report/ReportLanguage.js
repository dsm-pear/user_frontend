import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportLanguage = (props) => {
  const language = props.languages.split(",");

  return (
    <S.CoverLang>
      <h2>사용된 언어</h2>
      <S.TableCover>
        {language.map((language, index) => (
          <S.Language key={index}>
            <span>{language}</span>
          </S.Language>
        ))}
      </S.TableCover>
    </S.CoverLang>
  );
};

export default ReportLanguage;
