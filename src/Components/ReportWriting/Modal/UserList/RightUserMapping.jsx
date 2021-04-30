import React from "react";
import { checked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/UserList/RightUserMappingStyle";

const RightUserMapping = ({ selectedUser, onClickRight }) => {
  return (
    <>
      <S.RightResult
        onClick={() => onClickRight(selectedUser.id, selectedUser)}
        key={selectedUser.id}
      >
        <S.MemberBox>
          <S.RightSideBox>
            <S.RightBolderCheckBox>
              <S.UserInfo>
                {selectedUser.user.name} ({selectedUser.user.email})
              </S.UserInfo>
              <S.MemberSelect>
                <img src={checked} alt="checked" />
              </S.MemberSelect>
            </S.RightBolderCheckBox>
          </S.RightSideBox>
        </S.MemberBox>
      </S.RightResult>
    </>
  );
};

export default RightUserMapping;
