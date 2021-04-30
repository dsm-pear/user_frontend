<<<<<<< HEAD
import * as S from "../styled/SearchResult/SearchResultStyle";
import { StudentProfile } from "../../assets";
import React, { useCallback } from "react";
=======
import * as S from "../styled/SearchResult/SearchResultStyle.js";
import { StudentProfile } from "../../assets";
import React from "react";
>>>>>>> develop
import { useHistory } from "react-router-dom";

const SearchPropfile = ({ dataList }) => {
  const history = useHistory();

  const onLink = (email) => {
<<<<<<< HEAD
    history.push({
      pathname: `/user-profile`,
      state: { useremail : email}
    });
  };
  
=======
    history.push(`/user-profile/${email}`);
  };
>>>>>>> develop
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

<<<<<<< HEAD
  return <>{searchData ? <SearchPropfile dataList={searchData.userResponses} /> : <S.NoneData></S.NoneData>}</>;
=======
  return (
    <>
      {searchData ? (
        <SearchPropfile dataList={searchData.userResponses} />
      ) : (
        <S.NoneData></S.NoneData>
      )}
    </>
  );
>>>>>>> develop
};

export default SearchResultProfile;
