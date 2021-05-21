import React from "react";
import * as S from "../styled/SearchResult/SearchResultStyle";
import { useHistory } from "react-router-dom";

const SearchReport = ({dataList}) => {
  const history = useHistory();

  const onLink = (id) => {
    history.push(`/view-report/${id}`)
  }

  return dataList.map((data) => {
    const type = data.type === "TEAM" ? "팀" : data.type === "SOLE" ? "개인" : "동아리";
    const color = data.type === "TEAM" ? "#6192f3" : data.type === "SOLE" ? "#27d5b1" : "#5955d8";
    const createTime = data.createdAt.split("T");

    return (
      <div onClick={()=>onLink(data.reportId)} key={data.reportId}>
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
const SearchResultReport = ({data}) => {
  console.log(data)

  return <>{data ? <SearchReport dataList={data.reportResponses} /> : <S.NoneData></S.NoneData>}</>;
};

export default SearchResultReport;
