import { applyMiddleware, combineReducers, compose} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    auth: authReducer
  });

const store = configureStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

export default store
