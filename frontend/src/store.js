import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'

const rootReducer = combineReducers({
    auth: authReducer
  });

const store = configureStore({reducer:rootReducer, middleware:[thunk]});

export default store
