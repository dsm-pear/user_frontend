import React from "react";
import * as S from "../../styled/ReportWriting/Modal/SelectedUsersStyle";

const SelectedUsers = ({ selectedUser, reportId }) => {
  const renderUserData = () => {
    return (
      <S.UserWrap>
        {selectedUser.name} ({selectedUser.email})
      </S.UserWrap>
    );
  };

  return (
    <>
      <S.Container>{renderUserData()}</S.Container>
    </>
  );
};

export default SelectedUsers;
