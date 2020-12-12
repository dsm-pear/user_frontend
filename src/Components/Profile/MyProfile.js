//내가 보는 내 프로필 수정 하기 누르기
import React, { useState } from "react";
import { useEffect } from "react";
import { request } from "../../utils/axios/axios";
import * as S from "../styled/Profile/style";
import Header from "../Main/Header";
import Project from "./Project";
import Profile from "./Profile";

function MyProfile({ props }) {
  const [text, setText] = useState("수정");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [produce, setProduce] = useState("");

  const [team, setTeam] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);

  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  const ChangeProfile = async ({ github, produce }) => {
    if (text === "수정") {
      setText("저장");
    } else {
      try {
        const { data } = await request(
          "put",
          "/user/profile/",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          {
            git_hub: github,
            self_intro: produce,
          }
        );
      } catch (e) {
        console.error(e);
      }
      setText("수정");
      alert("프로필이 변경되었습니다.");
    }
  };

  const getProfile = async () => {
    try {
      const { data: name, email, github, self_intro } = await request(
        "get",
        "/user/profile",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setName(name);
      setEmail(email);
      setGithub(github);
      setProduce(self_intro);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getMyProject = async () => {
    try {
      const { data } = await request(
        "get",
        "/user/profile/report?size=6&page=0",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      setTeam(team);
      setTitle(title);
      setDate(date);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMyProject();
  });

  return (
    <S.Main>
      <Header></Header>
      <S.MainProfile>
        {/* 좌측 프로필 */}
        <S.Cover>
          <Profile
            name={name}
            email={email}
            produce={produce}
            setProduce={setProduce}
            github={github}
            setGithub={setGithub}
            text={text}
          />

          {/* 프로젝트 보여주는 곳 */}
          <S.Project>
            <S.PreProject>
              <Project team={team} title={title} date={date} />
              {/* 밑에 더보기 / 숫자 */}
              <S.ProNum></S.ProNum>
            </S.PreProject>
          </S.Project>
        </S.Cover>
        <S.Modify onClick={ChangeProfile}>{text}</S.Modify>
      </S.MainProfile>
    </S.Main>
  );
}

export default MyProfile;
