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
          <Route path="/report-writing" component={ReportWriting} />
          {/* uri 명명 규칙은 카멜이나 스네이크등의 케이스보단 케밥 케이스를 선호 */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
