import React, { useEffect, useState } from "react";
import * as S from "../styled/ViewReport/style";
import {  /* useRefresh */ } from "../../utils/axios/axios";

const ProHeader = (props) => {
  const [seleted, setSeleted] = useState(0);
  //const refreshHandler = useRefresh();

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

  const handleColor = async (row) => {
    setSeleted(row.id);
    if (row.title === "팀") {
      props.setType("TEAM");
    } else if (row.title === "개인") {
      props.setType("SOLE");
    } else {
      props.setType("CIRCLES");
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
