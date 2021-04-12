import React from "react";
import { checked, bfchecked } from "../../../../assets";
import * as S from "../../../styled/ReportWriting/Modal/UserMappingStyle";

const UserMapping = ({ searchList, onClickLeft }) => {
  return (
    <>
      <S.LeftResult onClick={() => onClickLeft(searchList.id)}>
        <S.BorderResult>
          <S.LeftSideBox>
            <S.BolderCheckBox>
              <span>
                {searchList.user.name} ({searchList.user.email})
              </span>
              <div>
                {searchList.isSelected ? (
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
