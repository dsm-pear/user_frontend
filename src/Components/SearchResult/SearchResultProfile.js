
import * as S from "../styled/SearchResult/SearchResultStyle.js";
import { StudentProfile } from "../../assets";
import React from "react";
import { useHistory } from "react-router-dom";

const SearchPropfile = ({ dataList }) => {
  const history = useHistory();

  const onLink = (email) => {
    history.push(`/user-profile/${email}`);
  };
  return dataList.map((data) => (
    <div onClick={() => onLink(data.email)} key={data.email}>
      <S.Container style={{ color: "#6192f3" }}>
        <S.ContainerContant>
          <S.ResultProfile>
            <img src={StudentProfile} alt="사진" />
          </S.ResultProfile>

          <S.ResultName>{data.name}</S.ResultName>

          <S.ResultEmail>{data.email}</S.ResultEmail>
        </S.ContainerContant>
      </S.Container>
    </div>
  ));
};
const SearchResultProfile = (props) => {
  const searchData = props.data;
  return <>{searchData ? <SearchPropfile dataList={searchData.userResponses} /> : <S.NoneData></S.NoneData>}</>;
};

export default SearchResultProfile;
