import React from "react";
import SubMember from "./SubMember";
import * as S from "../../styled/ViewReport/MainStyle";

function ReportTeam() {
  const TeamMember = [
    {
      member: "강은빈",
    },
    {
      member: "강은빈",
    },
  ];

  return (
    <S.Teambox>
      <h2>TEAM Member</h2>
      <S.TableCover>
        {TeamMember.map(({ member }, i) => (
          <SubMember language={member} />
        ))}
      </S.TableCover>
    </S.Teambox>
  );
}

export default ReportTeam;
