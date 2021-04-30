import React from "react";
import * as S from "../../styled/ReportWriting/Modal/SelectedUsersStyle";

const SelectedUsers = ({ selectedUser }) => {
  return (
    <>
      <S.Container>
        <S.UserWrap>
          {selectedUser.user.name} ({selectedUser.user.email})
        </S.UserWrap>
      </S.Container>
    </>
  );
};

export default SelectedUsers;
