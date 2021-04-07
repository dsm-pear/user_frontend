import React from "react";
import { checked, bfchecked } from "../../../assets";
import * as S from "../../styled/ReportWriting/Modal/UserMappingStyle";

const UserMapping = ({ data, onUserClick }) => {
  return (
    <>
      <S.LeftResult onClick={() => onUserClick() }>
        <S.BorderResult>
          <S.LeftSideBox>
            <S.BolderCheckBox>
              <span>
                {data.user.name} ({data.user.email})
              </span>
              <div>
                {data.isSelected ? (
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
