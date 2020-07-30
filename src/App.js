import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";
import { SnackbarProvider } from "notistack";
import Profile from "components/Profiles/Profile";

function App() {
  return (
    <SnackbarProvider max={1}>
      <HashRouter>
        <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
        <Route path={ROUTES.HEROES_PAGE} component={HeroList} />
        <Profile />
      </HashRouter>
    </SnackbarProvider>
  );
}

export default App;
