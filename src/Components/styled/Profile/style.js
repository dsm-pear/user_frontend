//프로필 스타일

import styled from "styled-components";
import { MainBackground, StudentProfile} from "../../../assets";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${MainBackground});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
`;
const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 680px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px #e4eef2;
  background-color: #ffffff;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 580px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 580px;
  margin: 20px;
`;

const ProPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    background-image: url(${StudentProfile});
    height: 150px;
    width: 150px;
    margin: 10px;
  }
  input {
    background-color: white;
    padding: 0 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    font-family: BBTreeGB;
    box-shadow: 0 1px 4px #c3c7c7;
    cursor: pointer;

    &::placeholder {
      margin: 10px;
      font-size: 15px;
      color: black;
    }
  }
`;

const Produce = styled.div`
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  font-family: BBTreeGB;
  box-shadow: 0 1px 4px #c3c7c7;
  cursor: pointer;
  height: 160px;
  width: 300px;
  padding: 20px;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  width: 800px;
  height: 490px;
  border-radius: 10px;
  box-shadow: 0 1px 4px #c3c7c7;
`;

const PreProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  width: 700px;
`;

export const MainProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 648px;
  height: 49px;
  margin: 5px;
  border: 1.6px solid ${(props) => props.color};
  border-radius: 6px;
  background-color: #ffffff;
  font-family: BBTreeGB;
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

const ProNum = styled.div``;

export {
  MainProfile,
  Profile,
  MainProjectSolo,
  MainProjectTeam,
  MainProjectClub,
  ProNum,
  Project,
  Main,
  ProPhoto,
  PreProject,
  Produce,
  Modify,
  Cover,
};
