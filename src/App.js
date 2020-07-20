import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
        <Route exact path={ROUTES.SINGLE_HERO_PAGE} component={HeroList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
