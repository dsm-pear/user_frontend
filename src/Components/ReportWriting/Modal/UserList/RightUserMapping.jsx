import React from "react";
import { Close, checked, bfchecked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/RightUserMapping";

const RightUserMapping = ({
  // toggled,
  // setToggled,
  // onClickRight,
  // selectedUserList,
  selectedUser,
  onClickRight,
  selectedUserList,
}) => {
  // const onClose = () => {
  //   setToggled(!toggled);
  // };

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
                {selectedUserList ? (
                  <img src={checked} alt="checked" />
                ) : (
                  <img src={bfchecked} alt="checked" />
                )}
              </S.MemberSelect>
            </S.RightBolderCheckBox>
          </S.RightSideBox>
        </S.MemberBox>
      </S.RightResult>
    </>
  );
};

export default RightUserMapping;
