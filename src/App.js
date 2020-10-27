import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import Login from "./Components/Login/Login.js";
import UserProfile from "./Components/Profile/UserProfile";
import MyProfile from "./Components/Profile/MyProfile";
import ViewReport from './Components/ViewReport/ViewReport';

const App = () => {
  return(
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <ViewReport/>
      </BrowserRouter>

    </>
  )
}

export default App;
