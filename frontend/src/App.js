/*import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
// import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";
// import Login from "./containers/Login";
// import Home from './containers/Home'
// import Signup from "./containers/Signup";
import store from "./store";
import BaseRouter from "./routes";
import Hoc from "./hoc/hoc";


function App () {
  <Provider store={store} >
      <Hoc>
        <CustomLayout >
          <BaseRouter />
        </CustomLayout>
      </Hoc>
  </Provider>
};

export default App;*/

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
