import React from "react";
import { Route,  Redirect } from "react-router-dom";

import VendorForm from "./components/CourseGoals/CourseInput/VendorForm";
import "./App.css";
import VList from "./components/CourseGoals/CourseInput/VList";
import MainNavigation from "./components/CourseGoals/CourseInput/MainNavigation";
import Detail from "./components/CourseGoals/CourseInput/Detail";
import Plant from "./components/CourseGoals/CourseInput/Plant";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
      
      <Route path="/">
        <Redirect to="/VendorForm" />
      </Route>
      <Route path="/VendorForm">
        <VendorForm />
      </Route>
      <Route path="/Vlist">
        <VList />
      </Route>
      <Route path="/Plant" exact>
        <Plant />
      </Route>
      <Route path="/Plant/:myId">
        <Detail />
      </Route>
      
      
      </main>
    </div>
  );
};

export default App;
