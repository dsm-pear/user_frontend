import React, { useState } from "react";
import * as S from "../styled/SearchResult/SearchResultStyle.js";
import { useHistory } from "react-router-dom";

const SearchReport = ({ dataList }) => {
  const history = useHistory();

  return dataList.map((data) => {
    const type =
      data.type === "TEAM" ? "팀" : data.type === "SOLE" ? "솔로" : "동아리";
    const color =
      data.type === "TEAM"
        ? "#6192f3"
        : data.type === "SOLE"
        ? "#27d5b1"
        : "#5955d8";
    const createTime = data.createdAt.split("T");
    return (
      <div
        onClick={() => history.push(`/view-report/${data.reportId}`)}
        key={data.reportId}
      >
        <S.Container bordercolor={color}>
          <S.ContainerContant>
            <S.ContainerBDC fontcolor={color}>[{type}]</S.ContainerBDC>
            <S.ContainerTitle>{data.title}</S.ContainerTitle>
            <S.ContainerDay>{createTime[0]}</S.ContainerDay>
          </S.ContainerContant>
        </S.Container>
      </div>
    );
  });
};
const SearchResultReport = ({ data }) => {
  console.log(data);

  return (
    <>
      {data ? (
        (console.log("asd"), (<SearchReport dataList={data.reportResponses} />))
      ) : (
        <S.NoneData></S.NoneData>
      )}
    </>
  );
};

export default SearchResultReport;
