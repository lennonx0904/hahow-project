import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";
import { SnackbarProvider } from "notistack";
// import ProfileWrapper from "components/Profiles/ProfileWrapper";

function App() {
  
  return (
    <SnackbarProvider max={1}>
      <HashRouter>
        <Switch>
          <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
          <Route exact path={ROUTES.HEROES_PAGE} component={HeroList} />
          <Route exact path={ROUTES.SINGLE_HERO_PAGE} component={HeroList} />
        </Switch>
        {/* <ProfileWrapper /> */}
      </HashRouter>
    </SnackbarProvider>
  );
}

export default App;
