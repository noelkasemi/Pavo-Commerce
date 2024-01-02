// NavigationRoutes.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Page/Partials/Header";
import Footer from "../Page/Partials/Footer";
import routes from "./Routes";
import BreadCrumb from '../Tools/BreadCrumb'

const NavigationRoutes = () => {
  return (
    <Router>
      <section>
        <Header />
        <BreadCrumb />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
        <Footer />
      </section>
    </Router>
  );
};

export default NavigationRoutes;
