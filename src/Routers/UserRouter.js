import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import {
  Login,
  SignUp,
  UserProfile,
  MyProfile,
  ViewReport,
  ReportAI,
  ReportApp,
  ReportEmb,
  ReportFus,
  ReportGame,
  ReportInfo,
  ReportWeb,
  ReportWriting,
  Notice,
  NoticeContent,
  SearchResult,
  ReportWritingModal,
  TeamStateModal
} from "../Components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/Login" component={Login} exact />
        <Route path="/Signup" component={SignUp} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <Route path="/ViewReport" component={ViewReport} exact />
        <Route path="/report-writing" component={ReportWriting} exact />
        <Route path="/notice" component={Notice} exact/>
        <Route path="/notice-content" component={NoticeContent} exact/>
        <Route path="/search-result" component={SearchResult} exact/>
        <Route path="/report-writing-modal" component={ReportWritingModal} exact />
        <Route path="/team-state-modal" component={TeamStateModal} exact />
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
