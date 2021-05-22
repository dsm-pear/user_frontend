import React, { useState } from "react";
import * as S from "../styled/ViewReport/style";

const ProHeader = (props) => {
  const [seleted, setSeleted] = useState(1);

  //전체, 팀, 개인, 동아리 필터링
  const lists = [
    {
      id: 1,
      title: "전체",
    },
    {
      id: 2,
      title: "팀",
    },
    {
      id: 3,
      title: "개인",
    },
    {
      id: 4,
      title: "동아리",
    },
  ];

  const handleColor = async (row) => {
    setSeleted(row.id);
    if (row.title === "팀") {
      props.setType("TEAM");
    } else if (row.title === "개인") {
      props.setType("SOLE");
    } else if (row.title === "동아리") {
      props.setType("CIRCLES");
    } else {
      props.setType("");
    }
  };

  return (
    <>
      <S.ProjectHeader>
        <div className="nav">
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
        </div>
      </S.ProjectHeader>
    </>
  );
};

export default ProHeader;
