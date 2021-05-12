import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportTeam = (props) => {
  const member = props.members;

  return (
    <S.Teambox>
      <h2>{props.teamName}</h2>
      <S.TableCover>
        {member.map(({ memberName, memberId, memberEmail }) => (
          <S.Member key={memberId}>
            <span>
              {memberName} ({memberEmail})
            </span>
          </S.Member>
        ))}
      </S.TableCover>
    </S.Teambox>
  );
};

export default ReportTeam;
