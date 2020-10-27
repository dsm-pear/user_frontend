import React from "react";
import React from "react";
import Header from "./components/Main/Header";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import Login from "./Components/Login/Login.js";
import UserProfile from "./Components/Profile/UserProfile";
import MyProfile from "./Components/Profile/MyProfile";

function App() {
  return (
    <>
      <GlobalFonts />
      <Header />
      <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
      </BrowserRouter>
    </>
  );
}

export default App;
