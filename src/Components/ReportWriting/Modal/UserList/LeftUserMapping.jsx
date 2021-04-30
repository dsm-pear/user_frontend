import React from "react";
import { checked, bfchecked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/UserList/LeftUserMappingStyle";

const LeftUserMapping = ({ userInfo, onClickLeft, selectedUserList }) => {
  return (
    <>
      <S.LeftResult onClick={() => onClickLeft(userInfo.id, userInfo)}>
        <S.BorderResult>
          <S.LeftSideBox>
            <S.BolderCheckBox>
              <span>
                {userInfo.user.name} ({userInfo.user.email})
              </span>
              <div>
                {selectedUserList.find(
                  (selectedUser) => selectedUser.id === userInfo.id
                ) ? (
                  <img src={checked} alt="checked" />
                ) : (
                  <img src={bfchecked} alt="beforechecked" />
                )}
              </div>
            </S.BolderCheckBox>
          </S.LeftSideBox>
        </S.BorderResult>
      </S.LeftResult>
    </>
  );
};

export default LeftUserMapping;
