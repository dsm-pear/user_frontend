import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportTeam = (props) => {
  const member = props.members;

  return (
    <S.Teambox>
      <h2>{props.teamName}</h2>
      <S.TableCover>
        {member.map(({ memberName, index }) => (
          <S.Member>
            <span key={index}>{memberName}</span>
          </S.Member>
        ))}
      </S.TableCover>
    </S.Teambox>
  );
};

export default ReportTeam;
