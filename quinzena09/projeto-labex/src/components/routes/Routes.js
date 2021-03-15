import React, {useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import RegisterToTravel from "../../pages/RegisterToTravel/RegisterToTravel";
import Travels from "../../pages/Travels/Travels";
import Header from "../Header/Header";
import RestrictedScreen from "../../pages/RestrictedScreen/RestrictedScreen";
import DetailsTravel from "../../pages/DetailsTravel/DetailsTravel";



export default function Router() {
  const [ tokenLabex, setTokenLabex ] = useState("")

  useEffect(() => {
    (window.localStorage.getItem("tokenLabex") !== undefined && window.localStorage.getItem("tokenLabex") !== "")  
      ? setTokenLabex(window.localStorage.getItem("tokenLabex")) 
      : setTokenLabex("")
  },[])

  const isLogged = () => {
    console.log("caiu aqui")
    setTokenLabex(window.localStorage.getItem("tokenLabex")) 
  }

  return (
    <BrowserRouter>
      <Header 
        token={tokenLabex}
      />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/login"}>
          <Login 
            isLogged= {isLogged}
          />
        </Route>
        <Route exact path={"/registerToTravel"}>
          <RegisterToTravel />
        </Route>
        <Route exact path={"/homeRestrict/"}>
          <RestrictedScreen />
        </Route>
        <Route exact path={"/travels"}>
          <Travels />
        </Route>
        <Route exact path={"/detailsTravel"}>
          <DetailsTravel />
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
  