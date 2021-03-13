import React, { useState, useEffect } from "react";
import * as S from "../styled/Modal/RwModalStyle";
import * as I from "../styled/Modal/RwModalInStyle";
import { request, useRefresh } from "../../utils/axios/axios";
import {
  Close,
  searchImg,
  NowTeam,
  clickNT,
  checked,
  bfchecked,
} from "../../assets";

const ReportWritingModal = ({ setOpen, setMyHei, open, myHei, opas }) => {
  const [toggled, setToggled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // const refreshHandler = useRefresh();
  const isAccessToken = localStorage.getItem("access-token");

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

  const onSearchChange = (e) => {
    if (e.key === "Enter") {
      const newUser = [...user];
      newUser[user.length] = e.target.value;
      setUser(newUser);
    }
    console.log(e.target.value);
    setSearch(e.target.value);
    ViewApi(e.target.value);
  };

  const ViewApi = async (search) => {
    try {
      setData([]);

      const response = await request(
        "get",
        `/account?name=${search}&size=6&page=0`,
        {
          Authorization: `Bearer ${isAccessToken}`,
        }
      );
      setData(response.data.userResponses);
    } catch (e) {
      switch (e.data) {
        case 400:
          alert("");
          break;
        case 403:
          // refreshHandler().then(() => {
          //   ViewApi();
          // });
          break;
        default:
          break;
      }
    }
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
              <div>
                <span>
                  <input type="text" onChange={onSearchChange} />
                  <img src={searchImg} alt="search" />
                </span>
              </div>
            </I.BorderInput>
          </S.SearchInput>
          <S.SearchResult>
            {data.map(({ name, email }, index) => {
              return (
                <I.BorderResult>
                  <div>
                    <I.BolderCheckBox>
                      <span key={index}>
                        {name}({email})
                      </span>
                      <div onClick={clickCheckBox}>
                        {toggle === true ? (
                          <img src={checked} alt="checked" />
                        ) : (
                          <img src={bfchecked} alt="beforechecked" />
                        )}
                      </div>
                    </I.BolderCheckBox>
                  </div>
                </I.BorderResult>
              );
            })}
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
