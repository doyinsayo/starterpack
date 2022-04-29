import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";

const BaseRouter = () => (
  <Hoc>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route exact path="/" element={<HomepageLayout/>} />
    </Routes>
  </Hoc>
);

export default BaseRouter;
