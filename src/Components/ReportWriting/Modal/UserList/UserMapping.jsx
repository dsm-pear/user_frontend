import React from "react";
import { checked, bfchecked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/UserMappingStyle";

const UserMapping = ({ userInfo, onClickLeft }) => {
  return (
    <>
      <S.LeftResult onClick={() => onClickLeft(userInfo.id)}>
        <S.BorderResult>
          <S.LeftSideBox>
            <S.BolderCheckBox>
              <span>
                {userInfo.user.name} ({userInfo.user.email})
              </span>
              <div>
                {userInfo.id ? (
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

export default UserMapping;
