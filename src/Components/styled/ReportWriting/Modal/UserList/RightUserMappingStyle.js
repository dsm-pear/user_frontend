import styled from "styled-components";

export const RightModalMain = styled.div`
  z-index: 5;
  width: 350px;
  height: 450px;
  border: 1px solid #ffffff;
  border-left: 2px solid #e4eef2;
  border-radius: 5px;
  background-color: #ffffff;
  top: 0;
  right: 0;

  &:hover {
    cursor: default;
  }
`;

export const RightModalSort = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;

  &:hover {
    cursor: default;
  }
`;

export const RightCloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: default;
  }
  span > img {
    width: 13px;
  }
  span > img:hover {
    cursor: pointer;
  }
`;

export const RightSearchResult = styled.div`
  height: 72%;
  max-height: 72%;
  margin: 3rem 1rem;
  padding: 0.5rem 0rem;

  overflow-y: scroll;

  &:hover {
    cursor: default;
  }

  &::-webkit-scrollbar {
    width: 20px;
    /* 스크롤바의 width */
  }

  &::-webkit-scrollbar-thumb {
    background: #5955d8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 7.5px solid transparent;
    /* 스크롤바 색 */
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    margin: 0.4rem;
    border-radius: 10px;
    /* 스크롤바의 전체 */
  }
`;

export const RightResult = styled.div`
  height: 14.5%;
  margin: 8px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: default;
  }
`;

export const MemberBox = styled.div`
  width: 95%;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #ffffff;
  border-radius: 7px;
  background-color: #e1efff;
  border: 2px solid #5955d8;

  &:hover {
    cursor: default;
  }
`;

export const RightSideBox = styled.div`
  width: 100%;
  font-size: 13px;
  font-family: BBTreeGL;

  &:hover {
    cursor: default;
  }
`;

export const RightBolderCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: default;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  font-size: 13px;
  font-family: BBTreeGL;

  &:hover {
    cursor: default;
  }
`;

export const MemberSelect = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 12px;

    &:hover {
      cursor: default;
    }
  }

  &:hover {
    cursor: default;
  }
`;
