import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import SubLanguage from "./SubLanguage";

const ReportLanguage = () => {
  const LangCount = [
    {
      language : "C언어"
    },
    {
      language: "HTML"
    },
    {
      language: "CSS"
    },
  ]

  return (
    <S.CoverLang>
      <h2>사용된 언어</h2>
      <S.TableCover>
        {LangCount.map(({language}, i) => (
          <SubLanguage language={language} />
        ))}
      </S.TableCover>
    </S.CoverLang>
  );
};

export default ReportLanguage;
