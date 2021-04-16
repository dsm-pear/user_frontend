import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import SubLanguage from "./SubLanguage";

const ReportLanguage = ({ language }) => {
  const LangCount = [
    {
      language,
    },
  ];

  return (
    <S.CoverLang>
      <h2>개발에 사용한 언어</h2>
      <S.TableCover>
        {LangCount.map((language, i) => (
          <SubLanguage key={i} language={language} />
        ))}
      </S.TableCover>
    </S.CoverLang>
  );
};

export default ReportLanguage;
