//프로필 스타일
import styled from "styled-components";
import { MainBackground, StudentProfile } from "../../../assets";

const Main = styled.div`
  height: 100vh;
  background-image: url(${MainBackground});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
`;
const MainProfile = styled.div`
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 71%;
  height: 73%;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px #e4eef2;
  background-color: #ffffff;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 86%;
  height: 580px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 88%;
  margin: 20px;
`;

const ProPhoto = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & div {
    background-image: url(${StudentProfile});
    height: 150px;
    width: 150px;
    margin: 10px;
  }

  & a {
    width: 100%;
  }
  .input {
    justify-content: center;
    background-color: white;
    padding: 0 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 86%;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    font-family: "Noto Sans KR", sans-serif;
    box-shadow: 0 1px 4px #c3c7c7;
    cursor: pointer;
    background: none;

    &::placeholder {
      margin: 10px;
      font-size: 15px;
      color: black;
    }
  }
  .introduce {
    height: 30%;
    margin: 10px 0px;
    padding: 20px;
    width: 6%;
    min-width: 86%;
    max-width: 86%;
    min-height: 94px;
    max-height: 94px;
    resize: none;
  }
  textarea::placeholder {
    color: gray;
  }
`;
const Git = styled.div`
  background-color: white;
  padding: 0 20px;
  display: flex;
  align-items: center;
  width: 88%;
  height: 47px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  box-shadow: 0 1px 4px #c3c7c7;
  cursor: pointer;
`;

const Produce = styled.div`
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  box-shadow: 0 1px 4px #c3c7c7;
  cursor: pointer;
  height: 130px;
  width: 88%;
  padding: 20px;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
  width: 76%;
  height: 490px;
  border-radius: 10px;
  box-shadow: 0 1px 4px #c3c7c7;
  overflow: hidden auto;

  .not-report {
    padding: 20px;
    color: grey;
  }
`;

const PreProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  width: 80%;
`;

export const MainProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 49px;
  margin-top: 20px;
  border: 1.6px solid ${(props) => props.color};
  border-radius: 6px;
  background-color: #ffffff;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  .project_team {
    width: 10%;
    color: ${({ color }) => color};
  }
  .project_title {
    width: 60%;
    margin: 0 10px;
  }
  .project_date {
    width: 15%;
  }
  .project_save {
    width: 15%;
  }

  > * {
    &:nth-child(1) {
      width: 10%;
    }
    &:nth-child(2) {
      width: 60%;
      margin: 0 10px;
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 15%;
    }
  }
`;

const MainProjectSolo = styled(MainProject)`
  border: solid 1.6px #27d5b1;

  &:first-child > span:first-child {
    color: #27d5b1;
  }
`;

const MainProjectTeam = styled(MainProject)`
  border: solid 1.6px #6192f3;

  &:first-child > span:first-child {
    color: #6192f3;
  }
`;

const MainProjectClub = styled(MainProject)`
  border: solid 1.6px #5955d8;

  &:first-child > span:first-child {
    color: #5955d8;
  }
`;
const Modify = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 15px;
  background-color: #6192f3;
  outline: none;
  border: none;
  box-shadow: 0 1px 4px #c3c7c7;
  color: white;
  font-family: BBTreeGL;
  font-weight: bold;
  font-size: 15px;
`;

const ProjectCover = styled.div`
  width: 100%;
`;

export {
  MainProfile,
  Profile,
  MainProjectSolo,
  MainProjectTeam,
  MainProjectClub,
  Project,
  Main,
  ProPhoto,
  PreProject,
  Produce,
  Modify,
  Cover,
  Git,
  ProjectCover,
};
