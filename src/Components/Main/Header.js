import React from "react";
import Pearlogo from "../../img/pearlogo.svg";
import * as S from "../../style/MainStyled/HeaderStyle";

const Header = () => {
  return (
    <>
      <S.HeaderBox>
        <S.HeaderSubBox>
          {/* 로고 */}
          <S.Mainlogo>
            <img src={Pearlogo} alt="Pearlogo" />
          </S.Mainlogo>

          {/* 검색창 */}
          <S.SeachBar>
            <S.SeachBarSelect name="china">
              <option value="1">제목</option>
              <option value="2">언어</option>
              <option value="3">게시물</option>
              <option value="4">프로필</option>
            </S.SeachBarSelect>
            <S.SeachBarInput placeholder="검색창" />
            <S.SeachBarButton>검색</S.SeachBarButton>
          </S.SeachBar>

          {/* 메뉴 */}
          <S.MenuBar>
            <S.MenuUl>
              <S.MenuList>공지사항</S.MenuList>
              <S.MenuList>보고서 작성</S.MenuList>
              <S.MenuList>보고서 보기</S.MenuList>
            </S.MenuUl>
          </S.MenuBar>
        </S.HeaderSubBox>
      </S.HeaderBox>
    </>
  );
};

export default Header;
