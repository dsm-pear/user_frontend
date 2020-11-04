import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import Header from "../Components/Main/Header";
// 로그인 & 회원가입
import Login from "../Components/Login/Login";
import SignUp from '../Components/Login/SignUp';

// 보고서 보기 
import UserProfile from "../Components/Profile/UserProfile";
import MyProfile from "../Components/Profile/MyProfile";
import ViewReport from '../Components/ViewReport/ViewReport';
import ReportWeb from '../Components/ViewReport/ViewReportGroup/ReportWeb';
import ReportApp from '../Components/ViewReport/ViewReportGroup/ReportApp';
import ReportGame from '../Components/ViewReport/ViewReportGroup/ReportGame';
import ReportAI from '../Components/ViewReport/ViewReportGroup/ReportAI';
import ReportEmb from '../Components/ViewReport/ViewReportGroup/ReportEmb';
import ReportInfo from '../Components/ViewReport/ViewReportGroup/ReportInfo';
import ReportFus from '../Components/ViewReport/ViewReportGroup/ReportFus';


function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/Login" component={Login} exact />
        <Route path="/SignUp" component={SignUp} exact/>
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <Route path="/ViewReport" component={ViewReport} exact/>
        {/* 보고서 파트별로  소프트웨어 개발과 */}
        <Route path="/ViewReport/ReportWeb" component={ReportWeb} exact />
        <Route path="/ViewReport/ReportApp" component={ReportApp} exact />
        <Route path="/ViewReport/ReportGame" component={ReportGame} exact />
        <Route path="/ViewReport/ReportAI" component={ReportAI} exact />
        {/* 임베디드 개발과 */}
        <Route path="/ViewReport/ReportEmb" component={ReportEmb} exact />
        {/*정보 보안 */}
        <Route path="/ViewReport/ReportInfo" component={ReportInfo} exact />
        {/*융합 보고서 */}
        <Route path="/ViewReport/ReportFus" component={ReportFus} exact />
      </Switch>
    </>
  );
}

export default UserRouter;
