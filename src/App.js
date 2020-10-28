import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import UserRouter from "./Routers/UserRouter";
import ViewReport from './Components/ViewReport/ViewReport';

function App() {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/" component={UserRouter}/>
        <ViewReport/>
      </BrowserRouter>
    </>
  );
}

export default App;
