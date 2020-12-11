//내가 보는 내 프로필 수정 하기 누르기

import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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

  //수정 누르면 저장으로 바뀌고 input disabled 가 해제됨
  const ModifyProfile = () => {
    if (text === "저장") {
      ChangeProfile(github, produce);
      alert("프로필이 변경되었습니다");
    } else {
      setText("저장");
    }

    useEffect(()=>{
      ModifyProfile();
    },[]);
  };

  // 수정 하는 API FUNCTION
  const ChangeProfile = async ({ github, produce }) => {
    try {
      const { data } = await axios.post(
        "https://api.dsm-pear.hs.kr/user/profile/",
        {
          git_hub: github,
          self_intro: produce,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

    } catch (error) {}
  };

  // DATA 가져오는 API FUNCTION
  const getProfile = async () => {
    try {
      const {
        data: { name, email, git_hub, self_intro },
      } = await axios.get("https://api.dsm-pear.hs.kr/user/profile", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setName(name);
      setEmail(email);
      setGithub(git_hub);
      setProduce(self_intro);
    } catch (error) {}
  };

  useEffect(() => {
    getProfile();
  }, []);

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
              <Project team="개인" title="1301 강은빈입니다" date="20.10.26" />
              <Project team="팀" title="1301 강은빈입니다" date="20.10.26" />
              <Project
                team="팀"
                title="1301 강은빈입니다"
                date="20.10.26"
                save="[임시저장]"
              />
              <Project
                team="개인"
                title="1301 강은빈입니다"
                date="20.10.26"
                save="[요청 중]"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
              <Project
                team="동아리"
                title="1301 강은빈입니다"
                date="20.10.26"
              />
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
