import React, { useState } from "react";
import { checked, bfchecked } from "../../../assets";
import * as S from "../../styled/ReportWriting/Modal/UserMappingStyle";

const CheckBoxToggle = ({ name, email }) => {
  const [toggle, setToggle] = useState(false);

  const clickCheckBox = () => {
    setToggle(!toggle);
  };

  const onClick = () => {
    setToggle(!toggle);
  };

  // const onChoiceUserClick = () => {

  // }

  return (
    <>
      <S.Result onClick={onClick}>
        <S.BorderResult>
          <div>
            <S.BolderCheckBox>
              <span>
                {name}({email})
              </span>
              <div onClick={clickCheckBox}>
                {toggle === true ? (
                  <img src={checked} alt="checked" />
                ) : (
                  <img src={bfchecked} alt="beforechecked" />
                )}
              </div>
            </S.BolderCheckBox>
          </div>
        </S.BorderResult>
      </S.Result>
    </>
  );
};

export default CheckBoxToggle;
