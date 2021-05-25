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
  SearchResult,
  SubmitSuccess,
  Main,
} from "../Components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/user-profile/:userEmail" component={UserProfile} exact />
        <Route path="/my-profile" component={MyProfile} exact />
        <Route path="/view-report" component={ViewReport} exact />
        <Route path="/view-report/:reportId" component={MainReport} exact />
        <Route path="/report-writing" component={ReportWriting} exact />

        <Route path="/notice" component={Notice} exact />
        <Route path="/notice-content/:data" component={NoticeContent} exact />
        <Route path="/search-result" component={SearchResult} exact />

        <Route path="/notice" component={Notice} exact />
        <Route path="/notice-content/:data" component={NoticeContent} exact />

        <Route path="/search-result/:data" component={SearchResult} exact />
      </Switch>
    </>
  );
}

export default UserRouter;
