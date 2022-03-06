// import { createStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import FovoritesList from "./reduces";


export const store = createStore ( FovoritesList , composeWithDevTools())  