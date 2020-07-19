import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import Profile from "./components/Profiles/Profile";

import { HeroContext } from "./context/heroContext/heroContext";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/heroes" component={HeroList} />
      </Switch>

      <Profile />
    </BrowserRouter>
  );
}

export default App;
