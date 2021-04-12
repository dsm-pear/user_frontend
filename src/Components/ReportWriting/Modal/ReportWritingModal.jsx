import React, { useState, useEffect } from "react";
import UserMapping from "./UserList/UserMapping";
import LoadingPage from "../LoadingPage";
import RightModal from "./UserList/RightModal";
import * as S from "../../styled/ReportWriting/Modal/RwModalStyle";
import { Close, searchImg, NowTeam, clickNT } from "../../../assets";
import { request, useRefresh } from "../../../utils/axios/axios";

const ReportWritingModal = ({ setOpen, setMyHei, open, myHei, opas }) => {
  const [toggled, setToggled] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const refreshHandler = useRefresh();
  const ACCESS_TOKEN = localStorage.getItem("access-token");

  useEffect(() => {
    async function getUsers(getUser) {
      try {
        getUser = await request("get", `/account?name=`, {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        });
        setLoading(false);
      } catch (e) {
        alert(e);
      }
      setSearchList(
        getUser.data.userResponses.map((user, index) => ({
          id: index + 1,
          user,
        }))
      );
      setSelectedUserList(
        getUser.data.userResponses.map((user, index) => ({
          id: index + 1,
          user,
        }))
      );
      console.log(getUser);
    }
    getUsers();
  }, [ACCESS_TOKEN]);

  if (loading) return <LoadingPage />;

  const loadUserSearchList = async (search) => {
    try {
      let response = await request("get", `/account?name=${search}`, {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      });
      setSearchList(
        response.data.userResponses.map((user, index) => ({
          id: index + 1,
          user,
        }))
      );
      setSelectedUserList(
        response.data.userResponses.map((user, index) => ({
          id: index + 1,
          user,
        }))
      );
    } catch (e) {
      switch (e.searchList) {
        case 400:
          alert("");
          break;
        case 403:
          refreshHandler().then(() => {
            loadUserSearchList();
          });
          break;
        default:
          break;
      }
    }
  };

  const onClickLeft = (e) => {
    // const FIND_IDX = selectedUserList.findIndex();
    // if (selectedUserList) {
    setSelectedUserList(
      selectedUserList.map(({ user, id }) => {
        return {
          user,
          id,
        };
      })
    );
    console.log(e.target);
    // } else {
    //   setSelectedUserList();
    // }
  };

  const onClickRight = () => {};

  const onClose = () => {
    setOpen("hidden");
    setMyHei("0");
    setToggled(false);
  };

  const btnClick = () => {
    setToggled(!toggled);
  };

  const onSearchChange = (e) => {
    loadUserSearchList(e.target.value);
  };

  return (
    <>
      <S.Div visibility={open}>
        <S.LeftModalMain height={myHei} opas={opas}>
          <S.LeftModalSort>
            <S.LeftCloseBtn onClick={onClose}>
              <span>
                {toggled === !true && <img src={Close} alt="Close" />}
              </span>
            </S.LeftCloseBtn>
            <S.SearchInput>
              <S.BorderInput>
                <div>
                  <span>
                    <input type="text" onChange={onSearchChange} />
                    <img src={searchImg} alt="search" />
                  </span>
                </div>
              </S.BorderInput>
            </S.SearchInput>
            <S.LeftSearchResult>
              {searchList &&
                searchList.map((searchList) => {
                  // searchList -> { id: 1, user: { name: 'sdf', email: 'sdf' }, isSelected: false }
                  return (
                    <UserMapping
                      key={searchList.id}
                      searchList={searchList}
                      onClickLeft={onClickLeft}
                    />
                  );
                })}
            </S.LeftSearchResult>
            <S.TeamState>
              <S.BorderState onClick={btnClick}>
                <span>현재 팀 상태</span>
                {toggled === true ? (
                  <div>
                    <img src={clickNT} alt="clickNT" />
                  </div>
                ) : (
                  <img src={NowTeam} alt="NowTeam" />
                )}
              </S.BorderState>
            </S.TeamState>
          </S.LeftModalSort>
        </S.LeftModalMain>
        {toggled === true && (
          <RightModal
            toggled={toggled}
            setToggled={setToggled}
            selectedUserList={selectedUserList}
          />
        )}
      </S.Div>
    </>
  );
};

export default ReportWritingModal;
