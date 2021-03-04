import React, { useState } from "react";
import { request, useRefresh } from "../../utils/axios/axios";

const Header = (props) => {
  const { name } = props;
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");
  const [seleted, setSeleted] = useState(0);
  //const refreshHandler = useRefresh();

  //전체보기
  const typeFilterHandler = async (e) => {
    if (e.target.checked === true) {
      setColor("#5955d8");
      setFont("#ffffff");
      if (name === "팀") {
        try {
          await request(
            "get",
            `/report/filter?size=6&page=0&type=TEAM&grade=GRADE2&field=`,
            { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
            ""
          );

          console.log(e.target.checked);
        } catch (e) {
          console.log(e);
        }
      } else if (name === "개인") {
        try {
          await request(
            "get",
            `/report/filter?size=6&page=0&type=SOLE&grade=GRADE2&field=`,
            { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
            ""
          );
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          await request(
            "get",
            `/report/filter?size=6&page=0&type=CIRCLES&grade=GRADE2&field=`,
            { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
            ""
          );
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      setColor("#efefef");
      setFont("");
      try {
        await request(
          "get",
          `/report/filter?size=6&page=0&type=&grade=GRADE2&field=`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  const lists = [
    {
      id: 1,
      title: "팀",
    },
    {
      id: 2,
      title: "개인",
    },
    {
      id: 3,
      title: "동아리",
    },
  ];

  const handleColor = (row) => {
    setSeleted(row.id);
  };

  return (
    <>
      {lists.map((list) => (
        <button
          key={list.id}
          onClick={() => handleColor(list)}
          style={{
            backgroundColor: list.id === seleted ? "#5955d8" : "#efefef",
            color: list.id === seleted ? "white" : "black",
          }}
        >
          {list.title}
        </button>
      ))}
    </>
  );
};

export default Header;
