import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import Header from "../Components/Main/Header";
import Login from "../Components/Login/Login";
import UserProfile from "../Components/Profile/UserProfile";
import MyProfile from "../Components/Profile/MyProfile";
import ViewReport from '../Components/ViewReport/ViewReport';

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Header />
      <Switch>
        <Route path="/Login" component={Login} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <Route path="/ViewReport" component={ViewReport} exact/>
      </Switch>
    </>
  );
}

export default UserRouter;
