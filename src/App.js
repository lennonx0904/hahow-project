import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroList from "./components/Heros/HeroList";
import ROUTES from "./constant/routes";
import { SnackbarProvider } from "notistack";
import { GlobalContext } from "../src/context/globalContext/globalContext";
import { GlobalReducer } from "../src/context/globalContext/globalReducer";
function App() {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, {});

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      <SnackbarProvider max={1}>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.HOEM_PAGE} component={HeroList} />
            <Route exact path={ROUTES.SINGLE_HERO_PAGE} component={HeroList} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </GlobalContext.Provider>
  );
}

export default App;
