import React, { useState } from "react";
import * as S from "../styled/Modal/RwModalStyle";
import * as I from "../styled/Modal/RwModalInStyle";
import { Close } from "../../assets";
import { searchImg } from "../../assets";
import { NowTeam } from "../../assets";
import { clickNT } from "../../assets";
import { checked } from "../../assets";
import { bfchecked } from "../../assets";

const ReportWritingModal = ({ setOpen, setMyHei, open, myHei, opas }) => {
  const [toggled, setToggled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState("");

  const onClick = () => {
    setOpen("hidden");
    setMyHei("0");
    setToggled(false);
  };

  const btnClick = () => {
    setToggled(!toggled);
  };

  const clickCheckBox = () => {
    setToggle(!toggle);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };

  const onInputChange = (e) => {
    setUsers(e.target.value);
  };

  return (
    <S.Div visibility={open}>
      <S.LeftModalMain height={myHei} opas={opas}>
        <S.LeftModalSort>
          <S.LeftCloseBtn onClick={onClick}>
            <span>{toggled === !true && <img src={Close} alt="Close" />}</span>
          </S.LeftCloseBtn>
          <S.SearchInput>
            <I.BorderInput>
              <form onSubmit={onSearchSubmit}>
                <span>
                  <input type={Text} onChange={onInputChange} />
                  <img src={searchImg} alt="search" />
                </span>
              </form>
            </I.BorderInput>
          </S.SearchInput>
          <S.SearchResult>
            <I.BorderResult>
              <div>
                {
                  <I.BolderCheckBox>
                    <span>전규현(201215jgh@dsm.hs.kr)</span>
                    <div onClick={clickCheckBox}>
                      {toggle === true ? (
                        <img src={checked} alt="checked" />
                      ) : (
                        <img src={bfchecked} alt="beforechecked" />
                      )}
                    </div>
                  </I.BolderCheckBox>
                }
              </div>
            </I.BorderResult>
          </S.SearchResult>
          <S.TeamState>
            <I.BorderState onClick={btnClick}>
              <span>현재 팀 상태</span>
              {toggled === true ? (
                <div>
                  <img src={clickNT} alt="clickNT" />
                </div>
              ) : (
                <img src={NowTeam} alt="NowTeam" />
              )}
            </I.BorderState>
          </S.TeamState>
        </S.LeftModalSort>
      </S.LeftModalMain>
      {toggled === true && (
        <S.RightModalMain>
          <S.RightModalSort>
            <S.RightCloseBtn>
              <span>
                <img src={Close} alt="Close" onClick={onClick} />
              </span>
            </S.RightCloseBtn>
            <S.ClickMember>
              <I.MemberBox>
                <div>
                  <span>전규현(201215jgh@dsm.hs.kr)</span>
                  <input type="checkbox" name="Teaminfo" value="member" />
                </div>
              </I.MemberBox>
            </S.ClickMember>
          </S.RightModalSort>
        </S.RightModalMain>
      )}
    </S.Div>
  );
};

export default ReportWritingModal;
