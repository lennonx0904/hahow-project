import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";
import { SnackbarProvider } from "notistack";
import Profile from "components/Profiles/Profile";
import { GlobalStyle } from "components/common/globalStyle";

function App() {
  return (
    <SnackbarProvider max={1}>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
          <Route path={ROUTES.HEROES_PAGE} component={HeroList} />
        </Switch>
        <Profile />
      </HashRouter>
    </SnackbarProvider>
  );
}

export default App;
