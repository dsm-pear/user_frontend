import React, { useState, useEffect } from "react";
import UserMapping from "../Modal/UserMapping";
import LoadingPage from "../LoadingPage";
import RightModal from "../Modal/RightModal";
import * as S from "../../styled/ReportWriting/Modal/RwModalStyle";
import { Close, searchImg, NowTeam, clickNT } from "../../../assets";
import { request, useRefresh } from "../../../utils/axios/axios";

const ReportWritingModal = ({ setOpen, setMyHei, open, myHei, opas }) => {
  const [toggled, setToggled] = useState(false);
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshHandler = useRefresh();
  const isAccessToken = localStorage.getItem("access-token");

  useEffect(() => {
    async function getUsers(getUser) {
      try {
        getUser = await request("get", `/account?name=`, {
          Authorization: `Bearer ${isAccessToken}`,
        });
        setToggled(false);
      } catch (e) {
        alert(e);
      }
      console.log(getUser);
      setData(
        getUser.data.userResponses.map((user, index) => ({
          id: index + 1,
          isSelected: false,
          user,
        }))
      );
      setLoading(false);
    }
    getUsers();
  }, []);

  if (loading) return <LoadingPage />;

  const ViewApi = async (search) => {
    try {
      setData([]);

      const response = await request("get", `/account?name=${search}`, {
        Authorization: `Bearer ${isAccessToken}`,
      });
      setData(
        response.data.userResponses.map((user, index) => ({
          id: index + 1,
          isSelected: false,
          user,
        }))
      );
    } catch (e) {
      switch (e.data) {
        case 400:
          alert("");
          break;
        case 403:
          refreshHandler().then(() => {
            ViewApi();
          });
          break;
        default:
          break;
      }
    }
  };

  const onUserClick = (index) => {
    setData(
      data.map(({ id, user, isSelected }, i) => {
        // [{ id:1, user, isSelected: false }]
        // return data;
        // return {
        //   id: data.id,
        //   user: data.user,
        //   isSelected: true,
        // const id = 1;
        return {
          id,
          user,
          isSelected: index === i + 1 ? !isSelected : isSelected,
        };
      })
    );
  };

  const onClose = () => {
    setOpen("hidden");
    setMyHei("0");
    setToggled(false);
  };

  const btnClick = () => {
    setToggled(!toggled);
  };

  const onSearchChange = (e) => {
    const newUser = [...user];
    newUser[user.length] = e.target.value;
    setUser(newUser);

    ViewApi(e.target.value);
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
              {data &&
                data.map((data) => {
                  // data -> { id: 1, user: { name: 'sdf', email: 'sdf' }, isSelected: false }
                  return (
                    <UserMapping
                      key={data.id}
                      data={data}
                      onUserClick={onUserClick}
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
          <RightModal toggled={toggled} setToggled={setToggled} data={data} />
        )}
      </S.Div>
    </>
  );
};

export default ReportWritingModal;
