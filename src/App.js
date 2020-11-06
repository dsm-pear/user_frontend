import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import UserRouter from "./Routers/UserRouter";


function App() {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/" component={UserRouter} />
      </BrowserRouter>
    </>
  );
}

export default App;
