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
        {/* <Route path="/my-profile" component={MyProfile} exact /> */}
        <Route path="/view-report" component={ViewReport} exact />
        <Route path="/view-report/:reportid" component={MainReport} exact />
        <Route path="/report-writing" component={ReportWriting} exact />
        <Route path="/notice" component={Notice} exact />
        <Route path="/notice-content/:data" component={NoticeContent} exact />
        <Route path="/view-report/main-report" component={MainReport} exact />
        {/* <Route path="/search-result/:data" component={SearchResult} exact /> */}
        {/* <Route path="/view-report/:data" component={ReportWeb} exact /> */}
      </Switch>
    </>
  );
}

export default UserRouter;
