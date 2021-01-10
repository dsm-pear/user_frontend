import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import {
  Login,
  SignUp,
  UserProfile,
  MyProfile,
  ViewReport,
  MainReport,
  ReportWriting,
  Notice,
  NoticeContent,
  ReportWritingModal,
  TeamStateModal,
  SubmitReportModal,
  SubmitSuccess,
  SearchResult,
  Main,
  ReportWeb,
} from "../Components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/user-profile/:email" component={UserProfile} exact />
        <Route path="/my-profile" component={MyProfile} exact />
        <Route path="/view-report" component={ViewReport} exact />
        <Route path="/view-report/:reportid" component={MainReport} exact />
        <Route path="/report-writing" component={ReportWriting} exact />
        <Route path="/notice" component={Notice} exact />
        <Route path="/notice-content" component={NoticeContent} exact />
        <Route
          path="/report-writing-modal"
          component={ReportWritingModal}
          exact
        />
        <Route path="/team-state-modal" component={TeamStateModal} exact />
        <Route
          path="/submit-report-modal"
          component={SubmitReportModal}
          exact
        />
        <Route path="/submit-succes-modal" component={SubmitSuccess} exact />
        {/*검색 조건에 따라 제목, 언어, 프로필*/}
        <Route path="/search-result/:data" component={SearchResult} exact />
        <Route path="/view-report/:data" component={ReportWeb} exact />
        
      </Switch>
    </>
  );
}

export default UserRouter;
