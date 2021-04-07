import React from "react";
import { Close, checked, bfchecked } from "../../../assets";
import * as S from "../../styled/ReportWriting/Modal/RightModalStyle";

const RightModal = ({ toggled, setToggled, data }) => {
  const onClose = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <S.RightModalMain>
        <S.RightModalSort>
          <S.RightCloseBtn>
            <span>
              <img src={Close} alt="Close" onClick={onClose} />
            </span>
          </S.RightCloseBtn>
          <S.RightSearchResult>
            {data
              .filter((data) => {
                return data.isSelected === true;
              })
              .map((data) => {
                console.log(data);
                return (
                  <S.RightResult key={data.id}>
                    <S.MemberBox>
                      <S.RightSideBox>
                        <S.RightBolderCheckBox>
                          <S.UserInfo>
                            {data.user.name} ({data.user.email})
                          </S.UserInfo>
                          <S.MemberSelect>
                            {data.isSelected ? (
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
