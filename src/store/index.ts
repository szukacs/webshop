
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"
import {configureStore} from "@reduxjs/toolkit";
import * as process from "process";
import thunk from "redux-thunk";

const reducers = combineReducers({});

const config = {
  key: 'root',
  storage,
}

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store;