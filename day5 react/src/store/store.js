// import { createStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import FovoritesList from "./reduces";


export const store = createStore ( FovoritesList , composeWithDevTools(applyMiddleware(thunk)))  