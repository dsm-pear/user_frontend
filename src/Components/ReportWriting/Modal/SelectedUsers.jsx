import React from "react";
import * as S from "../../styled/ReportWriting/Modal/SelectedUsersStyle";

const SelectedUsers = ({ selectedUser, reportId }) => {
  const renderUserData = () => {
    if (!reportId) {
      return (
        <S.UserWrap>
          {selectedUser.user.name} ({selectedUser.user.email})
        </S.UserWrap>
      );
    } else
      return (
        <S.UserWrap>
          {selectedUser.userData.memberName} (
          {selectedUser.userData.memberEmail})
        </S.UserWrap>
      );
  };

  return (
    <>
      <S.Container>{renderUserData}</S.Container>
    </>
  );
};

export default SelectedUsers;
