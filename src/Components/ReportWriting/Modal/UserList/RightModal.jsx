import React from "react";
import { Close, checked, bfchecked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/RightModalStyle";

const RightModal = ({
  toggled,
  setToggled,
  selectedUserList,
  onClickRight,
}) => {
  const onClose = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <S.RightModalMain onClick={() => onClickRight(selectedUserList.id)}>
        <S.RightModalSort>
          <S.RightCloseBtn>
            <span>
              <img src={Close} alt="Close" onClick={onClose} />
            </span>
          </S.RightCloseBtn>
          <S.RightSearchResult>
            {selectedUserList
              // .filter((selectedUserList) => {
              //   return selectedUserList;
              // })
              .map((selectedUserList) => {
                // console.log(selectedUserList);
                return (
                  <S.RightResult key={selectedUserList.id}>
                    <S.MemberBox>
                      <S.RightSideBox>
                        <S.RightBolderCheckBox>
                          <S.UserInfo>
                            {selectedUserList.user.name} (
                            {selectedUserList.user.email})
                          </S.UserInfo>
                          <S.MemberSelect>
                            {selectedUserList.isSelected ? (
                              <img src={checked} alt="checked" />
                            ) : (
                              <img src={bfchecked} alt="checked" />
                            )}
                          </S.MemberSelect>
                        </S.RightBolderCheckBox>
                      </S.RightSideBox>
                    </S.MemberBox>
                  </S.RightResult>
                );
              })}
          </S.RightSearchResult>
        </S.RightModalSort>
      </S.RightModalMain>
    </>
  );
};

export default RightModal;
