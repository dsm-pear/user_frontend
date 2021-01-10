import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/axios/axios.js";
import * as S from "../styled/Profile/style.js";
import * as M from "../styled/ViewReport/style";
import Profile from "./Profile";
import Project from "./Project";
import Header from "../Main/Header";

function UserProfile({ match }) {
  const [MyReportListResponses, setMyReportListResponses] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [produce, setProduce] = useState("");

  //유저 프로필 API
  const getProfile = async () => {
    try {
      const data = await request(
        "get",
        `/profile?user-email=${match.params.email}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  //유저 프로젝트 API
  const getProject = async () => {
    try {
      const data = await request(
        "get",
        `/profile/report?user-email?=${match.params.email}&size=6&page=0`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );

      setMyReportListResponses(data.MyReportListResponses);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <S.Main>
        <Header></Header>
        <S.MainProfile>
          <S.Cover>
            <Profile
              name={name}
              email={email}
              produce={produce}
              setProduce={setProduce}
              github={github}
              setGithub={setGithub}
            />
            {/* 프로젝트 보여주는 곳 */}
            <S.Project>
              {MyReportListResponses.map(({ team, title, date }) => (
                <S.PreProject>
                  <Project team={team} title={title} date={date} />
                </S.PreProject>
              ))}
              <M.Number>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>4</Link>
                <Link>5</Link>
              </M.Number>
            </S.Project>
          </S.Cover>
        </S.MainProfile>
      </S.Main>
    </>
  );
}
export default UserProfile;
