import styled from "styled-components";
import { MainBackground } from "../../../assets";
import { UserProfile } from "../../../assets";

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 680px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  //border: solid 1px #4d4d4d;
  border: solid 1px #e4eef2;
  //border: solid 1px #9c9c9c;
  //border-radius: 20px;
  background-color: #ffffff;
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
    background-image: url(${UserProfile});
    height: 150px;
    width: 150px;
    margin: 10px;
  }
  p,
  span {
    padding: 0 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    outline: none;
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

const MainProjectSolo = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 648px;
  height: 49px;
  border-radius: 6px;
  border: solid 1.6px #27d5b1;
  background-color: #ffffff;
  font-family: BBTreeGB;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  & :nth-child(1) {
    width: 80px;
    margin: 0 10px;
    color: #27d5b1;
  }
  & :nth-child(2) {
    width: 400px;
    margin: 0 10px;
  }
`;
const MainProjectTeam = styled(MainProjectSolo)`
  border: solid 1.6px #6192f3;

  & :nth-child(1) {
    color: #6192f3;
  }
`;

const MainProjectClub = styled(MainProjectSolo)`
  border: solid 1.6px #5955d8;

  & :nth-child(1) {
    color: #5955d8;
  }
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
};