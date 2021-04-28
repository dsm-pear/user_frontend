import React, { useState, useEffect } from "react";
import LeftUserMapping from "./UserList/LeftUserMapping";
import LoadingPage from "../LoadingPage";
import RightUserMapping from "./UserList/RightUserMapping";
import * as S from "../../styled/ReportWriting/Modal/ReportWritingModalStyle";
import { Close, searchImg, NowTeam, clickNT } from "../../../assets";
import { request } from "../../../utils/axios/axios";
import axios from "axios";

const ReportWritingModal = ({
  setOpen,
  setMyHei,
  open,
  myHei,
  opas,
  searchList,
  setSearchList,
  selectedUserList,
  setSelectedUserList,
}) => {
  const [toggled, setToggled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState("hidden");
  const [loading, setLoading] = useState(true);

  const ACCESS_TOKEN = localStorage.getItem("access-token");
  const REFRESH_TOKEN = localStorage.getItem("refresh-token");
  const baseUrl = "http://211.38.86.92";

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
    }
    getUsers();
  }, [ACCESS_TOKEN, setSearchList]);

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
      setLoading(false);
    } catch (e) {
      switch (e.data.status) {
        case 400:
          alert("");
          break;
        case 401:
          axios
            .put(`${baseUrl}:8005/auth`, undefined, {
              headers: {
                "X-Refresh-Token": REFRESH_TOKEN,
              },
            })
            .then((res) => {
              if (res.data.access_token) {
                localStorage.setItem("access-token", ACCESS_TOKEN);
              }
            });
          break;
        default:
          break;
      }
    }
  };

  const onClickLeft = (id, userInfo) => {
    const user = selectedUserList.find((user) => {
      if (user.id === id) {
        return true;
      }
      return false;
    });

    if (!user) {
      setSelectedUserList([userInfo, ...selectedUserList]);
    } else {
      setSelectedUserList(selectedUserList.filter((user) => user.id !== id));
    }
  };

  const onClickRight = (id) => {
    setSelectedUserList(selectedUserList.filter((user) => user.id !== id));
  };

  const onSearchChange = (e) => {
    loadUserSearchList(e.target.value);
  };

  const onLeftModalClose = () => {
    setOpen("hidden");
    setMyHei("0");
  };

  const onRightModalClose = () => {
    setIsModalOpen("hidden");
    setToggled(!toggled);
  };

  const rightModalOpen = () => {
    setToggled(!toggled);
    setIsModalOpen("visible");
  };

  const renderSelectedUser = () => {
    return selectedUserList.map((selectedUser) => {
      return (
        <RightUserMapping
          key={selectedUser.id}
          selectedUser={selectedUser}
          onClickRight={onClickRight}
          selectedUserList={selectedUserList}
        />
      );
    });
  };

  return (
    <>
      <S.Div visibility={open}>
        <S.LeftModalMain height={myHei} opas={opas}>
          <S.LeftModalSort>
            <S.LeftCloseBtn onClick={onLeftModalClose}>
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
                searchList.map((userInfo) => {
                  return (
                    <LeftUserMapping
                      key={userInfo.id}
                      userInfo={userInfo}
                      onClickLeft={onClickLeft}
                      selectedUserList={selectedUserList}
                    />
                  );
                })}
            </S.LeftSearchResult>
            <S.TeamState>
              <S.BorderState onClick={rightModalOpen}>
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
        {toggled && (
          <S.RightModalMain visibility={isModalOpen}>
            <S.RightModalSort>
              <S.RightCloseBtn>
                <span>
                  <img src={Close} alt="Close" onClick={onRightModalClose} />
                </span>
              </S.RightCloseBtn>
              <S.RightSearchResult>{renderSelectedUser()}</S.RightSearchResult>
            </S.RightModalSort>
          </S.RightModalMain>
        )}
      </S.Div>
    </>
  );
};

export default ReportWritingModal;
