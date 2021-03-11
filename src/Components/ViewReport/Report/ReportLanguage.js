import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const SubLanguage = ({ languages }) => {
  return (
    <S.Language>
      <span>{languages}</span>
    </S.Language>
  );
};

const ReportLanguage = (props) => {
  //const language = props.languages;
  const LangCount = [
    {
      id: 1,
      language: "JAVA",
    },
    {
      id: 2,
      language: "JAVA",
    },
    {
      id: 2,
      language: "Jsfsjfhlskhfsfhkjlsh",
    },
  ];

  return (
    <S.CoverLang>
      <h2>개발에 사용한 언어</h2>
      <S.TableCover>
        {LangCount.map((language) => (
          <S.Language key={language.id}>
            <span>{language.language}</span>
          </S.Language>
        ))}
      </S.TableCover>
    </S.CoverLang>
  );
};

export default ReportLanguage;
