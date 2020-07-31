import React from "react";
// import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";
import { SnackbarProvider } from "notistack";
import Profile from "components/Profiles/Profile";
import { GlobalStyle } from "components/common/globalStyle";
function App() {
  return (
    <SnackbarProvider max={1}>
      <HashRouter>
        <GlobalStyle />
        <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
        <Route path={ROUTES.HEROES_PAGE} component={HeroList} />
        <Profile />
      </HashRouter>
    </SnackbarProvider>
  );
}

export default App;
