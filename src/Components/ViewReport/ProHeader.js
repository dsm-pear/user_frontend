import React, { useState } from "react";
import { request, useRefresh } from "../../utils/axios/axios";

const Header = (props) => {
  const { name } = props;
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");
  const refreshHandler = useRefresh();

  //전체보기
  const typeFilterHandler = async (e) => {
    if (name === "팀") {
      try {
        const data = await request(
          "get",
          `/report/filter?size=6&page=0&type=TEAM&grade=GRADE2&field=`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        console.log(e.target.checked);
        if (e.target.checked === true) {
          setColor("#5955d8");
          setFont("#ffffff");
        } else {
          setColor("#efefef");
          setFont("");
        }
      } catch (e) {
        console.log(e);
        switch (e.data.status) {
          case 400:
            alert("팀 보고서 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
              typeFilterHandler();
            });
            break;
          default:
            break;
        }
      }
    } else if (name === "개인") {
      try {
        const data = await request(
          "get",
          `/report/filter?size=6&page=0&type=SOLE&grade=GRADE2&field=`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        console.log(e.target.checked);
        if (e.target.checked === true) {
          setColor("#5955d8");
          setFont("#ffffff");
        } else {
          setColor("#efefef");
          setFont("");
        }
      } catch (e) {
        console.log(e);
        switch (e.data.status) {
          case 400:
            alert("개인 보고서 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
              typeFilterHandler();
            });
            break;
          default:
            break;
        }
      }
    } else {
      try {
        const data = await request(
          "get",
          `/report/filter?size=6&page=0&type=CIRCLES&grade=GRADE2&field=`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        console.log(e.target.checked);
        if (e.target.checked === true) {
          setColor("#5955d8");
          setFont("#ffffff");
        } else {
          setColor("#efefef");
          setFont("");
        }
      } catch (e) {
        console.log(e);
        switch (e.data.status) {
          case 400:
            alert("동아리 보고서 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
              typeFilterHandler();
            });
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <label setColor={color}>
      <div style={{ background: color, color: font }} setFont={font}>
        {name}
      </div>
      <input onChange={typeFilterHandler} type="checkbox"></input>
    </label>
  );
};

export default Header;
