import { combineReducers } from "redux";
import userReducer from "./user";
import sellerReducer from "./seller";
const rootReducer = combineReducers({ userReducer, sellerReducer });
export default rootReducer;
