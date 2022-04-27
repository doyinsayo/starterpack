import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect,Provider } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";
import Login from "./containers/Login";
import Home from './containers/Home'
import Signup from "./containers/Signup";
import store from "./store";

const App = () => (
  <Provider store={store} >
      <Router>
          <CustomLayout>
              <Routes>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup} />
              </Routes>
          </CustomLayout>
      </Router>
  </Provider>
);

export default App;