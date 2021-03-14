import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import RegisterToTravel from "../../pages/RegisterToTravel/RegisterToTravel";
import Header from "../Header/Header";



export default function Router() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/registerToTravel"}>
            <RegisterToTravel />
          </Route>
          {/* <Route exact path={"/contatos"}>
            <ContactsPage />
          </Route> */}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  