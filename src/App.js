<<<<<<< Updated upstream
import React from "react";
=======
import React from 'react';
import Header from './components/Main/Header';
>>>>>>> Stashed changes
import { BrowserRouter, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import Login from "./Components/Login/Login.js";
import UserProfile from "./Components/Profile/UserProfile";
import MyProfile from "./Components/Profile/MyProfile";
<<<<<<< Updated upstream
import ViewReport from './Components/ViewReport/ViewReport';
=======
>>>>>>> Stashed changes


function App() {
  return (
    <>
<<<<<<< Updated upstream
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <ViewReport/>
      </BrowserRouter>

=======
    <GlobalFonts />
    <Header/>
    <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/UserProfile" component={UserProfile} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
      </BrowserRouter>
>>>>>>> Stashed changes
    </>
  );
}

export default App;