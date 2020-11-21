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
  MainReport,
  ReportWriting,
  Notice,
  NoticeContent,
  ReportWritingModal,
  TeamStateModal,
  SubmitReportModal,
  SubmitSuccess,
  SearchResult,
  main,
} from "../Components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/user-profile" component={UserProfile} exact />
        <Route path="/my-profile" component={MyProfile} exact />
        <Route path="/view-report" component={ViewReport} exact />
        <Route path="/report-writing" component={ReportWriting} exact />
        <Route path="/notice" component={Notice} exact/>
        <Route path="/notice-content" component={NoticeContent} exact/>
        <Route path="/report-writing-modal" component={ReportWritingModal} exact />
        <Route path="/team-state-modal" component={TeamStateModal} exact />
        <Route path="/submit-report-modal" component={SubmitReportModal} exact />
        <Route path="/submit-succes-modal" component={SubmitSuccess} exact />
        {/*검색 조건에 따라 제목, 언어, 프로필*/}
        <Route path="/search-result/:data" component={SearchResult} exact/>
    
        {/* 보고서 파트별로  소프트웨어 개발과 */}
        <Route path="/view-report/report-web" component={ReportWeb} exact />
        <Route path="/view-report/report-app" component={ReportApp} exact />
        <Route path="/view-report/report-game" component={ReportGame} exact />
        <Route path="/view-report/report-ai" component={ReportAI} exact />
        {/* 임베디드 개발과 */}
        <Route path="/view-report/report-emb" component={ReportEmb} exact />
        {/*정보 보안 */}
        <Route path="/view-report/report-info" component={ReportInfo} exact />
        {/*융합 보고서 */}
        <Route path="/view-report/report-fus" component={ReportFus} exact />
        <Route path="/view-report/main-report" component={MainReport} exact />
      </Switch>
    </>
  );
}

export default UserRouter;
