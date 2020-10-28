import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import Login from "./Components/Login/Login.js";
import UserProfile from "./Components/Profile/UserProfile";
import MyProfile from "./Components/Profile/MyProfile";
import ReportWriting from "./Components/ReportWriting/ReportWriting";

function App() {
  return (
    <>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/ReportWriting" component={ReportWriting} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
